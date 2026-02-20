"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TEXT_REGISTRY, TEXT_ICONS } from "@/data/text-registry";
import { GEOGRAPHY_REGISTRY } from "@/data/geography/topic-registry";
import { RS_REGISTRY } from "@/data/rs/topic-registry";
import { useAuth } from "@/components/AuthProvider";
import { saveUserProfile } from "@/lib/storage";
import type { UserProfile, GradeLevel, SubjectGrade } from "@/data/types";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const GRADE_HINTS: Record<number, string> = {
  1: "Foundation level",
  2: "Foundation level",
  3: "Foundation level",
  4: "Standard pass",
  5: "Strong pass",
  6: "Above average",
  7: "Top tier",
  8: "Exceptional",
  9: "Highest achievable",
};

const SUBJECT_INFO = [
  { id: "english-lit" as const, name: "English Literature", board: "AQA", code: "8702", colour: "purple" },
  { id: "geography" as const, name: "Geography", board: "AQA", code: "8035", colour: "teal" },
  { id: "rs" as const, name: "Religious Studies", board: "AQA", code: "8062", colour: "blue" },
];

/* ── Animation variants ── */

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: EASE } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.8 },
  },
  exit: {
    opacity: 0, scale: 0.95, y: 10,
    transition: { duration: 0.2, ease: EASE },
  },
};

const stepVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.25, ease: EASE } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

const gradeStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } },
};

const gradeButton = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 500, damping: 25 } },
};

const expandCollapse = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: EASE } },
};

interface OnboardingModalProps {
  editMode?: boolean;
  onClose?: () => void;
}

export default function OnboardingModal({ editMode = false, onClose }: OnboardingModalProps) {
  const { user, needsOnboarding, profile, refreshProfile } = useAuth();

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const [firstName, setFirstName] = useState("");
  const [yearGroup, setYearGroup] = useState<number | null>(null);

  // Subject state
  const [enabledSubjects, setEnabledSubjects] = useState<Set<string>>(new Set(["english-lit"]));
  const [subjectGrades, setSubjectGrades] = useState<Record<string, GradeLevel>>({});

  // Content state
  const [selectedTexts, setSelectedTexts] = useState<string[]>([]);
  const [selectedGeoTopics, setSelectedGeoTopics] = useState<string[]>([]);
  const [selectedRsTopics, setSelectedRsTopics] = useState<string[]>([]);

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Pre-populate in edit mode
  useEffect(() => {
    if (editMode && profile) {
      setFirstName(profile.firstName);
      setYearGroup(profile.yearGroup);

      const enabled = new Set<string>();
      const grades: Record<string, GradeLevel> = {};

      if (profile.subjects && profile.subjects.length > 0) {
        for (const s of profile.subjects) {
          enabled.add(s.subjectId);
          grades[s.subjectId] = s.targetGrade;
        }
      } else {
        enabled.add("english-lit");
        grades["english-lit"] = profile.targetGrade;
      }

      setEnabledSubjects(enabled);
      setSubjectGrades(grades);
      setSelectedTexts(profile.textSlugs);
      setSelectedGeoTopics(profile.geoTopicSlugs ?? []);
      setSelectedRsTopics(profile.rsTopicSlugs ?? []);
      setStep(1);
    }
  }, [editMode, profile]);

  // Body scroll lock
  const isOpen = editMode ? true : needsOnboarding;
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || !user) return null;

  // ─── Navigation ───

  function goForward(to: number) {
    setDirection(1);
    setStep(to);
  }

  function goBack(to: number) {
    setDirection(-1);
    setStep(to);
  }

  // ─── Helpers ───

  function toggleSubject(id: string) {
    setEnabledSubjects((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function setGradeFor(subjectId: string, grade: GradeLevel) {
    setSubjectGrades((prev) => ({ ...prev, [subjectId]: grade }));
  }

  function toggleText(slug: string) {
    setSelectedTexts((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  function toggleGeoTopic(slug: string) {
    setSelectedGeoTopics((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  function toggleRsTopic(slug: string) {
    setSelectedRsTopics((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  // ─── Validation ───
  const hasEngLit = enabledSubjects.has("english-lit");
  const hasGeo = enabledSubjects.has("geography");
  const hasRs = enabledSubjects.has("rs");

  const step1Valid = firstName.trim().length > 0 && yearGroup !== null;
  const step2Valid =
    enabledSubjects.size > 0 &&
    [...enabledSubjects].every((id) => subjectGrades[id] != null);
  const step3Valid =
    (!hasEngLit || selectedTexts.length > 0) &&
    (!hasGeo || selectedGeoTopics.length > 0) &&
    (!hasRs || selectedRsTopics.length > 0);

  // ─── Save ───
  async function handleSave() {
    if (!step1Valid || !step2Valid || !step3Valid || !user) return;
    setSaving(true);
    setSaveError(null);

    const subjects: SubjectGrade[] = [...enabledSubjects].map((id) => ({
      subjectId: id as SubjectGrade["subjectId"],
      targetGrade: subjectGrades[id],
    }));

    const defaultGrade = subjectGrades["english-lit"] ?? subjectGrades["geography"] ?? subjectGrades["rs"] ?? 5;

    try {
      await saveUserProfile(
        {
          firstName: firstName.trim(),
          yearGroup: yearGroup as UserProfile["yearGroup"],
          targetGrade: defaultGrade as GradeLevel,
          subjects,
          textSlugs: hasEngLit ? selectedTexts : [],
          geoTopicSlugs: hasGeo ? selectedGeoTopics : [],
          rsTopicSlugs: hasRs ? selectedRsTopics : [],
        },
        user.id
      );
      await refreshProfile();
      setSaving(false);
      if (editMode && onClose) onClose();
    } catch (err) {
      setSaving(false);
      setSaveError(err instanceof Error ? err.message : "Failed to save profile. Please try again.");
    }
  }

  // ─── Data ───
  const activeTextGroups = TEXT_REGISTRY.filter((g) => g.texts.some((t) => t.status === "active"));
  const activeGeoGroups = GEOGRAPHY_REGISTRY.filter((g) => g.topics.some((t) => t.status === "active"));
  const activeRsGroups = RS_REGISTRY.filter((g) => g.topics.some((t) => t.status === "active"));

  const directedStepVariants = {
    enter: { opacity: 0, x: direction > 0 ? 40 : -40 },
    center: stepVariants.center,
    exit: { opacity: 0, x: direction > 0 ? -40 : 40, transition: { duration: 0.25, ease: EASE } },
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={editMode ? onClose : undefined}
            aria-hidden
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              className="w-full max-w-lg bg-bg border border-border rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.2)] overflow-hidden max-h-[90vh] flex flex-col pointer-events-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Progress bar */}
              <div className="h-1 bg-surface shrink-0">
                <motion.div
                  className="h-full bg-purple"
                  initial={false}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>

              {/* Close button (edit mode only) */}
              {editMode && onClose && (
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-[102] p-1.5 rounded-lg text-grey hover:text-text hover:bg-surface-hover transition-colors"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.85 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              )}

              <div className="p-6 sm:p-8 overflow-y-auto">
                <AnimatePresence mode="wait" custom={direction}>
                  {/* ═══ Step 1: About You ═══ */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      variants={directedStepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-6"
                    >
                      <div>
                        <motion.h2
                          className="font-display font-bold text-[22px] text-text"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
                        >
                          {editMode ? "Edit your profile" : "Welcome to Straight Nines"}
                        </motion.h2>
                        <motion.p
                          className="font-ui text-[14px] text-grey mt-1"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                        >
                          {editMode ? "Update your details below." : "Let\u2019s personalise your revision experience."}
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
                      >
                        <label className="block font-ui text-[13px] font-semibold text-text mb-2">
                          First name
                        </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Enter your first name"
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 font-ui text-[15px] text-text placeholder:text-grey/50 outline-none focus:border-purple focus:ring-1 focus:ring-purple/30 transition-colors"
                          autoFocus
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
                      >
                        <label className="block font-ui text-[13px] font-semibold text-text mb-2">
                          Year group
                        </label>
                        <motion.div
                          className="grid grid-cols-3 gap-3"
                          variants={staggerContainer}
                          initial="hidden"
                          animate="visible"
                        >
                          {([8, 9, 10, 11] as const).map((yr) => {
                            const labels: Record<number, string> = {
                              8: "KS3", 9: "KS3", 10: "Starting GCSE", 11: "Exam year",
                            };
                            return (
                              <motion.button
                                key={yr}
                                variants={staggerItem}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setYearGroup(yr)}
                                className={`rounded-xl border-2 p-3 text-center transition-colors cursor-pointer ${
                                  yearGroup === yr
                                    ? "border-purple bg-purple-light"
                                    : "border-border bg-surface hover:border-grey/30"
                                }`}
                              >
                                <p className={`font-display font-bold text-[18px] ${yearGroup === yr ? "text-purple" : "text-text"}`}>
                                  Year {yr}
                                </p>
                                <p className="font-ui text-[11px] text-grey mt-0.5">{labels[yr]}</p>
                              </motion.button>
                            );
                          })}
                        </motion.div>
                      </motion.div>

                      <motion.button
                        onClick={() => goForward(2)}
                        disabled={!step1Valid}
                        whileHover={step1Valid ? { scale: 1.02, y: -1 } : {}}
                        whileTap={step1Valid ? { scale: 0.97 } : {}}
                        className="w-full py-3 rounded-xl font-ui font-semibold text-[15px] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-purple text-white hover:bg-purple/90"
                      >
                        Continue
                      </motion.button>
                    </motion.div>
                  )}

                  {/* ═══ Step 2: Subjects + Target Grades ═══ */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      variants={directedStepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-6"
                    >
                      <div>
                        <motion.button
                          onClick={() => goBack(1)}
                          className="font-ui text-[13px] text-grey hover:text-text transition-colors mb-2 cursor-pointer"
                          whileHover={{ x: -3 }}
                          transition={{ duration: 0.15 }}
                        >
                          &larr; Back
                        </motion.button>
                        <motion.h2
                          className="font-display font-bold text-[22px] text-text"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
                        >
                          Your subjects
                        </motion.h2>
                        <motion.p
                          className="font-ui text-[14px] text-grey mt-1"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                        >
                          Choose your subjects and set a target grade for each. Your AI marking and model answers are tailored to your target.
                        </motion.p>
                      </div>

                      <motion.div
                        className="space-y-3"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                      >
                        {SUBJECT_INFO.map((subject) => {
                          const enabled = enabledSubjects.has(subject.id);
                          const grade = subjectGrades[subject.id];
                          const colourMap: Record<string, { border: string; bg: string; toggle: string; grade: string }> = {
                            purple: { border: "border-purple", bg: "bg-purple-light", toggle: "border-purple bg-purple", grade: "border-purple bg-purple text-white shadow-[0_2px_8px_rgba(140,84,244,0.3)]" },
                            teal: { border: "border-teal", bg: "bg-teal-light", toggle: "border-teal bg-teal", grade: "border-teal bg-teal text-white shadow-[0_2px_8px_rgba(13,148,136,0.3)]" },
                            blue: { border: "border-blue", bg: "bg-blue-light", toggle: "border-blue bg-blue", grade: "border-blue bg-blue text-white shadow-[0_2px_8px_rgba(59,130,246,0.3)]" },
                          };
                          const c = colourMap[subject.colour] ?? colourMap.purple;
                          const borderClass = enabled ? c.border : "border-border";
                          const bgClass = enabled ? c.bg : "bg-surface";

                          return (
                            <motion.div
                              key={subject.id}
                              variants={staggerItem}
                              layout
                              className={`rounded-xl border-2 ${borderClass} ${bgClass} p-4 transition-colors`}
                            >
                              {/* Subject header */}
                              <motion.button
                                onClick={() => toggleSubject(subject.id)}
                                className="flex items-center gap-3 w-full text-left cursor-pointer"
                                whileTap={{ scale: 0.98 }}
                              >
                                {/* Toggle circle */}
                                <motion.span
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                                    enabled ? c.toggle : "border-grey/30"
                                  }`}
                                  animate={enabled ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <AnimatePresence>
                                    {enabled && (
                                      <motion.svg
                                        className="w-3.5 h-3.5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </motion.svg>
                                    )}
                                  </AnimatePresence>
                                </motion.span>

                                <div className="flex-1">
                                  <p className={`font-display font-bold text-[16px] transition-colors ${enabled ? "text-text" : "text-grey"}`}>
                                    {subject.name}
                                  </p>
                                  <p className="font-ui text-[11px] text-grey">
                                    {subject.board} {subject.code}
                                  </p>
                                </div>
                              </motion.button>

                              {/* Grade picker (shown when enabled) */}
                              <AnimatePresence initial={false}>
                                {enabled && (
                                  <motion.div
                                    variants={expandCollapse}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="overflow-hidden"
                                  >
                                    <div className="mt-4 pt-3 border-t border-border/50">
                                      <label className="block font-ui text-[12px] font-semibold text-text mb-2">
                                        Target grade
                                      </label>
                                      <motion.div
                                        className="flex gap-1.5"
                                        variants={gradeStagger}
                                        initial="hidden"
                                        animate="visible"
                                      >
                                        {([9, 8, 7, 6, 5] as const).map((g) => {
                                          const selected = grade === g;
                                          const activeClass = c.grade;
                                          return (
                                            <motion.button
                                              key={g}
                                              variants={gradeButton}
                                              whileHover={{ y: -2 }}
                                              whileTap={{ scale: 0.88 }}
                                              onClick={() => setGradeFor(subject.id, g)}
                                              className={`flex-1 h-10 rounded-lg border-2 font-display font-bold text-[16px] transition-colors cursor-pointer ${
                                                selected ? activeClass : "border-border bg-bg text-text hover:border-grey/40"
                                              }`}
                                            >
                                              {g}
                                            </motion.button>
                                          );
                                        })}
                                      </motion.div>
                                      <AnimatePresence mode="wait">
                                        {grade != null && (
                                          <motion.p
                                            key={grade}
                                            className="font-ui text-[12px] text-grey mt-2 text-center"
                                            initial={{ opacity: 0, y: 4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -4 }}
                                            transition={{ duration: 0.2, ease: EASE }}
                                          >
                                            Grade {grade} &mdash; {GRADE_HINTS[grade]}
                                          </motion.p>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          );
                        })}
                      </motion.div>

                      <AnimatePresence>
                        {enabledSubjects.size === 0 && (
                          <motion.p
                            className="font-ui text-[13px] text-red text-center"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                          >
                            Select at least one subject to continue.
                          </motion.p>
                        )}
                      </AnimatePresence>

                      <motion.button
                        onClick={() => goForward(3)}
                        disabled={!step2Valid}
                        whileHover={step2Valid ? { scale: 1.02, y: -1 } : {}}
                        whileTap={step2Valid ? { scale: 0.97 } : {}}
                        className="w-full py-3 rounded-xl font-ui font-semibold text-[15px] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-purple text-white hover:bg-purple/90"
                      >
                        Continue
                      </motion.button>
                    </motion.div>
                  )}

                  {/* ═══ Step 3: Content Selection ═══ */}
                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      variants={directedStepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-5"
                    >
                      <div>
                        <motion.button
                          onClick={() => goBack(2)}
                          className="font-ui text-[13px] text-grey hover:text-text transition-colors mb-2 cursor-pointer"
                          whileHover={{ x: -3 }}
                          transition={{ duration: 0.15 }}
                        >
                          &larr; Back
                        </motion.button>
                        <motion.h2
                          className="font-display font-bold text-[22px] text-text"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
                        >
                          {hasEngLit ? (hasGeo || hasRs ? "Your texts & topics" : "Your texts") : "Your topics"}
                        </motion.h2>
                        <motion.p
                          className="font-ui text-[14px] text-grey mt-1"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                        >
                          Select what you&apos;re studying &mdash; this tailors your revision content.
                        </motion.p>
                      </div>

                      {/* ── English Literature Texts ── */}
                      {hasEngLit && (
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
                        >
                          {hasGeo && (
                            <motion.div
                              className="flex items-center gap-2 mb-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
                            >
                              <span className="w-2 h-2 rounded-full bg-purple shrink-0" />
                              <p className="font-ui text-[13px] font-bold text-purple uppercase tracking-wider">
                                English Literature
                              </p>
                              <motion.span
                                key={selectedTexts.length}
                                className="font-ui text-[11px] text-grey"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                &mdash; {selectedTexts.length} selected
                              </motion.span>
                            </motion.div>
                          )}

                          <div className="space-y-4">
                            {activeTextGroups.map((group, gi) => (
                              <motion.div
                                key={group.label}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: EASE, delay: 0.2 + gi * 0.08 }}
                              >
                                <p className="font-ui text-[11px] font-semibold text-grey uppercase tracking-wider mb-2">
                                  {group.label} &mdash; {group.paper} {group.section}
                                </p>
                                <motion.div
                                  className="grid grid-cols-1 gap-2"
                                  variants={staggerContainer}
                                  initial="hidden"
                                  animate="visible"
                                >
                                  {group.texts.filter((t) => t.status === "active").map((text) => {
                                    const selected = selectedTexts.includes(text.slug);
                                    return (
                                      <motion.button
                                        key={text.slug}
                                        variants={staggerItem}
                                        whileHover={{ x: 3 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => toggleText(text.slug)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-colors text-left cursor-pointer ${
                                          selected
                                            ? "border-purple bg-purple-light"
                                            : "border-border bg-surface hover:border-grey/30"
                                        }`}
                                      >
                                        <motion.span
                                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                                            selected ? "border-purple bg-purple" : "border-grey/30"
                                          }`}
                                          animate={selected ? { scale: [1, 1.2, 1] } : {}}
                                          transition={{ duration: 0.25 }}
                                        >
                                          <AnimatePresence>
                                            {selected && (
                                              <motion.svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={3}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                              >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                              </motion.svg>
                                            )}
                                          </AnimatePresence>
                                        </motion.span>

                                        {TEXT_ICONS[text.slug] ? (
                                          <img src={TEXT_ICONS[text.slug]} alt="" className="w-6 h-6 rounded-full object-cover object-[center_30%] shrink-0" />
                                        ) : (
                                          <span className="w-6 h-6 rounded-full bg-purple/10 text-purple font-display font-bold text-[10px] flex items-center justify-center shrink-0">
                                            {text.title.charAt(0)}
                                          </span>
                                        )}

                                        <div className="flex-1 min-w-0">
                                          <p className={`font-ui text-[14px] truncate ${selected ? "text-purple font-semibold" : "text-text"}`}>
                                            {text.title}
                                          </p>
                                          <p className="font-ui text-[11px] text-grey truncate">{text.author}</p>
                                        </div>
                                      </motion.button>
                                    );
                                  })}
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>

                          {!hasGeo && (
                            <motion.p
                              key={selectedTexts.length}
                              className="font-ui text-[12px] text-grey text-center mt-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {selectedTexts.length} text{selectedTexts.length !== 1 ? "s" : ""} selected
                            </motion.p>
                          )}
                        </motion.div>
                      )}

                      {/* Divider between subjects */}
                      {hasEngLit && (hasGeo || hasRs) && (
                        <motion.div
                          className="border-t border-border"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
                          style={{ originX: 0 }}
                        />
                      )}

                      {/* ── Geography Topics ── */}
                      {hasGeo && (
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: hasEngLit ? 0.35 : 0.15 }}
                        >
                          {hasEngLit && (
                            <motion.div
                              className="flex items-center gap-2 mb-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, ease: EASE, delay: 0.4 }}
                            >
                              <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                              <p className="font-ui text-[13px] font-bold text-teal uppercase tracking-wider">
                                Geography
                              </p>
                              <motion.span
                                key={selectedGeoTopics.length}
                                className="font-ui text-[11px] text-grey"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                &mdash; {selectedGeoTopics.length} selected
                              </motion.span>
                            </motion.div>
                          )}

                          <div className="space-y-4">
                            {activeGeoGroups.map((group, gi) => (
                              <motion.div
                                key={group.label}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: EASE, delay: (hasEngLit ? 0.4 : 0.2) + gi * 0.08 }}
                              >
                                <p className="font-ui text-[11px] font-semibold text-grey uppercase tracking-wider mb-2">
                                  {group.label} &mdash; {group.paper} {group.section}
                                </p>
                                <motion.div
                                  className="grid grid-cols-1 gap-2"
                                  variants={staggerContainer}
                                  initial="hidden"
                                  animate="visible"
                                >
                                  {group.topics.filter((t) => t.status === "active").map((topic) => {
                                    const selected = selectedGeoTopics.includes(topic.slug);
                                    return (
                                      <motion.button
                                        key={topic.slug}
                                        variants={staggerItem}
                                        whileHover={{ x: 3 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => toggleGeoTopic(topic.slug)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-colors text-left cursor-pointer ${
                                          selected
                                            ? "border-teal bg-teal-light"
                                            : "border-border bg-surface hover:border-grey/30"
                                        }`}
                                      >
                                        <motion.span
                                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                                            selected ? "border-teal bg-teal" : "border-grey/30"
                                          }`}
                                          animate={selected ? { scale: [1, 1.2, 1] } : {}}
                                          transition={{ duration: 0.25 }}
                                        >
                                          <AnimatePresence>
                                            {selected && (
                                              <motion.svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={3}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                              >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                              </motion.svg>
                                            )}
                                          </AnimatePresence>
                                        </motion.span>

                                        <span className="w-6 h-6 rounded-full bg-teal/10 text-teal font-display font-bold text-[10px] flex items-center justify-center shrink-0">
                                          {topic.title.charAt(0)}
                                        </span>

                                        <div className="flex-1 min-w-0">
                                          <p className={`font-ui text-[14px] truncate ${selected ? "text-teal font-semibold" : "text-text"}`}>
                                            {topic.title}
                                          </p>
                                          <p className="font-ui text-[11px] text-grey truncate">
                                            {topic.paper} &middot; Unit {topic.unit}
                                          </p>
                                        </div>
                                      </motion.button>
                                    );
                                  })}
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>

                          {!hasEngLit && !hasRs && (
                            <motion.p
                              key={selectedGeoTopics.length}
                              className="font-ui text-[12px] text-grey text-center mt-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {selectedGeoTopics.length} topic{selectedGeoTopics.length !== 1 ? "s" : ""} selected
                            </motion.p>
                          )}
                        </motion.div>
                      )}

                      {/* Divider before RS */}
                      {hasRs && (hasEngLit || hasGeo) && !(hasEngLit && !hasGeo) && (
                        <motion.div
                          className="border-t border-border"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
                          style={{ originX: 0 }}
                        />
                      )}

                      {/* ── Religious Studies Topics ── */}
                      {hasRs && (
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE, delay: (hasEngLit || hasGeo) ? 0.35 : 0.15 }}
                        >
                          {(hasEngLit || hasGeo) && (
                            <motion.div
                              className="flex items-center gap-2 mb-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, ease: EASE, delay: 0.4 }}
                            >
                              <span className="w-2 h-2 rounded-full bg-blue shrink-0" />
                              <p className="font-ui text-[13px] font-bold text-blue uppercase tracking-wider">
                                Religious Studies
                              </p>
                              <motion.span
                                key={selectedRsTopics.length}
                                className="font-ui text-[11px] text-grey"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                &mdash; {selectedRsTopics.length} selected
                              </motion.span>
                            </motion.div>
                          )}

                          <div className="space-y-4">
                            {activeRsGroups.map((group, gi) => (
                              <motion.div
                                key={group.label}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: EASE, delay: ((hasEngLit || hasGeo) ? 0.4 : 0.2) + gi * 0.08 }}
                              >
                                <p className="font-ui text-[11px] font-semibold text-grey uppercase tracking-wider mb-2">
                                  {group.label} &mdash; {group.paper} {group.section}
                                </p>
                                <motion.div
                                  className="grid grid-cols-1 gap-2"
                                  variants={staggerContainer}
                                  initial="hidden"
                                  animate="visible"
                                >
                                  {group.topics.filter((t) => t.status === "active").map((topic) => {
                                    const selected = selectedRsTopics.includes(topic.slug);
                                    return (
                                      <motion.button
                                        key={topic.slug}
                                        variants={staggerItem}
                                        whileHover={{ x: 3 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => toggleRsTopic(topic.slug)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-colors text-left cursor-pointer ${
                                          selected
                                            ? "border-blue bg-blue-light"
                                            : "border-border bg-surface hover:border-grey/30"
                                        }`}
                                      >
                                        <motion.span
                                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                                            selected ? "border-blue bg-blue" : "border-grey/30"
                                          }`}
                                          animate={selected ? { scale: [1, 1.2, 1] } : {}}
                                          transition={{ duration: 0.25 }}
                                        >
                                          <AnimatePresence>
                                            {selected && (
                                              <motion.svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={3}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                              >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                              </motion.svg>
                                            )}
                                          </AnimatePresence>
                                        </motion.span>

                                        <span className="w-6 h-6 rounded-full bg-blue/10 text-blue font-display font-bold text-[10px] flex items-center justify-center shrink-0">
                                          {topic.title.charAt(0)}
                                        </span>

                                        <div className="flex-1 min-w-0">
                                          <p className={`font-ui text-[14px] truncate ${selected ? "text-blue font-semibold" : "text-text"}`}>
                                            {topic.title}
                                          </p>
                                          <p className="font-ui text-[11px] text-grey truncate">
                                            {topic.paper} {topic.section}
                                          </p>
                                        </div>
                                      </motion.button>
                                    );
                                  })}
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>

                          {!hasEngLit && !hasGeo && (
                            <motion.p
                              key={selectedRsTopics.length}
                              className="font-ui text-[12px] text-grey text-center mt-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {selectedRsTopics.length} topic{selectedRsTopics.length !== 1 ? "s" : ""} selected
                            </motion.p>
                          )}
                        </motion.div>
                      )}

                      {saveError && (
                        <motion.p
                          className="font-ui text-[13px] text-red text-center bg-red/10 rounded-lg px-3 py-2"
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                        >
                          {saveError}
                        </motion.p>
                      )}

                      <motion.button
                        onClick={handleSave}
                        disabled={!step3Valid || saving}
                        whileHover={step3Valid && !saving ? { scale: 1.02, y: -1 } : {}}
                        whileTap={step3Valid && !saving ? { scale: 0.97 } : {}}
                        className="w-full py-3 rounded-xl font-ui font-semibold text-[15px] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-purple text-white hover:bg-purple/90"
                      >
                        {saving ? (
                          <motion.span
                            className="inline-flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <motion.span
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                            />
                            Saving...
                          </motion.span>
                        ) : editMode ? "Save changes" : "Save & start revising"}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

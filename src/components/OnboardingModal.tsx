"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { TEXT_REGISTRY, TEXT_ICONS } from "@/data/text-registry";
import { useAuth } from "@/components/AuthProvider";
import { saveUserProfile } from "@/lib/storage";
import type { UserProfile } from "@/data/types";

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

interface OnboardingModalProps {
  /** When true, modal is closeable and pre-populated for editing */
  editMode?: boolean;
  onClose?: () => void;
}

export default function OnboardingModal({ editMode = false, onClose }: OnboardingModalProps) {
  const { user, needsOnboarding, profile, refreshProfile } = useAuth();

  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [yearGroup, setYearGroup] = useState<number | null>(null);
  const [targetGrade, setTargetGrade] = useState<number | null>(null);
  const [selectedTexts, setSelectedTexts] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  // Pre-populate in edit mode
  useEffect(() => {
    if (editMode && profile) {
      setFirstName(profile.firstName);
      setYearGroup(profile.yearGroup);
      setTargetGrade(profile.targetGrade);
      setSelectedTexts(profile.textSlugs);
      setStep(1);
    }
  }, [editMode, profile]);

  // Body scroll lock
  const isOpen = editMode ? true : needsOnboarding;
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || !user) return null;

  const activeGroups = TEXT_REGISTRY.filter(g =>
    g.texts.some(t => t.status === "active")
  );

  function toggleText(slug: string) {
    setSelectedTexts(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  }

  async function handleSave() {
    if (!firstName.trim() || !yearGroup || !targetGrade || selectedTexts.length === 0 || !user) return;
    setSaving(true);
    await saveUserProfile({
      firstName: firstName.trim(),
      yearGroup: yearGroup as UserProfile["yearGroup"],
      targetGrade: targetGrade as UserProfile["targetGrade"],
      textSlugs: selectedTexts,
    }, user.id);
    await refreshProfile();
    setSaving(false);
    if (editMode && onClose) onClose();
  }

  const step1Valid = firstName.trim().length > 0 && yearGroup !== null;
  const step2Valid = targetGrade !== null;
  const step3Valid = selectedTexts.length > 0;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={editMode ? onClose : undefined}
        aria-hidden
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center px-4">
        <div className="w-full max-w-lg bg-bg border border-border rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.2)] animate-scale-in overflow-hidden max-h-[90vh] flex flex-col">

          {/* Progress bar */}
          <div className="h-1 bg-surface shrink-0">
            <div
              className="h-full bg-purple transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* Close button (edit mode only) */}
          {editMode && onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[102] p-1.5 rounded-lg text-grey hover:text-text hover:bg-surface-hover transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          <div className="p-6 sm:p-8 overflow-y-auto">
            {/* ─── Step 1: Name + Year Group ─── */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display font-bold text-[22px] text-text">
                    {editMode ? "Edit your profile" : "Welcome to Straight Nines"}
                  </h2>
                  <p className="font-ui text-[14px] text-grey mt-1">
                    {editMode ? "Update your details below." : "Let's personalise your revision experience."}
                  </p>
                </div>

                <div>
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
                </div>

                <div>
                  <label className="block font-ui text-[13px] font-semibold text-text mb-2">
                    Year group
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {([8, 9, 10, 11, 12, 13] as const).map((yr) => {
                      const labels: Record<number, string> = {
                        8: "KS3", 9: "KS3", 10: "Starting GCSE",
                        11: "Exam year", 12: "Year 12", 13: "Year 13",
                      };
                      return (
                        <button
                          key={yr}
                          onClick={() => setYearGroup(yr)}
                          className={`rounded-xl border-2 p-3 text-center transition-all duration-200 cursor-pointer ${
                            yearGroup === yr
                              ? "border-purple bg-purple-light"
                              : "border-border bg-surface hover:border-grey/30"
                          }`}
                        >
                          <p className={`font-display font-bold text-[18px] ${yearGroup === yr ? "text-purple" : "text-text"}`}>
                            Year {yr}
                          </p>
                          <p className="font-ui text-[11px] text-grey mt-0.5">
                            {labels[yr]}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!step1Valid}
                  className="w-full py-3 rounded-xl font-ui font-semibold text-[15px] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-purple text-white hover:bg-purple/90"
                >
                  Continue
                </button>
              </div>
            )}

            {/* ─── Step 2: Target Grade ─── */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <button onClick={() => setStep(1)} className="font-ui text-[13px] text-grey hover:text-text transition-colors mb-2 cursor-pointer">
                    ← Back
                  </button>
                  <h2 className="font-display font-bold text-[22px] text-text">
                    What grade are you aiming for?
                  </h2>
                  <p className="font-ui text-[14px] text-grey mt-1">
                    Your AI marking will be tailored to this target.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((grade) => (
                    <button
                      key={grade}
                      onClick={() => setTargetGrade(grade)}
                      className={`h-16 rounded-xl border-2 font-display font-bold text-[22px] transition-all duration-200 cursor-pointer ${
                        targetGrade === grade
                          ? "border-purple bg-purple text-white scale-105 shadow-[0_4px_12px_rgba(140,84,244,0.3)]"
                          : "border-border bg-surface text-text hover:border-grey/30"
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>

                {targetGrade && (
                  <p className="text-center font-ui text-[13px] text-grey">
                    Grade {targetGrade} — {GRADE_HINTS[targetGrade]}
                  </p>
                )}

                <button
                  onClick={() => setStep(3)}
                  disabled={!step2Valid}
                  className="w-full py-3 rounded-xl font-ui font-semibold text-[15px] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-purple text-white hover:bg-purple/90"
                >
                  Continue
                </button>
              </div>
            )}

            {/* ─── Step 3: Texts Being Studied ─── */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <button onClick={() => setStep(2)} className="font-ui text-[13px] text-grey hover:text-text transition-colors mb-2 cursor-pointer">
                    ← Back
                  </button>
                  <h2 className="font-display font-bold text-[22px] text-text">
                    Which texts are you studying?
                  </h2>
                  <p className="font-ui text-[14px] text-grey mt-1">
                    Select all that apply — {selectedTexts.length} selected
                  </p>
                </div>

                <div className="space-y-4">
                  {activeGroups.map((group) => (
                    <div key={group.label}>
                      <p className="font-ui text-[11px] font-semibold text-grey uppercase tracking-wider mb-2">
                        {group.label} — {group.paper} {group.section}
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        {group.texts.filter(t => t.status === "active").map((text) => {
                          const selected = selectedTexts.includes(text.slug);
                          return (
                            <button
                              key={text.slug}
                              onClick={() => toggleText(text.slug)}
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 text-left cursor-pointer ${
                                selected
                                  ? "border-purple bg-purple-light"
                                  : "border-border bg-surface hover:border-grey/30"
                              }`}
                            >
                              {/* Check / empty circle */}
                              <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                                selected ? "border-purple bg-purple" : "border-grey/30"
                              }`}>
                                {selected && (
                                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </span>

                              {/* Text icon */}
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
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleSave}
                  disabled={!step3Valid || saving}
                  className="w-full py-3 rounded-xl font-ui font-semibold text-[15px] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-purple text-white hover:bg-purple/90"
                >
                  {saving ? "Saving..." : editMode ? "Save changes" : "Save & start revising"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

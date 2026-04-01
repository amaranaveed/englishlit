"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import { getActiveTexts, getTextBySlug } from "@/data/text-registry";
import { getExamQuestions } from "@/data/quotes";
import { useStorage } from "@/hooks/useStorage";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import type { ExamResponse } from "@/data/types";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type Stage = "select" | "writing" | "submitted";
type UploadedImage = { id: number; dataUrl: string; extracting: boolean; extracted: boolean; error: string | null };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function ExamPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [stage, setStage] = useState<Stage>("select");

  // Selection state
  const [selectedText, setSelectedText] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [customQuestion, setCustomQuestion] = useState("");
  const [useCustomQuestion, setUseCustomQuestion] = useState(false);

  // Ref for auto-scrolling to questions section
  const questionsRef = useRef<HTMLDivElement>(null);

  // Writing state
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(50 * 60); // 50 min in seconds
  const [started, setStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  const { saveExamResponse } = useStorage();

  // Image upload state
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const nextImageId = useRef(0);

  const activeTexts = getActiveTexts();
  const questions = selectedText ? getExamQuestions(selectedText) : [];
  const text = selectedText ? getTextBySlug(selectedText) : null;
  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;

  // Timer
  useEffect(() => {
    if (started && stage === "writing") {
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, stage]);

  const formatTime = useCallback((s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }, []);

  function handleStart() {
    const question = useCustomQuestion ? customQuestion.trim() : selectedQuestion;
    if (!selectedText || !question) return;
    if (useCustomQuestion) setSelectedQuestion(question);
    setStage("writing");
    setStarted(true);
  }

  async function handleSubmit() {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
    const id = `exam-${Date.now()}`;

    const response: ExamResponse = {
      id,
      textSlug: selectedText,
      question: selectedQuestion,
      studentAnswer: answer,
      timeSpent,
    };

    await saveExamResponse(response);
    setStage("submitted");
    router.push(`/exam/result/${id}`);
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Build ordered list of valid files
    const validFiles: { file: File; id: number }[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith("image/")) continue;
      if (file.size > 10 * 1024 * 1024) continue;
      validFiles.push({ file, id: nextImageId.current++ });
    }

    if (validFiles.length === 0) return;

    // Add placeholder entries for all images immediately (preserves upload order)
    const newEntries: UploadedImage[] = validFiles.map(({ id }) => ({
      id,
      dataUrl: "",
      extracting: true,
      extracted: false,
      error: null,
    }));
    setUploadedImages((prev) => [...prev, ...newEntries]);
    setIsExtracting(true);

    // Read all files as data URLs first (preserves order)
    const dataUrls = await Promise.all(
      validFiles.map(
        ({ file, id }) =>
          new Promise<{ id: number; dataUrl: string }>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve({ id, dataUrl: reader.result as string });
            reader.readAsDataURL(file);
          })
      )
    );

    // Update previews
    for (const { id, dataUrl } of dataUrls) {
      setUploadedImages((prev) =>
        prev.map((img) => (img.id === id ? { ...img, dataUrl } : img))
      );
    }

    // Extract text sequentially in order
    for (const { id, dataUrl } of dataUrls) {
      try {
        const res = await fetch("/api/ocr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: dataUrl }),
        });

        const data = await res.json();

        if (!res.ok || data.error) {
          setUploadedImages((prev) =>
            prev.map((img) =>
              img.id === id ? { ...img, extracting: false, error: data.error || "Failed to extract text." } : img
            )
          );
          continue;
        }

        setAnswer((prev) => (prev ? prev + "\n\n" + data.text : data.text));
        setUploadedImages((prev) =>
          prev.map((img) =>
            img.id === id ? { ...img, extracting: false, extracted: true } : img
          )
        );
      } catch {
        setUploadedImages((prev) =>
          prev.map((img) =>
            img.id === id ? { ...img, extracting: false, error: "Network error. Please try again." } : img
          )
        );
      }
    }

    setIsExtracting(false);
    // Reset file input so the same files can be re-selected
    e.target.value = "";
  }

  function removeImage(id: number) {
    setUploadedImages((prev) => prev.filter((img) => img.id !== id));
  }

  function clearAllImages() {
    setUploadedImages([]);
  }

  // ─── LOADING STATE ───
  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageBanner
          title="Exam Practice"
          subtitle="Choose a text and question, then write a timed essay response."
          image="/images/exam-prep.jpg"
        />
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-teal" />
        </div>
      </div>
    );
  }

  // ─── AUTH GATE ───
  if (!user) {
    return (
      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <PageBanner
          title="Exam Practice"
          subtitle="Choose a text and question, then write a timed essay response."
          image="/images/exam-prep.jpg"
        />

        <motion.div
          className="rounded-2xl border-2 border-border bg-surface p-8 sm:p-10 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Lock icon */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-light">
            <svg
              className="h-7 w-7 text-purple"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h2 className="font-display text-xl font-bold text-text mb-2">
            Sign in to start practising
          </h2>
          <p className="font-body text-sm text-grey leading-relaxed max-w-md mx-auto mb-6">
            Exam practice requires a free account so we can save your work and
            give you AI marking feedback.
          </p>

          {/* Benefits */}
          <motion.ul
            className="font-ui text-sm text-text space-y-2 mb-8 max-w-xs mx-auto text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              "Your essays are saved to your account",
              "Get AI marking feedback",
              "Track progress over time",
            ].map((benefit) => (
              <motion.li
                key={benefit}
                variants={staggerItem}
                className="flex items-start gap-2"
              >
                <svg
                  className="h-4 w-4 text-teal mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Sign in button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              createClient()?.auth.signInWithOAuth({
                provider: "google",
                options: {
                  redirectTo: `${window.location.origin}/auth/callback`,
                },
              });
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-teal text-white px-6 py-3 font-ui font-semibold text-sm hover:bg-teal/90 transition-colors cursor-pointer"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  // ─── SELECT STAGE ───
  if (stage === "select") {
    return (
      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <PageBanner
          title="Exam Practice"
          subtitle="Choose a text and question, then write a timed essay response."
          image="/images/exam-prep.jpg"
        />

        {/* Step 1 — Text */}
        <div className="mb-6">
          <motion.label
            className="font-ui text-sm font-semibold text-text block mb-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            1. Choose your text
          </motion.label>
          <motion.div
            className="grid grid-cols-2 gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {activeTexts.map((t) => (
              <motion.button
                key={t.slug}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSelectedText(t.slug);
                  setSelectedQuestion("");
                  setTimeout(() => {
                    if (questionsRef.current) {
                      const top = questionsRef.current.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }, 100);
                }}
                className={`rounded-xl border-2 p-4 text-left transition-colors cursor-pointer ${
                  selectedText === t.slug
                    ? "border-teal bg-teal-light"
                    : "border-border bg-surface hover:border-teal/50"
                }`}
              >
                <p className="font-display font-bold text-sm text-text">
                  {t.title}
                </p>
                <p className="font-ui text-xs text-grey mt-0.5">{t.author}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Step 2 — Question */}
        <AnimatePresence>
          {selectedText && (
            <motion.div
              ref={questionsRef}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <motion.label
                className="font-ui text-sm font-semibold text-text block mb-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}
              >
                2. Choose your question
              </motion.label>
              <motion.div
                className="space-y-2"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {questions.map((q, i) => (
                  <motion.button
                    key={i}
                    variants={staggerItem}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => { setSelectedQuestion(q.question); setUseCustomQuestion(false); }}
                    className={`w-full rounded-lg border-2 px-4 py-3 text-left transition-colors cursor-pointer ${
                      selectedQuestion === q.question && !useCustomQuestion
                        ? "border-purple bg-purple-light"
                        : "border-border bg-surface hover:border-purple/50"
                    }`}
                  >
                    <p className="font-body text-sm text-text">{q.question}</p>
                  </motion.button>
                ))}

                {/* Custom question option */}
                <motion.div variants={staggerItem}>
                  <button
                    type="button"
                    onClick={() => { setUseCustomQuestion(true); setSelectedQuestion(""); }}
                    className={`w-full rounded-lg border-2 px-4 py-3 text-left transition-colors cursor-pointer ${
                      useCustomQuestion
                        ? "border-purple bg-purple-light"
                        : "border-border bg-surface hover:border-purple/50"
                    }`}
                  >
                    <p className="font-ui text-sm font-semibold text-text flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                      Write your own question
                    </p>
                  </button>
                  <AnimatePresence>
                    {useCustomQuestion && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <textarea
                          value={customQuestion}
                          onChange={(e) => setCustomQuestion(e.target.value)}
                          placeholder="Type your exam question here..."
                          className="w-full mt-2 rounded-lg border-2 border-purple/30 bg-surface p-3 font-body text-sm text-text leading-relaxed resize-none focus:outline-none focus:border-purple transition-colors placeholder:text-grey"
                          rows={3}
                          autoFocus
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Start button */}
        <AnimatePresence>
          {selectedText && (selectedQuestion || (useCustomQuestion && customQuestion.trim())) && (
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
              className="w-full rounded-xl bg-teal text-white py-3 font-ui font-semibold text-sm hover:bg-teal/90 transition-colors cursor-pointer"
            >
              Start Timed Essay (50 minutes)
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // ─── WRITING STAGE ───
  const isWarning = timeLeft <= 300 && timeLeft > 0; // 5 min warning
  const isExpired = timeLeft === 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-display font-bold text-text text-sm">
            {text?.title}
          </p>
          <p className="font-ui text-xs text-grey mt-0.5 max-w-md truncate">
            {selectedQuestion}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-ui text-xs text-grey">
            <motion.span
              key={wordCount}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {wordCount}
            </motion.span>{" "}
            word{wordCount !== 1 ? "s" : ""}
          </span>
          <span
            className={`font-ui font-bold text-lg tabular-nums ${
              isExpired
                ? "text-red"
                : isWarning
                ? "text-orange animate-pulse"
                : "text-text"
            }`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Timer warning */}
      <AnimatePresence>
        {isWarning && !isExpired && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-lg bg-orange-light border border-orange px-4 py-2 mb-4 font-ui text-sm text-orange font-semibold text-center"
          >
            ⚠️ Less than 5 minutes remaining!
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isExpired && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-lg bg-red-light border border-red px-4 py-2 mb-4 font-ui text-sm text-red font-semibold text-center"
          >
            ⏰ Time&apos;s up! Submit your answer now.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question display */}
      <motion.div
        className="rounded-lg bg-purple-light border border-purple p-4 mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <p className="font-body text-text leading-relaxed">
          {selectedQuestion}
        </p>
        <p className="font-ui text-xs text-purple mt-2">
          {text?.paper} {text?.section} · 30 marks
          {selectedText === "much-ado" ? " + 4 SPaG" : ""}
        </p>
      </motion.div>

      {/* Image upload zone */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        className="mb-4"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
        />

        {/* Upload button — always visible */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isExtracting}
          className="w-full rounded-xl border-2 border-dashed border-border bg-surface hover:border-teal/50 hover:bg-teal-light transition-colors p-4 cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center justify-center gap-3">
            <svg className="h-6 w-6 text-grey group-hover:text-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
            </svg>
            <div className="text-left">
              <p className="font-ui text-sm font-semibold text-text group-hover:text-teal transition-colors">
                {uploadedImages.length > 0 ? "Upload more pages" : "Upload photos of your handwritten answer"}
              </p>
              <p className="font-ui text-xs text-grey">
                {uploadedImages.length > 0
                  ? "Select multiple images — they'll be extracted in order"
                  : "Select one or more images — AI will extract the text in order for marking"}
              </p>
            </div>
          </div>
        </button>

        {/* Uploaded images grid */}
        {uploadedImages.length > 0 && (
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-ui text-xs text-grey font-semibold">
                {uploadedImages.length} page{uploadedImages.length !== 1 ? "s" : ""} uploaded
                {isExtracting && " — extracting..."}
              </p>
              {!isExtracting && (
                <button
                  onClick={clearAllImages}
                  className="font-ui text-xs text-grey hover:text-red transition-colors cursor-pointer"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {uploadedImages.map((img, i) => (
                <div key={img.id} className="relative rounded-lg border border-border overflow-hidden aspect-[3/4] bg-surface">
                  {img.dataUrl ? (
                    <img src={img.dataUrl} alt={`Page ${i + 1}`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-border border-t-teal" />
                    </div>
                  )}
                  {/* Page number */}
                  <div className="absolute top-1 left-1 rounded bg-black/60 px-1.5 py-0.5">
                    <span className="font-ui text-[10px] text-white font-bold">{i + 1}</span>
                  </div>
                  {/* Status overlay */}
                  {img.extracting && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    </div>
                  )}
                  {img.extracted && !img.extracting && (
                    <div className="absolute bottom-1 right-1 rounded-full bg-teal p-0.5">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  {img.error && (
                    <div className="absolute bottom-1 right-1 rounded-full bg-red p-0.5">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                  {/* Remove button */}
                  {!img.extracting && (
                    <button
                      onClick={() => removeImage(img.id)}
                      className="absolute top-1 right-1 rounded-full bg-black/50 hover:bg-black/70 text-white p-0.5 transition-colors cursor-pointer"
                    >
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
            {uploadedImages.some((img) => img.error) && (
              <p className="font-ui text-xs text-red">
                Some pages failed to extract. You can remove them and try again.
              </p>
            )}
            {!isExtracting && uploadedImages.some((img) => img.extracted) && (
              <p className="font-ui text-xs text-teal font-semibold">
                Text extracted in order — check and edit below
              </p>
            )}
          </div>
        )}
      </motion.div>

      {/* Writing area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
      >
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Start writing your essay response here, or upload a photo of your handwritten answer above…"
          className="w-full min-h-[400px] rounded-xl border-2 border-border bg-surface p-5 font-body text-text leading-relaxed resize-y focus:outline-none focus:border-teal transition-colors placeholder:text-grey"
          autoFocus
        />
      </motion.div>

      {/* Action bar */}
      <div className="flex items-center justify-between mt-4">
        <motion.span whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
          <Link
            href="/exam"
            onClick={(e) => {
              if (answer.trim() && !confirm("Leave? Your essay will be lost.")) {
                e.preventDefault();
              }
            }}
            className="font-ui text-sm text-grey hover:text-text transition-colors"
          >
            ← Cancel
          </Link>
        </motion.span>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className="rounded-xl bg-teal text-white px-6 py-2.5 font-ui font-semibold text-sm hover:bg-teal/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Essay
        </motion.button>
      </div>
    </div>
  );
}

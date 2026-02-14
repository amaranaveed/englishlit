-- ═══════════════════════════════════════════════════════════════════
-- GCSE Literature — Supabase Database Schema
-- Run this in the Supabase SQL Editor to create tables & RLS policies
-- ═══════════════════════════════════════════════════════════════════

-- ─── Flashcards ───
CREATE TABLE flashcards (
  id TEXT NOT NULL,
  user_id UUID NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  text_slug TEXT NOT NULL,
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  confidence INTEGER NOT NULL DEFAULT 0,
  next_review TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, id)
);

ALTER TABLE flashcards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own flashcards"
  ON flashcards FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own flashcards"
  ON flashcards FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own flashcards"
  ON flashcards FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own flashcards"
  ON flashcards FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX idx_flashcards_user_next_review ON flashcards(user_id, next_review);
CREATE INDEX idx_flashcards_user_text ON flashcards(user_id, text_slug);


-- ─── Exam Responses ───
CREATE TABLE exam_responses (
  id TEXT NOT NULL,
  user_id UUID NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  text_slug TEXT NOT NULL,
  question TEXT NOT NULL,
  student_answer TEXT NOT NULL,
  time_spent INTEGER NOT NULL,
  marking JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, id)
);

ALTER TABLE exam_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own exam responses"
  ON exam_responses FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own exam responses"
  ON exam_responses FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own exam responses"
  ON exam_responses FOR UPDATE USING (auth.uid() = user_id);

CREATE INDEX idx_exam_responses_user ON exam_responses(user_id);
CREATE INDEX idx_exam_responses_user_text ON exam_responses(user_id, text_slug);


-- ─── Vocab Quiz Scores ───
CREATE TABLE vocab_quiz_scores (
  id TEXT NOT NULL,
  user_id UUID NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  date TIMESTAMPTZ NOT NULL DEFAULT now(),
  text_slug TEXT NOT NULL,
  mode TEXT NOT NULL,
  total INTEGER NOT NULL,
  correct INTEGER NOT NULL,
  missed TEXT[] NOT NULL DEFAULT '{}',
  PRIMARY KEY (user_id, id)
);

ALTER TABLE vocab_quiz_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own vocab scores"
  ON vocab_quiz_scores FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own vocab scores"
  ON vocab_quiz_scores FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_vocab_scores_user ON vocab_quiz_scores(user_id);


-- ─── User Profiles ───
CREATE TABLE user_profiles (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  year_group INTEGER NOT NULL CHECK (year_group BETWEEN 8 AND 13),
  target_grade INTEGER NOT NULL CHECK (target_grade BETWEEN 1 AND 9),
  text_slugs TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id)
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON user_profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE USING (auth.uid() = user_id);

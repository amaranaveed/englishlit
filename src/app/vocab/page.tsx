import Link from "next/link";

export default function VocabPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
      <span className="text-4xl mb-4 block">🔤</span>
      <h1 className="font-display text-2xl font-bold mb-2">Vocab Quiz</h1>
      <p className="text-grey font-ui mb-6">
        Term-definition matching quiz — coming in Phase 4.
      </p>
      <Link href="/" className="font-ui text-sm text-teal hover:underline">
        ← Back to Dashboard
      </Link>
    </div>
  );
}

import CodexEntry from '@/components/CodexEntry';
import codexData from '@/data/codex.json';

export default function CodexPage({ params }) {
  const entry = codexData.find((c) => c.id === params.boss);

  if (!entry) {
    return (
      <main className="p-8 text-red-400">
        <h1 className="text-2xl font-bold">Codex entry not found</h1>
      </main>
    );
  }

  return (
    <main className="p-8 bg-gray-950 text-gray-100 min-h-screen">
      <CodexEntry entry={entry} />
    </main>
  );
}

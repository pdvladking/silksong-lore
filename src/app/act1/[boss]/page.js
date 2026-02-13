import StoryNode from '@/components/StoryNode';
import act1Data from '@/data/act1.json';

export default function BossPage({ params }) {
  const boss = act1Data.find((b) => b.id === params.boss);

  if (!boss) {
    return (
      <main className="p-8 text-red-400">
        <h1 className="text-2xl font-bold">Boss not found</h1>
      </main>
    );
  }

  return (
    <main className="p-8 bg-gray-950 text-gray-100 min-h-screen">
      <StoryNode boss={boss} />
    </main>
  );
}

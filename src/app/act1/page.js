import act1Data from '@/data/act1.json';
import Link from 'next/link';

export default function Act1Page() {
  return (
    <main className="p-8 bg-gray-950 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Act 1 - Early Pharloom</h1>
      <p className="mb-6 text-lg">
        Hornet&apos;s journey begins with the climb through Pharloom. These bosses block her ascent and
        must be defeated to progress.
      </p>
      <ul className="space-y-4">
        {act1Data.map((boss) => (
          <li key={boss.id}>
            <Link
              href={`/act1/${boss.id}`}
              className="text-indigo-400 hover:text-indigo-600 font-medium"
            >
              {boss.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

import act2Data from '@/app/data/act2.json';
import Link from 'next/link';

export default function Act2Page() {
  return (
    <main className="p-8 bg-gray-950 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Act 2 - Citadel of Song</h1>
      <p className="mb-6 text-lg">
        Hornet ascends into the Citadel, facing guardians who enforce Pharloom&apos;s hierarchy.
      </p>
      <ul className="space-y-4">
        {act2Data.map((boss) => (
          <li key={boss.id}>
            <Link
              href={`/act2/${boss.id}`}
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

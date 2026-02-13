import Link from 'next/link';

export default function Act3Page() {
  return (
    <main className="p-8 bg-gray-950 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Act 3 - Endgame / Abyss</h1>
      <p className="mb-6 text-lg">
        Hornet faces her final trails deep within Pharloom, culminating in the climactic battle.
      </p>
      <ul className="space-y-4">
        {act.Data.map((boss) => (
          <li key={boss.id}>
            <Link
              href={`/act3/${boss.id}`}
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

import ActNavigation from '@/components/ActNavigation';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Silksong Lore Journey</h1>
      <p className="text-lg mb-8 max-w-xl text-center">
        Explore Hornet's path through Pharloom by following the mandatory bosses across Acts 1-3.
        Each encounter reveals lore and unlocks the next step.
      </p>
      <ActNavigation />
    </main>
  );
}

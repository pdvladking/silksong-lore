export default function CodexEntry({ entry }) {
  return (
    <div className="max-w-2x; mx-auto bg-gray-800 text-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{entry.title}</h2>
      <p className="text-lg leading-relaxed">{entry.lore}</p>
    </div>
  );
}

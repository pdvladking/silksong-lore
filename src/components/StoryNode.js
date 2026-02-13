'use client';

import ChoiceButton from './ChoiceButton';

export default function StoryNode({ boss }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{boss.title}</h1>
      <p className="text-lg mb-6">{boss.text}</p>

      <div className="flex gap-4">
        {boss.next && (
          <ChoiceButton href={`/act${boss.act}/${boss.next}`}>Continue to {boss.next}</ChoiceButton>
        )}
        {boss.codex && <ChoiceButton href={`/codex/${boss.codex}`}>Read Codex Entry</ChoiceButton>}
      </div>
    </div>
  );
}

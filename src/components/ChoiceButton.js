'use client';

import Link from 'next/link';

export default function ChoiceButton({ href, children }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

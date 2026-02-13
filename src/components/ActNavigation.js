'use client';

import Link from 'next/link';

export default function ActNavigation() {
  return (
    <nav className="flex justify-center gap-6 my-6">
      <Link href="/act1" className="text-indigo-400 hover:text-indigo-600 font-medium">
        Act 1
      </Link>
      <Link href="/act1" className="text-indigo-400 hover:text-indigo-600 font-medium">
        Act 2
      </Link>
      <Link href="/act1" className="text-indigo-400 hover:text-indigo-600 font-medium">
        Act 3
      </Link>
    </nav>
  );
}

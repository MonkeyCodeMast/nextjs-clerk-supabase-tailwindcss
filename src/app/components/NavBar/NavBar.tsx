// agentia/src/app/components/NavBar/NavBar.tsx
import Link  from 'next/link';
import React from 'react';
import Image from "next/image";

export default function NavBar() {

  return (
    <nav className="bg-transparent p-4 text-white border-b border-black border-opacity-20">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/" className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/AgentIA.svg"
              alt="AgentIA Logo"
              width={102}
              height={32}
              priority
            />
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="flex items-center h-20 gap-2 sm:gap-4 text-black">Dashboard</Link>
        </li>
        <li>
          <Link href="/team" className="flex items-center h-20 gap-2 sm:gap-4 text-black">Team</Link>
        </li>
        <li>
          <Link href="/blog" className="flex items-center h-20 gap-2 sm:gap-4 text-black">Blog</Link>
        </li>
        <li>
          <Link href="/users" className="flex items-center h-20 gap-2 sm:gap-4 text-black">Users</Link>
        </li>
        {/* Include other navigation links here */}
      </ul>
      {/* Language switcher could go here */}
    </nav>
  );
}

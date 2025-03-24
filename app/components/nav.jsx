
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image src="/5807fba9-eae4-4a2b-bbf1-1b17c452c046.avif" alt="Promtopia" width={40} height={40} className="object-contain" />
        <p className="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">AI Prompt</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {session?.user ? (
          <>
            <Link href="/create-prompt" className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
              Create Post
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-5 py-2 border border-gray-800 cursor-pointer text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image || "/default-profile.png"}
                width={40}
                height={40}
                className="rounded-full cursor-pointer border border-gray-300"
                alt="Profile"
              />
            </Link>
          </>
        ) : (
          <Link href="/signin" className="px-5 py-2 text-white bg-emerald-600 rounded-lg hover:bg-orange-700 transition duration-300">
            Sign In
          </Link>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        {session?.user ? (
          <div className="relative">
            <Image
              src={session?.user.image || "/default-profile.png"}
              width={40}
              height={40}
              className="rounded-full cursor-pointer border border-gray-300"
              alt="Profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            {toggleDropdown && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg py-2">
                <Link href="/create-prompt" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Create Post
                </Link>
                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Profile
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/signin" className="px-4 py-2 text-white bg-emerald-500 rounded-lg hover:bg-orange-700 transition duration-300">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;

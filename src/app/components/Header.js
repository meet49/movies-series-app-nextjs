"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between bg-blue-600">
        <div className="text-white text-3xl font-bold p-4 ml-16 sm:ml-20 md:ml-24 lg:ml-28">
          <Link href="/">
            <span>DEMO Streaming</span>
          </Link>
        </div>


        {menuOpen ? (
          <div className="mr-8 flex items-center sm:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        ) : (
          <div className={`mr-8 flex items-center ${menuOpen ? 'hidden' : 'block'} sm:hidden`}>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        )}

        <div className={`gap-10 pr-6 text-white mt-5 flex-col sm:flex sm:flex-row ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="p-2">
            <Link href="/">Log in</Link>
          </div>
          <button className="bg-slate-900 mb-3 p-2 w- flex items-center justify-center flex-wrap">
            Start your free trial
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;

import React from 'react'
import Link from 'next/link'


function Header() {
  return (
    <div>
      <nav className=" flex justify-between bg-blue-600">
        <div className=" text-white text-3xl font-bold p-4 ml-16 sm:ml-20 md:ml-24 lg:ml-28">
          <Link href="/">
            <span>DEMO Streaming</span>
          </Link>
        </div>
        <div className="mr-8 flex gap-10 pr-6 text-white mt-5 flex-col sm:flex sm:flex-row">
          <div>
            <Link href="/">
              Log in
            </Link>
          </div>
          <button className="bg-slate-900 h-7 w-48">
            Start your free trial
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header

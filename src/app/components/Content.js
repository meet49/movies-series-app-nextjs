"use client"
import React from "react";
import Link from "next/link";

function Content() {
  return (
    <div>
      <div className="bg-gray-800 text-white text-3xl font-semibold p-5 pl-20 sm:pl-24 md:pl-28 lg:pl-32  ">Popular Titles</div>
      <div className="flex gap-6 ml-20 flex-col sm:flex-row sm:ml-24 md:ml-28 md:flex-row lg:ml-32 lg:flex-row mt-8">
        <div>
          <Link href="/series">
            <div className="bg-gray-900 h-52 w-40 text-center justify-center flex text-white text-4xl items-center hover:font-semibold hover:shadow-2xl hover:shadow-black border-8 border-yellow-800" >
              SERIES
            </div>
          </Link>

          <p className="text-lg font-medium">Popular Series</p>
        </div>
        <div>
          
          <Link href="/movies">
            <div className="bg-gray-900 h-52 w-40 text-center justify-center flex text-white text-4xl items-center hover:font-semibold hover:shadow-2xl hover:shadow-black border-8 border-yellow-800">
              MOVIES
            </div>
            </Link>

              <p className="text-lg font-medium">Popular Movies</p>
            </div>
        </div>
      </div>
      );
}

      export default Content;

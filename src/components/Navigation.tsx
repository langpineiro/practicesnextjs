import React from "react";
import Link from "next/link";
import { Uncial_Antiqua } from "next/font/google";

const Navigation = () => {
  return (
    <>
       <nav className="fixed w-full my-0">
        <div  className="mx-auto max-w-7xl flex flex-row justify-center  space-x-4 mt-4 bg-transparent">
        <Link className="px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md" href="/">Home</Link>
        <Link className="px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md" href="/about">ABOUT</Link>
        <Link className="px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md" href="/servicios">SERVICES</Link>
        </div>
      </nav> 
    </>
  );
};

export default Navigation;

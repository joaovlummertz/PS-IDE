
"use client";

import Image from "next/image";
import { relative } from "path";
import { Bevan } from 'next/font/google'
import Movies from "./_components/Movies";

const bevan = Bevan({ weight: '400',subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Movies />
    </>
  );
    
}

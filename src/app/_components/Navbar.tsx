"use client"

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed w-full h-32 top-0 z-50  bg-black opacity-90 overflow-hidden font-milanello text-3xl">
            <div className="h-full text-white flex justify-center items-center gap-20">
                <Link href="#">HOME</Link>
                <Link href="#movies">CATALOGO</Link>
                <Link href="#icons">ASSASSINOS</Link>
                <Link href="#tickets">INGRESSOS</Link>
            </div>
        </nav>
    );
}
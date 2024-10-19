"use client"

import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    let navClasses = "h-24 lg:h-32";
    if (isOpen) {
        navClasses = "h-auto py-6 flex-col"
    }

    return (
        <nav className={"fixed flex justify-center items-center w-full top-0 z-50 bg-black opacity-90 overflow-hidden font-milanello text-xl lg:text-3xl " + navClasses}>
            <div className="hidden md:flex h-full text-white justify-center items-center gap-20">
                <Link href="#">HOME</Link>
                <Link href="#movies">CATALOGO</Link>
                <Link href="#killers">ASSASSINOS</Link>
                <Link href="#tickets">INGRESSOS</Link>
            </div>

            <div className="md:hidden flex justify-center items-center m-auto">
                <Hamburger label="Mostrar menu de navegação" size={48} toggled={isOpen} toggle={setIsOpen} />
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col w-full text-white justify-center items-center gap-10 mt-8">
                <Link onClick={() => setIsOpen(false)} href="#">HOME</Link>
                <Link onClick={() => setIsOpen(false)} href="#movies">CATALOGO</Link>
                <Link onClick={() => setIsOpen(false)} href="#killers">ASSASSINOS</Link>
                <Link onClick={() => setIsOpen(false)} href="#tickets">INGRESSOS</Link>
            </div>
            )}
        </nav>
    );
}
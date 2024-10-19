import Image from "next/image";
import banner from "../../../public/banner.png"

export default function Header() {
    return (
        <header className="relative w-full h-[70vh] lg:h-[90vh]">
            <Image
                className="opacity"
                src={banner}
                alt="Banner"
                objectFit="cover"
                objectPosition="bottom"
                layout="fill"
                priority
            />

            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <div className="absolute inset-0 items-end justify-end z-20 pb-6 pr-6 md:pb-8 md:pr-12 lg:pb-24 lg:pr-32 flex flex-col">
                <h1 className="text-white text-8xl md:text-9xl font-cinematografica font-normal tracking-widest">CineIDE</h1>
                <h1 className="text-white text-2xl md:text-3xl text-right font-light">Clássicos do terror, onde o pavor nunca sai de cena</h1>
            </div>
        </header>
      );
}
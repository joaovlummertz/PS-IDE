import Image from "next/image";
import banner from "../../../public/banner.png"

export default function Header() {
    return (
        <header className="relative w-full h-[90vh]">
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

            <div className="absolute inset-0 items-end justify-end z-20 pb-24 pr-32 flex flex-col">
                <h1 className="text-white text-9xl font-cinematografica font-normal tracking-widest">CineIDE</h1>
                <h1 className="text-white text-3xl font-light">Clássicos do terror, onde o pavor nunca sai de cena</h1>
            </div>
        </header>
      );
}
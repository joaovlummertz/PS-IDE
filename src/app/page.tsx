import Image from "next/image";
import banner from "../../public/banner.png"
import background from "../../public/background.png"

export default function Home() {
  return (
    <body className="w-full h-full bg-cover bg-center" style={{
      backgroundImage: `url(${background.src})`
    }}>
      <header className="relative w-full h-[90vh]">
        <Image
            className="dark:invert opacity"
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

      <section id="movies" className="min-h-[80vh]">
        <h2 className="text-white">Filmes em cartaz</h2>
      </section>

      <section id="icons" className="min-h-[80vh]">
        <h2 className="text-white">Os ícones do terror</h2>
      </section>

      <section id="tickets" className="min-h-[80vh]">
       <h2 className="text-white">Comprar ingresso</h2>
      </section>
    </body>
  );
}

import Image from "next/image";
import banner from "../../public/banner.png"
import Tickets from "./_components/Tickets";

export default function Home() {
  

  return (
    <body className="w-full h-full bg-[url('../../public/background.png')] bg-cover bg-center">
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
      </header>

      <section className="min-h-[80vh]">
        <h2 className="text-white">Filmes em cartaz</h2>
          

      </section>

      <section className="min-h-[80vh]">
        <h2 className="text-white">Os ícones do terror</h2>
      </section>

      <Tickets />      
    </body>
  );
}

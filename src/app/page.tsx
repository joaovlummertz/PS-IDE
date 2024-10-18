import Header from "./_components/Header";
import Movies from "./_components/Movies";
import Killers from "./_components/Killers";

export default function Home() {
  return (
    <>
      <Header />

      <section id="movies" className="min-h-[80vh] w-[80%] mx-auto py-16 scroll-mt-[150px]">
           <Movies />
      </section>

      <Killers />

      <section id="tickets" className="min-h-[80vh]">
       <h2 className="text-white">Comprar ingresso</h2>
      </section>
    </>
  );
    
}

import Header from "./_components/Header";
import Killers from "./_components/Killers";

export default function Home() {
  return (
    <>
      <Header />

      <section id="movies" className="min-h-[80vh]">
        <h2 className="text-white">Filmes em cartaz</h2>
      </section>

      <Killers />

      <section id="tickets" className="min-h-[80vh]">
       <h2 className="text-white">Comprar ingresso</h2>
      </section>
    </>
  );
}

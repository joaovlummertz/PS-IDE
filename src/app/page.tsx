import Header from "./_components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <section id="movies" className="min-h-[80vh]">
        <h2 className="text-white">Filmes em cartaz</h2>
      </section>

      <section id="icons" className="min-h-[80vh]">
        <h2 className="text-white">Os ícones do terror</h2>
      </section>

      <section id="tickets" className="min-h-[80vh]">
       <h2 className="text-white">Comprar ingresso</h2>
      </section>
    </>
  );
}

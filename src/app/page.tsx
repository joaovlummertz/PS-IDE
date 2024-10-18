import Header from "./_components/Header";
import Movies from "./_components/Movies";
import Killers from "./_components/Killers";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <Movies />

      <Killers />

      <section id="tickets" className="min-h-[80vh]">
       <h2 className="text-white">Comprar ingresso</h2>
      </section>

      <Footer />
    </>
  );
    
}

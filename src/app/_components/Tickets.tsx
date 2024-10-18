import Image from "next/image";
import Form from "./Form";
import caveira from "../../../public/caveira.png"

export default function Tickets() {
    return (
        <section id="tickets" className="min-h-[80vh] w-[80%] mx-auto font-milanello uppercase">
        <h2 className="text-5xl text-white pb-12">Comprar ingresso</h2>
        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <Form />
          <Image 
          className="object-contain w-[200px] md:w-[250px] lg:w-[300px] m-auto"
          src={caveira}
          alt="Caveira"
          />
        </div>
      </section>
    );
}
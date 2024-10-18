import Image from "next/image";
import Form from "./Form";
import caveira from "../../../public/caveira.png"

export default function Tickets() {
    return (
        <section className="min-h-[80vh] w-[80%] mx-auto">
        <h2 className="text-5xl text-white">Comprar ingresso</h2>
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
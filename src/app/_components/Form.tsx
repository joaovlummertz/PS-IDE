import Input from "./Input";

export default function Forms() {
    return (
        <div className="flex flex-col flex-grow">
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Filme preferido" />
            <Input type="text" placeholder="Nível de coragem" />

            <button className="transition duration-300 ease-in-out mt-4 mx-auto
             bg-clear text-orange font-bold 
         py-3 w-3/5 rounded-md border-2 border-orange
         hover:border-black hover:text-black hover:translate-y-2
          hover:bg-orange">
          Enviar
        </button>
        </div>
        
    );
}
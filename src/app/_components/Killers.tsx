"use client"

import Image, { StaticImageData } from "next/image";
import freddy from "../../../public/freddy.png";
import neko from "../../../public/neko.png";
import myers from "../../../public/myers.png";
import leatherface from "../../../public/leatherface.png"
import pennywise from "../../../public/pennywise.png";
import jason from "../../../public/jason.png";
import { useState } from "react";

interface Killer {
    description: string;
    image: StaticImageData;
}

const killers: Record<string, Killer> = {
    "freddy": {
        description: 'Freddy Krueger, criado por Wes Craven para "A Nightmare on Elm Street", é um icônico assassino em série que ataca em pesadelos. Ele usa uma luva com lâminas afiadas e tem uma aparência marcante: chapéu fedora, suéter listrado e rosto queimado. Misturando terror psicológico e sobrenatural, Freddy se tornou memorável.',
        image: freddy
    },
    "neko": {
        description: 'Neko Robin é uma entidade sobrenatural, sombria e enigmática, que se alimenta do medo e da ansiedade dos candidatos que buscam uma vaga. Durante o processo seletivo, ele espreita nas sombras, observando silenciosamente cada movimento, enquanto coleciona as almas dos que ousam tentar. No entanto, os escolhidos não estão destinados à escuridão eterna, mas sim à salinha, onde serão movidos pelo irresistível café grátis.',
        image: neko
    },
    "michael myers": {
        description: 'Michael Myers é o vilão da franquia "Halloween", criado por John Carpenter. Um assassino silencioso e implacável, ele usa uma máscara branca e é conhecido por perseguir e matar suas vítimas, especialmente na noite de Halloween. Representa o mal puro, agindo sem motivo claro, tornando-se um ícone do terror.',
        image: myers
    },
    "leatherface": {
        description: 'Leatherface é um homem corpulento que usa uma máscara de pele humana e carrega uma serra elétrica, tornando-o uma figura aterrorizante. Ele vive em uma fazenda isolada com sua família canibal, os Sawyer, que sequestram e matam viajantes. Mentalmente instável, age de forma primitiva e violenta, sendo frequentemente manipulado por outros membros da família.',
        image: leatherface
    },
    "pennywise": {
        description: 'Pennywise é uma entidade cósmica que se alimenta do medo e surge a cada 27 anos em Derry. Ele assume a forma de um palhaço para atrair vítimas, especialmente crianças, e usa ilusões para explorar seus piores medos. Sádico e manipulador, sua verdadeira forma é uma força maligna além da compreensão humana.',
        image: pennywise
    },
    "jason": {
        description: 'Jason Voorhees, da série "Friday the 13th", é um assassino icônico criado por Victor Miller. Após se afogar no Lago Crystal, busca vingança usando uma máscara de hóquei e um facão para matar campistas. Sua figura se tornou um símbolo do gênero slasher e um ícone da cultura pop.',
        image: jason
    },
};

export default function Killers() {
    const [selectedKiller, setSelectedKiller] = useState<keyof typeof killers>("freddy");

    function handleSelect(selectedKiller : string) {
        setSelectedKiller(selectedKiller);
    }

    return (
        <section id="killers" className="min-h-[80vh] w-[80%] mx-auto scroll-mt-[150px] my-16">
            <h2 className="text-white font-milanello uppercase text-5xl">Os ícones do terror</h2>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-between py-12">
                {Object.keys(killers).map((k) => {
                    if (k === selectedKiller) {
                        return <span className="font-milanello text-2xl uppercase justify-between cursor-pointer text-black bg-white py-1 px-3 rounded-md" key={k}>{k}</span>;
                    } else {
                        return <span className="font-milanello text-2xl text-white uppercase justify-between cursor-pointer hover:text-black hover:bg-white py-1 px-3 rounded-md"
                            onClick={() => handleSelect(k)}
                            key={k}>{k}</span>;
                    }
                })}
            </div>
            <div className="flex flex-col-reverse gap-8 lg:flex-row">
                <div className="text-white">
                    <h3 className="text-4xl font-milanello py-4 capitalize">{selectedKiller}</h3>
                    <p className="text-3xl font-light font-sans leading-[3rem]">
                        {killers[selectedKiller].description}
                    </p>
                </div>
                <Image
                    src={killers[selectedKiller].image}
                    className="object-contain mx-auto"
                    height={400}
                    alt="Assassin image"
                    priority
                />
            </div>
        </section>
    );
}
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import Logo_IDE from "../../../public/Assinatura-2-Branca-RGB-01@2x.png"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full justify-center pt-14">
            <div className="flex mx-auto gap-5 py-5">
            <Link href="https://www.instagram.com/ide_jr/">
                <FaInstagram size = {50} color="white"/>
            </Link>

            <Link href="https://br.linkedin.com/company/empresa-j%C3%BAnior-ide">
                <FaLinkedin size = {50} color="white"/>
            </Link>
                
            <Link href="https://idejr.com.br/">
                <Image
                    src={Logo_IDE}
                    className="logo_IDe"
                    height={50}
                    alt="logo image"
                />
            </Link>
            </div>

                <h3 className="text-white text-xl text-center mx-2">
                CineIDE © Todos os direitos reservados.
                </h3>
 
                <h3 className="text-white text-xl text-center mx-2">
                Termos de Uso  |  Politica de Privacidade  |  Política de Cookies
                </h3>

                <Image
                    src={Logo_IDE}
                    className="relative mt-auto ml-auto pt-5 pb-4 pr-4"
                    height={80}
                    alt="logo image"

                />
        </footer>

    );
}
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import Logo_IDE from "../../../public/Assinatura-2-Branca-RGB-01@2x.png"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full justify-center py-14">
            <div className="flex mx-auto gap-5 py-5">
                <FaInstagram size = {50} color="white"/>
                <FaLinkedin size = {50} color="white"/>
                <Image
                    src={Logo_IDE}
                    className="logo_IDe"
                    height={50}
                    alt="logo image"
                />
            </div>

                <h3 className="text-white text-xl text-center">
                CineIDE © Todos os direitos reservados.
                </h3>
 
                <h3 className="text-white text-xl text-center">
                Termos de Uso  |  Politica de Privacidade  |  Política de Cookies
                </h3>

                <Image
                    src={Logo_IDE}
                    className="relative right-5 bottom-0"
                    height={80}
                    alt="logo image"

                />
        </footer>

    );
}
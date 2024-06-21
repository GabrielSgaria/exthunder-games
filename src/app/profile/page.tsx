import { Container } from "@/components/container";
import Image from "next/image";
import userImg from '/public/user.png'
import { FaShareAlt } from "react-icons/fa";

export default function Profile() {
    return (
        <main className="w-full text-black">
            <Container>
                <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
                    <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
                        <Image
                            src={userImg}
                            alt="Imagem perful do usuario"
                            className="rounded-full w-56 h-56 object-cover"
                            width={244}
                            height={244}
                        />
                        <h1 className="font-bold text-2xl">Gabriel Sgaria</h1>
                    </div>
                    <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center">
                        <button className="bg-gray-700 px-3 py-3 rounded-lg text-slate-50">
                            Configurações
                        </button>
                        <button className="bg-gray-700 px-3 py-3 rounded-lg">
                            <FaShareAlt size={24} className="text-slate-50" />
                        </button>
                    </div>
                </section>

            </Container>
        </main>
    )
}
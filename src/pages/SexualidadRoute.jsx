import { motion } from "framer-motion";
import {
    BookOpenText,
    Gift,
    Lock,
    ShieldAlert,
    Trophy,
    HeartHandshake,
    ShieldX,
} from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ButtonPageBack from "../components/buttons/ButtonPageBack";
import islandMultiplicacion from "../assets/images/modules/osa_jukumari.png";
import leccionSexualidadImg from "../assets/images/modules/leccion_sexualidad.png";

/* CAMBIAR IMAGEN */
const routeNodes = [
    {
        id: "desafio-1",
        label: "Lección",
        title: "Sexualidad",
        image: leccionSexualidadImg,
        state: "current",
        offset: "ml-0",
        route: "/play/sexualidad/lectura",
    },
    {
        id: "desafio-2",
        label: "Lección",
        title: "Sexo",
        icon: BookOpenText,
        state: "locked",
        offset: "ml-16",
    },
    {
        id: "desafio-3",
        label: "Lección",
        title: "Género",
        icon: ShieldAlert,
        state: "locked",
        offset: "ml-5",
    },
    {
        id: "desafio-4",
        label: "Lección",
        title: "Consentimiento",
        icon: Gift,
        state: "locked",
        offset: "ml-14",
    },
    {
        id: "desafio-5",
        label: "Lección",
        title: "Límites",
        icon: Trophy,
        state: "locked",
        offset: "ml-1",
    },
    {
        id: "desafio-6",
        label: "Lección",
        title: "Violencia en el Noviazgo",
        icon: ShieldX,
        state: "locked",
        offset: "ml-10",
    },
    {
        id: "desafio-7",
        label: "Lección",
        title: "Relaciones Saludables",
        icon: HeartHandshake,
        state: "locked",
        offset: "ml-8",
    },
];

function SexualidadRoute() {
    document.title = "Modulo 1 · Sexualidad";
    const navigate = useNavigate();

    const handleNodeClick = (node) => {
        if (node.state !== "current") {
            toast.info("Este punto se desbloqueara pronto.", {
                className: "bg-surface",
            });
            return;
        }

        navigate(node.route);
    };

    return (
        <main className="min-h-screen relative overflow-hidden text-surface">
            <div className="absolute inset-0 bg-gradient-to-b from-[#241046] via-[#130627] to-[#0B021A]" />
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[140%] h-56 bg-[#2A1350]/80 rounded-[100%]" />
            <div className="absolute right-[-120px] top-24 w-72 h-72 rounded-full bg-[#2E1A56]/60 blur-3xl" />
            <div className="absolute left-[-100px] bottom-20 w-72 h-72 rounded-full bg-[#3A2470]/40 blur-3xl" />

            <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-12">
                <ButtonPageBack to="/play" replace={true} absolute={true}>
                    Volver a Módulos
                </ButtonPageBack>

                <header className="text-center mb-10">
                    <h1 className="text-5xl font-black mt-1">Modulo 1</h1>
                    <p className="text-xl text-surface/85 mt-2">Sexualidad</p>
                </header>

                <div className="grid md:grid-cols-[390px_1fr] gap-8 items-start">
                    <div className="relative mx-auto w-full max-w-[360px]">
                        <div className="absolute left-[48px] top-16 bottom-16 w-[6px] rounded-full bg-gradient-to-b from-surface/80 via-surface/25 to-surface/10" />

                        <div className="space-y-7">
                            {routeNodes.map((node, index) => {
                                const isCurrent = node.state === "current";
                                const isLocked = node.state === "locked";
                                const hasImage = node.image;
                                const Icon = node.icon;

                                return (
                                    <motion.button
                                        key={node.id}
                                        type="button"
                                        onClick={() => handleNodeClick(node)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.25,
                                            delay: index * 0.08,
                                        }}
                                        className={`relative flex items-center gap-3 ${node.offset} focus:outline-none`}
                                    >
                                        {isCurrent && (
                                            <span className="absolute -top-10 left-3 text-xs px-3 py-1 rounded-xl bg-surface text-[#3A2A5E] font-bold shadow-md">
                                                START
                                            </span>
                                        )}

                                        <span
                                            className={`relative w-24 h-24 rounded-full p-[5px] ${
                                                isCurrent
                                                    ? "bg-gradient-to-br from-[#FFD24D] via-[#FF9D00] to-[#F3692A] shadow-[0_0_0_6px_rgba(255,255,255,0.2)]"
                                                    : "bg-surface/20"
                                            }`}
                                        >
                                            {isCurrent && (
                                                <motion.span
                                                    className="absolute inset-0 rounded-full border-4 border-white/25"
                                                    animate={{ scale: [1, 1.09, 1] }}
                                                    transition={{
                                                        duration: 1.4,
                                                        repeat: Infinity,
                                                    }}
                                                />
                                            )}

                                            <span
                                                className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden ${
                                                    isCurrent
                                                        ? "bg-gradient-to-b from-[#3D85FF] to-[#2F61C9]"
                                                        : "bg-surface/90"
                                                }`}
                                            >
                                                {hasImage ? (
                                                    <img
                                                        src={node.image}
                                                        alt={node.title}
                                                        className={`w-full h-full object-cover ${
                                                            !isCurrent && "opacity-60"
                                                        }`}
                                                    />
                                                ) : (
                                                    <Icon
                                                        className={
                                                            isCurrent
                                                                ? "w-9 h-9 text-white"
                                                                : "w-8 h-8 text-darkGray"
                                                        }
                                                        strokeWidth={2.2}
                                                    />
                                                )}
                                            </span>

                                            {isLocked && (
                                                <span className="absolute -right-1 -bottom-1 w-8 h-8 rounded-full bg-[#2D2442] border-2 border-surface/35 flex items-center justify-center">
                                                    <Lock className="w-4 h-4 text-surface/90" />
                                                </span>
                                            )}
                                        </span>

                                        <div className="text-left">
                                            <p className="text-xs uppercase tracking-wider text-surface/70">
                                                {node.label}
                                            </p>
                                            <p className="text-lg font-bold">
                                                {node.title}
                                            </p>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    <motion.aside
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.25 }}
                        className="hidden md:flex justify-center"
                    >
                        <div className="relative w-[380px] h-[460px] rounded-[34px] border border-surface/25 bg-white/5 backdrop-blur-[2px] overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent" />
                            <img
                                src={islandMultiplicacion}
                                alt="Ilustracion de la isla de sexualidad"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.aside>
                </div>
            </section>
        </main>
    );
}

export default SexualidadRoute;
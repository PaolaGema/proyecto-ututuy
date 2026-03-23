import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ButtonPageBack from "../../components/buttons/ButtonPageBack";
import { fade } from "../../animations/pageAnimations";

// Assets
import islandMultiplicacion from "../../assets/images/modules/osa_jukumari.png";
import leccionSexualidadImg from "../../assets/images/modules/leccion_sexualidad.png";
import leccionSexoImg from "../../assets/images/modules/leccion_sexo.png";
import leccionGeneroImg from "../../assets/images/modules/leccion_genero.png";
import leccionConsentimientoImg from "../../assets/images/modules/leccion_consentimiento.png";
import leccionLimitesImg from "../../assets/images/modules/leccion_limites.png";
import leccionViolenciaNoviazgoImg from "../../assets/images/modules/leccion_violencia_noviazgo.png";
import leccionRelacionesSaludablesImg from "../../assets/images/modules/leccion_relaciones_saludables.png";

const routeNodes = [
    { id: "desafio-1", label: "Lección 1", title: "Sexualidad", image: leccionSexualidadImg, state: "current", offset: "ml-4", route: "/play/sexualidad/lectura" },
    { id: "desafio-2", label: "Lección 2", title: "Sexo", image: leccionSexoImg, state: "current", offset: "ml-24", route: "/play/sexualidad/sexo_lectura1" },
    { id: "desafio-3", label: "Lección 3", title: "Género", image: leccionGeneroImg, state: "current", offset: "ml-8", route: "/play/sexualidad/genero_lectura1" },
    { id: "desafio-4", label: "Lección 4", title: "Consentimiento", image: leccionConsentimientoImg, state: "current", offset: "ml-28", route: "/play/sexualidad/consentimiento_lectura1" },
    { id: "desafio-5", label: "Lección 5", title: "Límites", image: leccionLimitesImg, state: "current", offset: "ml-10", route: "/play/sexualidad/limites_lectura1" },
    { id: "desafio-6", label: "Lección 6", title: "Violencia en el Noviazgo", image: leccionViolenciaNoviazgoImg, state: "current", offset: "ml-20", route: "/play/sexualidad/violencia_noviazgo_lectura1" },
    { id: "desafio-7", label: "Lección 7", title: "Relaciones Saludables", image: leccionRelacionesSaludablesImg, state: "current", offset: "ml-12", route: "/play/sexualidad/relaciones_saludables_lectura1" },
];

function SexualidadRoute() {
    document.title = "Modulo 1 · Sexualidad";
    const navigate = useNavigate();

    const handleNodeClick = (node) => {
        if (!node.route) {
            toast.warning("Esta ruta aún no ha sido configurada.");
            return;
        }
        navigate(node.route);
    };

    return (
        <motion.main 
            variants={fade} initial="initial" animate="animate" exit="exit"
            className="min-h-screen relative overflow-hidden text-white"
        >
            {/* Fondos Temáticos */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#241046] via-[#130627] to-[#0B021A]" />
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

            <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
                <ButtonPageBack to="/play" replace={true} absolute={true}>
                    Volver a Módulos
                </ButtonPageBack>

                <header className="text-center mb-20">
                    <motion.h1 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl font-black italic tracking-tighter"
                    >
                        MÓDULO 1
                    </motion.h1>
                    <p className="text-xl text-yellow-400 mt-2 font-bold tracking-[0.3em] uppercase">Sexualidad Integral</p>
                </header>

                <div className="grid md:grid-cols-[1fr_500px] gap-10 items-start">
                    
                    {/* SECCIÓN CAMINO (IZQUIERDA) */}
                    <div className="relative mx-auto w-full max-w-[420px]">
                        {/* SVG del Camino Curvo */}
                        <svg 
                            className="absolute left-0 top-0 w-full h-full pointer-events-none z-0"
                            viewBox="0 0 420 1200" 
                            fill="none" 
                            preserveAspectRatio="none"
                        >
                            <motion.path 
                                d="M 60 60 Q 250 150 80 300 T 150 550 T 80 800 T 140 1050" 
                                stroke="url(#line-gradient)" 
                                strokeWidth="10" 
                                strokeLinecap="round" 
                                strokeDasharray="20 25"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#FFD24D" />
                                    <stop offset="100%" stopColor="#F3692A" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="relative z-10 space-y-20">
                            {routeNodes.map((node, index) => {
                                const isCurrent = node.state === "current";
                                return (
                                    <motion.button
                                        key={node.id}
                                        onClick={() => handleNodeClick(node)}
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`relative flex items-center gap-6 ${node.offset} group focus:outline-none`}
                                    >
                                        {/* Avatar de Lección */}
                                        <div className="relative">
                                            <div className={`w-28 h-28 rounded-[2.5rem] p-[5px] transition-all duration-500 shadow-2xl rotate-3 group-hover:rotate-0 ${
                                                isCurrent ? "bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 shadow-orange-500/40" : "bg-white/10"
                                            }`}>
                                                <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-[#1a0b3d]">
                                                    <img src={node.image} alt={node.title} className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700" />
                                                </div>
                                            </div>
                                            {isCurrent && (
                                                <motion.div 
                                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                                    transition={{ repeat: Infinity, duration: 3 }}
                                                    className="absolute inset-0 bg-yellow-400 blur-3xl -z-10 rounded-full" 
                                                />
                                            )}
                                        </div>

                                        {/* Etiqueta Informativa */}
                                        <div className="bg-[#1a0b3d]/80 backdrop-blur-md border border-white/10 p-4 rounded-3xl min-w-[200px] shadow-xl group-hover:border-yellow-400/50 transition-colors">
                                            <span className="block text-[11px] font-black text-yellow-400 tracking-widest uppercase mb-1">{node.label}</span>
                                            <h3 className="text-xl font-bold text-white">{node.title}</h3>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* SECCIÓN MASCOTA (DERECHA) */}
                    <div className="md:sticky md:top-32 flex flex-col items-center">
                        {/* Globo de Diálogo Estilizado */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="relative mb-10 bg-white p-7 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-w-[340px]"
                        >
                            <p className="text-[#130627] text-xl font-extrabold leading-snug text-center">
                                "Descubre nuevos conocimientos sobre tu bienestar."
                            </p>
                            {/* Pico del globo */}
                            <div className="absolute -bottom-4 right-1/2 translate-x-1/2 w-10 h-10 bg-white rotate-45 rounded-sm" />
                        </motion.div>

                        {/* Personaje Libre (Sin cuadros) */}
                        <motion.div
                            animate={{ 
                                y: [0, -15, 0],
                                rotate: [0, 1.5, 0, -1.5, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-[480px] z-10"
                        >
                            <img 
                                src={islandMultiplicacion} 
                                alt="Guía Jukumari" 
                                className="w-full h-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]" 
                            />
                        </motion.div>

                        {/* Sombra en el "suelo" para dar profundidad */}
                        <motion.div 
                            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="w-48 h-6 bg-black/50 blur-2xl rounded-[100%] mt-[-20px]"
                        />
                    </div>

                </div>
            </section>
        </motion.main>
    );
}

export default SexualidadRoute;
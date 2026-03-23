import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ButtonPageBack from "../../components/buttons/ButtonPageBack";
import { fade } from "../../animations/pageAnimations";

// Reutiliza las mismas imágenes que tengas, cámbialas por las del docente cuando las tengas
import islandMultiplicacion from "../../assets/images/modules/osa_jukumari.png";
import leccionSexualidadImg from "../../assets/images/modules/leccion_sexualidad.png";
import leccionSexoImg from "../../assets/images/modules/leccion_sexo.png";

const routeNodes = [
    {
        id: "leccion-1-docente",
        label: "Lección 1",
        title: "Hablemos de Sexualidad",
        descripcion: "Conceptos clave para guiar a tus estudiantes en el tema de sexualidad integral.",
        image: leccionSexualidadImg,
        available: true,
        offset: "ml-4",
        route: "/ruta-docente/sexualidad/leccion1",
    },
    {
        id: "leccion-2-docente",
        label: "Lección 2",
        title: "Sexo y Género",
        descripcion: "Diferencias biológicas y construcciones sociales: guía práctica para el aula.",
        image: leccionSexoImg,
        available: true,
        offset: "ml-24",
        route: "/ruta-docente/sexualidad/leccion2",
    },
];

function Modulo1SexualidadDocente() {
    document.title = "Módulo 1 Docente · Sexualidad";
    const navigate = useNavigate();

    const handleNodeClick = (node) => {
        if (!node.available) {
            toast.warning("Esta lección aún no está disponible.");
            return;
        }
        navigate(node.route);
    };

    return (
        <motion.main
            variants={fade} initial="initial" animate="animate" exit="exit"
            className="min-h-screen relative overflow-hidden text-white"
        >
            {/* Fondo */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#241046] via-[#130627] to-[#0B021A]" />
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

            <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">

                <ButtonPageBack to="/ruta-docente" replace={true} absolute={true}>
                    Volver a Módulos
                </ButtonPageBack>

                {/* Header */}
                <header className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
                    >
                        Panel Docente
                    </motion.div>
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl font-black italic tracking-tighter"
                    >
                        MÓDULO 1
                    </motion.h1>
                    <p className="text-xl text-yellow-400 mt-2 font-bold tracking-[0.3em] uppercase">
                        Sexualidad Integral
                    </p>
                    <p className="text-purple-300 mt-3 text-sm max-w-md mx-auto">
                        Selecciona una lección para acceder al material de apoyo para tu clase.
                    </p>
                </header>

                <div className="grid md:grid-cols-[1fr_500px] gap-10 items-start">

                    {/* CAMINO IZQUIERDA */}
                    <div className="relative mx-auto w-full max-w-[420px]">

                        {/* SVG camino */}
                        <svg
                            className="absolute left-0 top-0 w-full h-full pointer-events-none z-0"
                            viewBox="0 0 420 600"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d="M 60 60 Q 250 150 80 300 T 150 550"
                                stroke="url(#line-gradient-docente)"
                                strokeWidth="10"
                                strokeLinecap="round"
                                strokeDasharray="20 25"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="line-gradient-docente" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#FFD24D" />
                                    <stop offset="100%" stopColor="#F3692A" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="relative z-10 space-y-20">
                            {routeNodes.map((node) => (
                                <motion.button
                                    key={node.id}
                                    onClick={() => handleNodeClick(node)}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative flex items-center gap-6 ${node.offset} group focus:outline-none`}
                                >
                                    {/* Avatar */}
                                    <div className="relative">
                                        <div className="w-28 h-28 rounded-[2.5rem] p-[5px] transition-all duration-500 shadow-2xl rotate-3 group-hover:rotate-0 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 shadow-orange-500/40">
                                            <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-[#1a0b3d]">
                                                <img
                                                    src={node.image}
                                                    alt={node.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                        </div>
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ repeat: Infinity, duration: 3 }}
                                            className="absolute inset-0 bg-yellow-400 blur-3xl -z-10 rounded-full"
                                        />
                                    </div>

                                    {/* Etiqueta */}
                                    <div className="bg-[#1a0b3d]/80 backdrop-blur-md border border-white/10 p-4 rounded-3xl min-w-[200px] shadow-xl group-hover:border-yellow-400/50 transition-colors text-left">
                                        <span className="block text-[11px] font-black text-yellow-400 tracking-widest uppercase mb-1">
                                            {node.label}
                                        </span>
                                        <h3 className="text-lg font-bold text-white leading-tight mb-1">
                                            {node.title}
                                        </h3>
                                        <p className="text-[11px] text-purple-300 leading-snug">
                                            {node.descripcion}
                                        </p>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* MASCOTA / GUÍA DERECHA */}
                    <div className="md:sticky md:top-32 flex flex-col items-center">

                        {/* Globo de diálogo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="relative mb-10 bg-white p-7 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-w-[340px]"
                        >
                            <p className="text-[#130627] text-xl font-extrabold leading-snug text-center">
                                "Selecciona una lección para preparar tu clase con los mejores recursos."
                            </p>
                            <div className="absolute -bottom-4 right-1/2 translate-x-1/2 w-10 h-10 bg-white rotate-45 rounded-sm" />
                        </motion.div>

                        {/* Personaje */}
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

export default Modulo1SexualidadDocente;
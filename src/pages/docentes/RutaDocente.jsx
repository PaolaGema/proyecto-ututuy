import { motion } from "framer-motion";
import { Lock, BookOpen, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { fade } from "../../animations/pageAnimations";

import islandMultiplicacion from "../../assets/images/modules/isla_modulo1.png";
import islandSumas from "../../assets/images/modules/isla_modulo2.png";
import islandFracciones from "../../assets/images/modules/isla_modulo3.png";

const modules = [
    {
        id: "sexualidad-docente",
        island: "Módulo 1",
        title: "SEXUALIDAD",
        description: "Material didáctico para abordar el conocimiento del cuerpo, identidad y relaciones interpersonales con tus estudiantes.",
        available: true,
        gradient: "from-[#7B4EC7] to-[#B386FF]",
        image: islandMultiplicacion,
        ruta: "/ruta-docente/sexualidad",
        etiqueta: "Guía Docente",
        etiquetaColor: "#7B4EC7",
    },
    {
        id: "salud-sexual-docente",
        island: "Módulo 2",
        title: "SALUD SEXUAL REPRODUCTIVA",
        description: "Recursos y actividades para orientar a tus estudiantes en el cuidado y protección de su cuerpo.",
        available: false,
        gradient: "from-[#0EA022] to-[#67C872]",
        image: islandSumas,
        ruta: "/ruta-docente/salud-sexual",
        etiqueta: "Guía Docente",
        etiquetaColor: "#0EA022",
    },
    {
        id: "proyecto-vida-docente",
        island: "Módulo 3",
        title: "PROYECTO DE VIDA",
        description: "Herramientas para acompañar a tus estudiantes en la toma de decisiones y proyección de metas.",
        available: false,
        gradient: "from-[#E01226] to-[#FF6A7A]",
        image: islandFracciones,
        ruta: "/ruta-docente/proyecto-vida",
        etiqueta: "Guía Docente",
        etiquetaColor: "#E01226",
    },
];

function RutaDocente() {
    document.title = "Materiales Docente | UTUTUY";
    const navigate = useNavigate();

    const handleSelect = (module) => {
        if (!module.available) {
            toast.info("Este material estará disponible pronto.", {
                className: "bg-surface",
            });
            return;
        }
        navigate(module.ruta);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#2b1450] to-[#120824] flex items-center justify-center px-4">
            <motion.main
                variants={fade}
                initial="initial"
                animate="animate"
                exit="exit"
                className="min-h-screen bg-gradient-to-b from-[#2b1450] to-[#120824] px-6 pt-28 pb-16 w-full"
            >
                <div className="max-w-6xl mx-auto">

                    {/* Botón volver */}
                    <button
                        onClick={() => navigate("/home_docente")}
                        className="absolute top-6 left-6 flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-all"
                    >
                        <ChevronLeft size={20} /> Volver
                    </button>

                    {/* HEADER */}
                    <section className="mb-12 text-center">
                        <span className="inline-block bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                            Panel Docente
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Materiales Didácticos
                        </h1>
                        <p className="text-purple-300 mt-3 text-base md:text-lg max-w-xl mx-auto">
                            Selecciona un módulo para acceder a las guías y recursos de apoyo para tus clases.
                        </p>
                    </section>

                    {/* CARDS */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {modules.map((module, index) => (
                            <motion.button
                                key={module.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.12, duration: 0.4, type: "spring" }}
                                type="button"
                                onClick={() => handleSelect(module)}
                                className={`text-left p-[2px] rounded-2xl bg-gradient-to-b ${module.gradient} shadow-lg transition-all duration-200 ${module.available ? "hover:scale-[1.03] hover:shadow-2xl" : "opacity-60 cursor-not-allowed"}`}
                            >
                                <div className="bg-white/95 backdrop-blur rounded-2xl p-5 h-full border border-white/10 flex flex-col">

                                    {/* IMAGE */}
                                    <div className="mb-4 overflow-hidden rounded-xl relative">
                                        <img
                                            src={module.image}
                                            alt={module.title}
                                            className="w-full h-40 object-cover"
                                        />
                                        {/* Overlay candado si no está disponible */}
                                        {!module.available && (
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                                                <Lock className="w-10 h-10 text-white/80" />
                                            </div>
                                        )}
                                    </div>

                                    {/* TOP */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-semibold text-gray-500">
                                            {module.island}
                                        </span>
                                        {module.available ? (
                                            <BookOpen className="w-5 h-5 text-purple-700" />
                                        ) : (
                                            <Lock className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>

                                    {/* TITLE */}
                                    <h2 className="text-lg font-black text-purple-800 mb-2">
                                        {module.title}
                                    </h2>

                                    {/* DESC */}
                                    <p className="text-sm text-gray-600 flex-1">
                                        {module.description}
                                    </p>

                                    {/* STATUS */}
                                    <div className="mt-5 flex items-center justify-between">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                            module.available
                                                ? "bg-purple-100 text-purple-700"
                                                : "bg-gray-200 text-gray-500"
                                        }`}>
                                            {module.available ? "📚 Disponible" : "🔒 Próximamente"}
                                        </span>
                                        {module.available && (
                                            <span className="text-xs font-bold text-purple-500 flex items-center gap-1">
                                                Ver material →
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </section>

                </div>
            </motion.main>
        </div>
    );
}

export default RutaDocente;
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";
import { fade } from "../../animations/pageAnimations";
import { ArrowLeft, ArrowRight, AlertTriangle, Heart, Phone, MessageCircle } from "lucide-react";

import imagenCelebracion from "../../assets/images/modules/correcta1.png";
import draVioleta from "../../assets/images/modules/doctora_violeta.webp";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=59176789702&text=Hola+Dra.+Violeta&type=phone_number&app_absent=0";
const TELEFONO = "+591 76789702";

function SexualidadMensaje() {
    const navigate = useNavigate();
    const location = useLocation();
    const { respuesta } = location.state || { respuesta: "SI" };

    const handleSiguienteLeccion = () => navigate("/play/sexualidad");
    const handleVolver = () => navigate("/play/sexualidad/preguntas-personales");

    return (
        <motion.main
            variants={fade} initial="initial" animate="animate" exit="exit"
            className="min-h-screen text-white relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden font-sans"
            style={{ background: "linear-gradient(160deg, #0d0a1f 0%, #1a0a3b 40%, #0f1a3d 100%)" }}
        >
            {/* Fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0b3d_0%,_#050110_100%)] opacity-80" />
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

            {/* Botón volver */}
            <button
                onClick={handleVolver}
                className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 transition-all"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Volver</span>
            </button>

            <section className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8">

                <motion.h2
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-bold mb-2 text-center"
                >
                    Si tu respuesta fue{" "}
                    <span className="text-yellow-400 font-black">"{respuesta}"</span>
                </motion.h2>

                {respuesta === "SI" ? (
                    <div className="grid gap-6 w-full max-w-2xl">

                        {/* Alerta */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                            className="relative border-2 border-red-500 bg-[#090118]/90 p-6 md:p-8 rounded-[25px] flex items-center gap-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                        >
                            <div className="absolute -left-6 bg-red-600 p-3 rounded-xl shadow-lg rotate-[-10deg]">
                                <AlertTriangle className="w-10 h-10 text-white" fill="currentColor" />
                            </div>
                            <p className="ml-8 text-lg md:text-2xl font-black leading-tight uppercase tracking-tight">
                                <span className="text-red-500">¡Alerta!</span> Cuando sientas incomodidad con otras personas,{" "}
                                <span className="text-white">PIDE AYUDA A UN ADULTO DE CONFIANZA.</span>
                            </p>
                        </motion.div>

                        {/* Apoyo emocional */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                            className="relative border-2 border-orange-500 bg-[#090118]/90 p-6 md:p-8 rounded-[25px] shadow-[0_0_30px_rgba(249,115,22,0.2)]"
                        >
                            <div className="absolute -top-8 -right-4">
                                <div className="relative flex items-center justify-center">
                                    <Heart className="w-24 h-24 text-orange-500 fill-orange-500" />
                                </div>
                            </div>
                            <p className="text-xl md:text-2xl font-bold pr-14 leading-tight">
                                No estás sola y no es tu culpa. Nadie tiene derecho a tocarte o incomodarte sin tu permiso.
                            </p>
                        </motion.div>

                        {/* ── DRA. VIOLETA — bloque mejorado ── */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                            className="rounded-3xl overflow-hidden border-2 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.25)]"
                            style={{ background: "linear-gradient(135deg, #2d1060 0%, #1a0a3b 100%)" }}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-0">

                                {/* Imagen Dra. Violeta */}
                                <div className="relative flex-shrink-0 flex items-end justify-center pt-4 px-6"
                                    style={{ background: "rgba(168,85,247,0.08)" }}>
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <img
                                            src={draVioleta}
                                            alt="Dra. Violeta"
                                            className="w-36 md:w-44 h-auto object-contain drop-shadow-2xl"
                                        />
                                    </motion.div>
                                </div>

                                {/* Contenido */}
                                <div className="flex-1 p-6 flex flex-col gap-4">
                                    <div>
                                        <span className="text-xs font-black uppercase tracking-widest text-purple-400 mb-1 block">
                                            Apoyo especializado
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                                            Dra. Violeta
                                        </h3>
                                        <p className="text-white/70 text-sm mt-1 leading-relaxed">
                                            Puede que hayas pasado una situación de{" "}
                                            <span className="text-purple-400 font-black">VIOLENCIA</span>.
                                            No estás sola. Puedes contactar a la Dra. Violeta de forma confidencial.
                                        </p>
                                    </div>

                                    {/* Número de teléfono */}
                                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 w-fit">
                                        <Phone size={16} className="text-purple-400 flex-shrink-0" />
                                        <span className="text-white font-black text-base tracking-widest">
                                            {TELEFONO}
                                        </span>
                                    </div>

                                    {/* Botón WhatsApp */}
                                    <motion.a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex items-center gap-3 px-5 py-3 rounded-2xl font-black text-sm uppercase tracking-wider w-fit transition-all"
                                        style={{
                                            background: "linear-gradient(135deg, #25D366, #128C7E)",
                                            color: "#fff",
                                            boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {/* Ícono WhatsApp SVG */}
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        Escribir por WhatsApp
                                    </motion.a>

                                    <p className="text-white/40 text-xs leading-relaxed">
                                        💡 Si no tienes internet, puedes llamar directamente al número de arriba.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                        {/* Éxito */}
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                            <h3 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 flex items-center justify-center md:justify-start gap-4">
                                <div className="w-3 h-20 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full" />
                                ¡EXCELENTE!
                            </h3>
                            <p className="text-2xl md:text-4xl font-bold max-w-md leading-tight text-white/90">
                                Sigue practicando{" "}
                                <span className="text-yellow-400 underline decoration-yellow-400/50 underline-offset-8">
                                    límites saludables
                                </span>
                                , lo haces muy bien.
                            </p>
                        </motion.div>

                        {/* Personaje */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="relative group"
                        >
                            <div className="w-72 h-72 md:w-96 md:h-96 bg-cyan-400/30 rounded-full blur-[100px] absolute inset-0 -z-10 animate-pulse" />
                            <img
                                src={imagenCelebracion}
                                alt="Personaje celebrando"
                                className="relative z-10 w-72 md:w-96 drop-shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:scale-105 transition-transform duration-300"
                            />
                        </motion.div>
                    </div>
                )}

                {/* Botón siguiente lección */}
                <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSiguienteLeccion}
                    className="mt-8 self-center md:self-end flex items-center gap-5 bg-[#3b2a5c] pl-8 pr-3 py-3 rounded-2xl shadow-[0_8px_0_rgb(0,0,0,0.3)] border-b-4 border-black/40 hover:bg-[#4c3575] transition-all group"
                >
                    <span className="text-xl md:text-2xl font-black uppercase tracking-widest text-white">
                        Siguiente lección
                    </span>
                    <div className="bg-yellow-400 p-3 rounded-xl group-hover:bg-yellow-300 transition-colors">
                        <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-[#090118]" strokeWidth={4} />
                    </div>
                </motion.button>

            </section>
        </motion.main>
    );
}

export default SexualidadMensaje;
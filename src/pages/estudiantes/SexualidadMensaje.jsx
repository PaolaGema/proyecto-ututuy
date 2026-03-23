import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";
// ─── CAMBIO: Importamos ArrowRight para el sentido de avance ───
import { fade } from "../../animations/pageAnimations"; 
import { ArrowLeft, ArrowRight, AlertTriangle, Heart, User } from "lucide-react";

// ─── CAMBIO: Ruta de la imagen ───
import imagenCelebracion from "../../assets/images/modules/correcta1.png";

function SexualidadMensaje() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Recuperamos la respuesta del estado de la navegación
    const { respuesta } = location.state || { respuesta: "SI" }; 

    // ─── CAMBIO: Función para avanzar al mapa de módulos ───
    const handleSiguienteLeccion = () => navigate("/play/sexualidad");

    const handleVolver = () => navigate("/play/sexualidad/preguntas-personales");

    return (
        <motion.main
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-[#050110] text-white relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden font-sans"
        >
            {/* Fondo con degradado radial profundo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0b3d_0%,_#050110_100%)] opacity-80" />

            {/* BOTÓN VOLVER (Superior izquierda) */}
            <button
                onClick={handleVolver}
                className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 transition-all"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Volver</span>
            </button>

            <section className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8">
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Si tu respuesta fue <span className="text-yellow-400 font-black">"{respuesta}"</span>
                </h2>

                {respuesta === "SI" ? (
                    <div className="grid gap-6 w-full max-w-2xl">
                        {/* Bloque de Alerta */}
                        <motion.div 
                            initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                            className="relative border-2 border-red-500 bg-[#090118]/90 p-6 md:p-8 rounded-[25px] flex items-center gap-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                        >
                            <div className="absolute -left-6 bg-red-600 p-3 rounded-xl shadow-lg rotate-[-10deg]">
                                <AlertTriangle className="w-10 h-10 text-white" fill="currentColor" />
                            </div>
                            <p className="ml-8 text-lg md:text-2xl font-black leading-tight uppercase tracking-tight">
                                <span className="text-red-500">¡Alerta!</span> Cuando sientas incomodidad con otras personas, <span className="text-white">PIDE AYUDA A UN ADULTO DE CONFIANZA.</span>
                            </p>
                        </motion.div>

                        {/* Bloque de Apoyo Emocional */}
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                            className="relative border-2 border-orange-500 bg-[#090118]/90 p-6 md:p-8 rounded-[25px] shadow-[0_0_30px_rgba(249,115,22,0.2)]"
                        >
                            <div className="absolute -top-8 -right-4">
                                <div className="relative flex items-center justify-center">
                                    <Heart className="w-24 h-24 text-orange-500 fill-orange-500" />
                                    <User className="absolute w-10 h-10 text-[#090118]" strokeWidth={3} />
                                </div>
                            </div>
                            <p className="text-xl md:text-3xl font-bold pr-14 leading-tight">
                                No estás sola y no es tu culpa. Nadie tiene derecho a tocarte o incomodarte sin tu permiso.
                            </p>
                        </motion.div>

                        {/* Bloque Dra. Violeta */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                            className="self-end flex items-center gap-4 border-2 border-purple-500 bg-purple-500/10 p-5 rounded-2xl max-w-sm backdrop-blur-sm"
                        >
                            <p className="text-base font-semibold italic leading-snug text-gray-200">
                                Puede que hayas pasado una situación de <span className="text-purple-400 not-italic font-black">VIOLENCIA</span>. Pregunta a la Dra. Violeta.
                            </p>
                            <div className="bg-purple-500 p-3 rounded-full ring-4 ring-purple-500/30 flex-shrink-0">
                                <User className="w-8 h-8 text-white" />
                            </div>
                        </motion.div>
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                        {/* Texto de Éxito */}
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                            <h3 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 flex items-center justify-center md:justify-start gap-4">
                                <div className="w-3 h-20 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full" />
                                ¡EXCELENTE!
                            </h3>
                            <p className="text-2xl md:text-4xl font-bold max-w-md leading-tight text-white/90">
                                Sigue practicando <span className="text-yellow-400 underline decoration-yellow-400/50 underline-offset-8">límites saludables</span>, lo haces muy bien.
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

                {/* ─── CAMBIO: BOTÓN SIGUIENTE LECCIÓN (Estilo mejorado) ─── */}
                <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSiguienteLeccion}
                    className="mt-12 self-center md:self-end flex items-center gap-5 bg-[#3b2a5c] pl-8 pr-3 py-3 rounded-2xl shadow-[0_8px_0_rgb(0,0,0,0.3)] border-b-4 border-black/40 hover:bg-[#4c3575] transition-all group"
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
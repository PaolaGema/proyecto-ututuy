import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { ChevronLeft, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { fade } from "../../animations/pageAnimations";

import leccionDocente1 from "../../assets/images/modules/leccion_docente1.png";
import leccionDocente2 from "../../assets/images/modules/leccion_docente2.png";
import qr1 from "../../assets/images/modules/leccion1_qr1.png";
import qr2 from "../../assets/images/modules/leccion1_qr2.png";

function Leccion1SexualidadDocente() {
    document.title = "Lección 1 · Hablemos de Sexualidad";
    const navigate = useNavigate();

    return (
        <motion.main
            variants={fade} initial="initial" animate="animate" exit="exit"
            className="min-h-screen relative overflow-hidden text-white"
            style={{ fontFamily: "'Nunito', sans-serif" }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0020] via-[#130627] to-[#0B021A]" />
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

            <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24">

                {/* Botón volver */}
                <button
                    onClick={() => navigate("/ruta-docente/sexualidad")}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-bold mb-10 transition-all"
                >
                    <ChevronLeft size={18} /> Volver al Módulo 1
                </button>

                {/* Badge */}
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
                    <span className="bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Lección 1 · Material Docente
                    </span>
                </motion.div>

                {/* ══ PARTE 1: HABLEMOS DE SEXUALIDAD ══ */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>

                    <div className="text-center mb-10">
                        <h1 style={{
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            fontWeight: 900,
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            background: "linear-gradient(90deg, #f97316, #ec4899)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            display: "inline-block",
                            padding: "8px 24px",
                        }}>
                            Hablemos de Sexualidad
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_240px] gap-6 items-start mb-8">

                        {/* Columna izquierda */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl shadow-purple-900/30"
                        >
                            <img src={leccionDocente1} alt="Consentimiento y Relaciones Sanas" className="w-full h-auto object-cover" />
                        </motion.div>

                        {/* Columna central */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                            className="rounded-3xl p-8 border border-white/10 h-full"
                            style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(255,255,255,0.92)", fontWeight: 600, textAlign: "justify" }}>
                                La sexualidad es un aspecto central del ser humano presente a lo largo de su vida, que abarca el{" "}
                                <strong style={{ color: "#f97316" }}>sexo</strong>, las{" "}
                                <strong style={{ color: "#f97316" }}>identidades y roles de género</strong>, la{" "}
                                <strong style={{ color: "#f97316" }}>orientación sexual</strong>, el{" "}
                                <strong style={{ color: "#f97316" }}>erotismo</strong>, el{" "}
                                <strong style={{ color: "#f97316" }}>placer</strong>, la{" "}
                                <strong style={{ color: "#f97316" }}>intimidad</strong> y la{" "}
                                <strong style={{ color: "#f97316" }}>reproducción</strong>. Se experimenta y se expresa en pensamientos, fantasías, deseos, creencias, actitudes, valores, conductas y relaciones.
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <p className="text-white/40 text-xs leading-relaxed">
                                    📌 <strong>Referencia:</strong> Organización Mundial de la Salud (2006). Defining sexual health: Report of a technical consultation on sexual health.
                                </p>
                            </div>
                        </motion.div>

                        {/* Columna derecha */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl shadow-blue-900/30"
                        >
                            <img src={leccionDocente2} alt="Educación Sexual Integral y Salud Sexual" className="w-full h-auto object-cover" />
                        </motion.div>

                    </div>
                </motion.div>

                {/* Divisor */}
                <div className="my-12 flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/40 text-sm font-bold uppercase tracking-widest">Recurso de Aprendizaje</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* ══ PARTE 2: QUIÉN SOY YO ══ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-8 flex-wrap">
                        <div className="flex items-center gap-3 bg-orange-500/20 border border-orange-400/40 px-5 py-2.5 rounded-full">
                            <Users size={20} className="text-orange-400" />
                            <span className="text-orange-300 font-black text-sm uppercase tracking-widest">Recurso de Aprendizaje</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, fontStyle: "italic", color: "#f97316", letterSpacing: "-0.5px" }}>
                            "¿Quién Soy Yo?"
                        </h2>
                    </div>

                    {/* Instrucciones */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="rounded-3xl border-2 border-purple-500/50 p-6 mb-8 flex items-start gap-6"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                            style={{ background: "linear-gradient(135deg, #f97316, #fbbf24)" }}>
                            <ArrowRight size={32} color="#fff" strokeWidth={3} />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-white font-black text-base uppercase tracking-widest mb-4">
                                Instrucciones del Juego
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Leemos la historia entre todos y todas.",
                                    "Etapa de Votación. Las y los estudiantes deben votar por una opción (levantando la mano o por grupos).",
                                    "Cada estudiante debe justificar su decisión.",
                                    "A la conclusión de las historias el grupo de estudiantes recibe retroalimentación inmediata.",
                                ].map((inst, i) => (
                                    <li key={i} className="flex items-start gap-2 text-white/85 text-sm leading-relaxed">
                                        <span className="text-orange-400 font-black mt-0.5">•</span>
                                        {inst}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Flecha → juego */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/ruta-docente/sexualidad/leccion1/juego")}
                            className="flex-shrink-0 hidden md:flex w-14 h-14 rounded-full items-center justify-center cursor-pointer border-none"
                            style={{ background: "linear-gradient(135deg, #f97316, #fbbf24)" }}
                        >
                            <ArrowRight size={26} color="#fff" strokeWidth={3} />
                        </motion.button>
                    </motion.div>

                    {/* 3 badges */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className="rounded-2xl p-5 border-2 border-purple-500/50 flex items-center gap-4"
                            style={{ background: "rgba(139,92,246,0.08)" }}
                        >
                            <Clock size={28} className="text-purple-400 flex-shrink-0" />
                            <div>
                                <p className="text-purple-300 text-xs font-bold uppercase tracking-wider">Duración total</p>
                                <p className="text-white font-black text-xl">20 MINUTOS</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28 }}
                            className="rounded-2xl p-5 border-2 border-purple-500/50 flex items-center gap-4"
                            style={{ background: "rgba(139,92,246,0.08)" }}
                        >
                            <Users size={28} className="text-purple-400 flex-shrink-0" />
                            <div>
                                <p className="text-purple-300 text-xs font-bold uppercase tracking-wider">Modalidad</p>
                                <p className="text-white font-black text-lg leading-tight">PARTICIPACIÓN GRUPAL</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.36 }}
                            className="rounded-2xl p-5 border-2 border-purple-500/50"
                            style={{ background: "rgba(139,92,246,0.08)" }}
                        >
                            <p className="text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">Reglas del juego</p>
                            {["No hay respuestas únicas", "Todas las opiniones se respetan", "Debes justificar tu elección"].map((regla, i) => (
                                <div key={i} className="flex items-center gap-2 mb-1.5">
                                    <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                                    <span className="text-white/85 text-sm font-semibold">{regla}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Divisor */}
                <div className="my-12 flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/40 text-sm font-bold uppercase tracking-widest">Recursos Educativos</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* ══ PARTE 3: QR RECURSOS ══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Badge título */}
                    <div className="px-8 py-3 rounded-full font-black text-white text-sm uppercase tracking-widest"
                        style={{ background: "linear-gradient(90deg, #f97316, #ea580c)" }}>
                        Recursos Educativos
                    </div>

                    {/* Subtítulo */}
                    <p className="text-white/80 font-semibold text-center text-base md:text-lg max-w-xl leading-relaxed">
                        Si quieres saber más y profundizar tus conocimientos, te invitamos a ver los siguientes videos
                    </p>

                    {/* QR Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 w-full max-w-2xl">

                        <motion.div
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="flex flex-col items-center gap-4 rounded-3xl p-6 border border-white/10"
                            style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                            <div className="rounded-2xl overflow-hidden bg-white p-3 shadow-xl w-48 h-48">
                                <img src={qr1} alt="QR DSDR Bolivia" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: "rgba(255,255,255,0.1)" }}>
                                   
                                </div>
                                <span className="text-white font-black text-sm uppercase tracking-wider">DSDR - BOLIVIA</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className="flex flex-col items-center gap-4 rounded-3xl p-6 border border-white/10"
                            style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                            <div className="rounded-2xl overflow-hidden bg-white p-3 shadow-xl w-48 h-48">
                                <img src={qr2} alt="QR Sexualidad Concepto" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: "rgba(255,255,255,0.1)" }}>
                                   
                                </div>
                                <span className="text-white font-black text-sm uppercase tracking-wider">SEXUALIDAD - CONCEPTO</span>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

            </section>
        </motion.main>
    );
}

export default Leccion1SexualidadDocente;
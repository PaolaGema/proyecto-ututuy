import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { ChevronLeft, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { fade } from "../../animations/pageAnimations";

import leccionDocente3 from "../../assets/images/modules/leccion_docente3.png";
import qr1 from "../../assets/images/modules/leccion2_qr1.png";
import qr2 from "../../assets/images/modules/leccion2_qr2.png";

function Leccion2SexualidadDocente() {
    document.title = "Lección 2 · Sexo y Género";
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
                        Lección 2 · Material Docente
                    </span>
                </motion.div>

                {/* ══ PARTE 1: SEXO Y GÉNERO ══ */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>

                    {/* Título */}
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
                            Sexo y Género
                        </h1>
                    </div>

                    {/* Layout 3 columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_340px_1fr] gap-6 items-start mb-8">

                        {/* Columna izquierda — texto SEXO */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            className="rounded-3xl p-7 border border-blue-500/30 h-full flex flex-col justify-between"
                            style={{ background: "rgba(59,130,246,0.06)" }}
                        >
                            <div>
                                <h2 className="text-blue-400 font-black text-2xl uppercase tracking-wide mb-1">SEXO</h2>
                                <p className="text-blue-300 text-sm font-bold mb-4 uppercase tracking-widest">Lo biológico</p>
                                <p style={{
                                    fontSize: "0.92rem",
                                    lineHeight: "1.8",
                                    color: "rgba(255,255,255,0.88)",
                                    fontWeight: 600,
                                    textAlign: "justify",
                                }}>
                                    El sexo se refiere al conjunto de <strong style={{ color: "#60a5fa" }}>características biológicas y anatómicas</strong> con las que nacen las personas, como los cromosomas, órganos reproductivos, hormonas y características físicas, que permiten clasificarlas generalmente como masculino o femenino.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-blue-500/20">
                                <p className="text-white/40 text-xs leading-relaxed">
                                    📌 <strong>Organización Mundial de la Salud (OMS, 2018)</strong>
                                </p>
                            </div>
                        </motion.div>

                        {/* Columna central — infografía */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }}
                            className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <img
                                src={leccionDocente3}
                                alt="Sexo vs Género infografía"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>

                        {/* Columna derecha — texto GÉNERO */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            className="rounded-3xl p-7 border border-purple-500/30 h-full flex flex-col justify-between"
                            style={{ background: "rgba(168,85,247,0.06)" }}
                        >
                            <div>
                                <h2 className="text-purple-400 font-black text-2xl uppercase tracking-wide mb-1">GÉNERO</h2>
                                <p className="text-purple-300 text-sm font-bold mb-4 uppercase tracking-widest">Lo social y aprendido</p>
                                <p style={{
                                    fontSize: "0.92rem",
                                    lineHeight: "1.8",
                                    color: "rgba(255,255,255,0.88)",
                                    fontWeight: 600,
                                    textAlign: "justify",
                                }}>
                                    El género es una <strong style={{ color: "#c084fc" }}>construcción social, cultural e histórica</strong> que define los roles, comportamientos, actividades y atributos que una sociedad considera apropiados para hombres, mujeres u otras identidades.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-purple-500/20">
                                <p className="text-white/40 text-xs leading-relaxed">
                                    📌 <strong>Fuente: Organización Mundial de la Salud (OMS, 2018)</strong>
                                </p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Barra inferior — beneficios */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        className="rounded-2xl p-5 border border-white/10 text-center"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                        <p className="text-white/70 text-sm font-bold mb-3">
                            Comprender la diferencia entre sexo y género permite:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { emoji: "🌍", texto: "Reconocer la diversidad" },
                                { emoji: "🤔", texto: "Cuestionar estereotipos" },
                                { emoji: "⚖️", texto: "Promover la igualdad y el respeto" },
                                { emoji: "🌱", texto: "Favorecer el desarrollo de la identidad" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-1 rounded-xl p-3"
                                    style={{ background: "rgba(255,255,255,0.04)" }}>
                                    <span className="text-2xl">{item.emoji}</span>
                                    <span className="text-white/80 text-xs font-semibold text-center leading-snug">{item.texto}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-white/30 text-xs mt-3">
                            Fuente: UNFPA (Fondo de Población de las Naciones Unidas)
                        </p>
                    </motion.div>
                </motion.div>

                {/* Divisor */}
                <div className="my-12 flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/40 text-sm font-bold uppercase tracking-widest">Recurso de Aprendizaje</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* ══ PARTE 2: "REAL O IMPUESTO" ══ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header recurso */}
                    <div className="flex items-center gap-4 mb-8 flex-wrap">
                        <div className="flex items-center gap-3 bg-orange-500/20 border border-orange-400/40 px-5 py-2.5 rounded-full">
                            <Users size={20} className="text-orange-400" />
                            <span className="text-orange-300 font-black text-sm uppercase tracking-widest">Recurso de Aprendizaje</span>
                        </div>
                        <h2 style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            fontWeight: 900,
                            fontStyle: "italic",
                            color: "#f97316",
                            letterSpacing: "-0.5px",
                        }}>
                            "Real o Impuesto"
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

                        {/* Flecha → juego lección 2 */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/ruta-docente/sexualidad/leccion2/juego")}
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

                {/* ══ PARTE 3: QR ══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="px-8 py-3 rounded-full font-black text-white text-sm uppercase tracking-widest"
                        style={{ background: "linear-gradient(90deg, #f97316, #ea580c)" }}>
                        Recursos Educativos
                    </div>

                    <p className="text-white/80 font-semibold text-center text-base md:text-lg max-w-xl leading-relaxed">
                        Si quieres saber más y profundizar tus conocimientos, te invitamos a ver los siguientes videos
                    </p>

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
                                    <span className="text-base">📱</span>
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
                                    <span className="text-base">📱</span>
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

export default Leccion2SexualidadDocente;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { fade } from "../../animations/pageAnimations";

import historia1 from "../../assets/images/modules/leccion_dinamica_docente5.png";
import historia2 from "../../assets/images/modules/leccion_dinamica_docente6.png";
import historia3 from "../../assets/images/modules/leccion_dinamica_docente7.png";
import historia4 from "../../assets/images/modules/leccion_dinamica_docente8.png";

const historias = [
    {
        id: 1,
        imagen: historia1,
        situacion: '"Los hombres no lloran"',
        opciones: [
            { id: "A", texto: "Biológico" },
            { id: "B", texto: "Social" },
        ],
        correcta: "B",
    },
    {
        id: 2,
        imagen: historia2,
        situacion: '"Tener pene o vagina"',
        opciones: [
            { id: "A", texto: "Género" },
            { id: "B", texto: "Sexo" },
        ],
        correcta: "B",
    },
    {
        id: 3,
        imagen: historia3,
        situacion: '"Las mujeres cuidan mejor"',
        opciones: [
            { id: "A", texto: "Natural" },
            { id: "B", texto: "Estereotipo" },
        ],
        correcta: "B",
    },
    {
        id: 4,
        imagen: historia4,
        situacion: '"Elegir tu ropa"',
        opciones: [
            { id: "A", texto: "Imposición" },
            { id: "B", texto: "Decisión personal" },
        ],
        correcta: "B",
    },
];

function calcularSemaforo(respuestas) {
    const valores = Object.values(respuestas);
    const totalB = valores.filter((r) => r === "B").length;
    const totalA = valores.filter((r) => r === "A").length;

    if (totalB >= 3) {
        return {
            color: "#22c55e", colorDark: "#15803d", glow: "#22c55e55",
            grupo: "Grupo Auténtico",
            descripcion: "Reconoce que muchas ideas son construcciones sociales. Cuestiona estereotipos.",
            mensaje: "¡Excelente! El grupo identifica correctamente los estereotipos de género y los cuestiona.",
        };
    } else if (totalA >= 3) {
        return {
            color: "#f43f5e", colorDark: "#be123c", glow: "#f43f5e55",
            grupo: "Grupo bajo presión",
            descripcion: "Fuerte influencia de normas sociales. Dificultad para cuestionar.",
            mensaje: "El grupo muestra dificultad para identificar estereotipos. Es importante trabajar el pensamiento crítico.",
        };
    } else {
        return {
            color: "#f59e0b", colorDark: "#b45309", glow: "#f59e0b55",
            grupo: "Grupo en proceso",
            descripcion: "Reconoce algunos estereotipos, pero no todos. A veces prioriza la aceptación social.",
            mensaje: "El grupo va en buen camino. Con más reflexión podrá identificar y cuestionar más estereotipos.",
        };
    }
}

function JuegoRealOImpuesto() {
    document.title = "Juego · Real o Impuesto";
    const navigate = useNavigate();

    const [paso, setPaso] = useState(0);
    const [respuestas, setRespuestas] = useState({});
    const [seleccionActual, setSeleccionActual] = useState(null);

    const historia = historias[paso];
    const totalHistorias = historias.length;
    const yaRespondio = respuestas[paso + 1] !== undefined;
    const semaforo = calcularSemaforo(respuestas);

    const handleSeleccionar = (id) => {
        if (yaRespondio) return;
        setSeleccionActual(id);
    };

    const handleSiguiente = () => {
        if (!seleccionActual && !yaRespondio) return;
        const nuevasRespuestas = { ...respuestas, [paso + 1]: seleccionActual || respuestas[paso + 1] };
        setRespuestas(nuevasRespuestas);
        setSeleccionActual(null);
        if (paso + 1 < totalHistorias) {
            setPaso(paso + 1);
        } else {
            setPaso(4);
        }
    };

    const handleReiniciar = () => {
        setPaso(0);
        setRespuestas({});
        setSeleccionActual(null);
    };

    return (
        <motion.main
            variants={fade} initial="initial" animate="animate" exit="exit"
            className="min-h-screen relative overflow-hidden text-white"
            style={{ fontFamily: "'Nunito', sans-serif" }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0020] via-[#130627] to-[#0B021A]" />
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

            <section className="relative max-w-5xl mx-auto px-6 pt-20 pb-24">

                <button
                    onClick={() => navigate("/ruta-docente/sexualidad/leccion2")}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-bold mb-8 transition-all"
                >
                    <ChevronLeft size={18} /> Volver a la Lección
                </button>

                <div className="flex items-center gap-4 mb-6 flex-wrap">
                    <div className="flex items-center gap-3 bg-orange-500/20 border border-orange-400/40 px-4 py-2 rounded-full">
                        <span className="text-orange-300 font-black text-xs uppercase tracking-widest">Recurso de Aprendizaje</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 900, fontStyle: "italic", color: "#f97316" }}>
                        "Real o Impuesto"
                    </h1>
                </div>

                {/* Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl px-6 py-3 mb-8 text-center font-bold text-sm md:text-base"
                    style={{ background: "linear-gradient(90deg, #7c3aed, #a855f7)", color: "#fff" }}
                >
                    Hoy analizaremos situaciones reales. ¿Lograrás identificar los estereotipos de género?
                </motion.div>

                <AnimatePresence mode="wait">

                    {/* Historias */}
                    {paso < 4 && (
                        <motion.div
                            key={`historia-${paso}`}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Progreso */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
                                    Historia {paso + 1} de {totalHistorias}
                                </span>
                                <div className="flex gap-2">
                                    {historias.map((_, i) => (
                                        <div key={i} className="h-2 rounded-full transition-all duration-300"
                                            style={{
                                                width: i === paso ? "24px" : "8px",
                                                background: i < paso ? "#22c55e" : i === paso ? "#f97316" : "rgba(255,255,255,0.15)",
                                            }} />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                                {/* Imagen */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
                                    className="rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-900/40"
                                >
                                    <img src={historia.imagen} alt={`Historia ${paso + 1}`} className="w-full h-auto object-cover" />
                                </motion.div>

                                {/* Opciones */}
                                <div className="flex flex-col gap-4">
                                    <div className="rounded-2xl p-5 border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
                                        <p className="text-xs text-purple-300 font-bold uppercase tracking-widest mb-2">Situación</p>
                                        <p className="text-white font-bold text-xl leading-snug">{historia.situacion}</p>
                                    </div>

                                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">¿Esto es...?</p>

                                    <div className="flex flex-col gap-3">
                                        {historia.opciones.map((opcion) => {
                                            const respuestaGuardada = respuestas[paso + 1];
                                            const estaSeleccionada = seleccionActual === opcion.id || respuestaGuardada === opcion.id;
                                            const esCorrecta = opcion.id === historia.correcta;

                                            return (
                                                <motion.button
                                                    key={opcion.id}
                                                    whileHover={!yaRespondio ? { scale: 1.02 } : {}}
                                                    whileTap={!yaRespondio ? { scale: 0.97 } : {}}
                                                    onClick={() => handleSeleccionar(opcion.id)}
                                                    disabled={yaRespondio}
                                                    className="flex items-center gap-4 px-5 py-4 rounded-2xl border-2 text-left transition-all duration-200 font-bold text-sm"
                                                    style={{
                                                        borderColor: estaSeleccionada
                                                            ? (yaRespondio ? (esCorrecta ? "#22c55e" : "#f43f5e") : "#f97316")
                                                            : "rgba(255,255,255,0.12)",
                                                        background: estaSeleccionada
                                                            ? (yaRespondio ? (esCorrecta ? "rgba(34,197,94,0.15)" : "rgba(244,63,94,0.15)") : "rgba(249,115,22,0.15)")
                                                            : "rgba(255,255,255,0.03)",
                                                        color: "#fff",
                                                        cursor: yaRespondio ? "default" : "pointer",
                                                        opacity: yaRespondio && !estaSeleccionada ? 0.4 : 1,
                                                    }}
                                                >
                                                    <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-black text-sm"
                                                        style={{
                                                            background: estaSeleccionada
                                                                ? (yaRespondio ? (esCorrecta ? "#22c55e" : "#f43f5e") : "#f97316")
                                                                : "rgba(255,255,255,0.1)",
                                                        }}>
                                                        {opcion.id}
                                                    </span>
                                                    {opcion.texto}
                                                </motion.button>
                                            );
                                        })}
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                        onClick={handleSiguiente}
                                        disabled={!seleccionActual && !yaRespondio}
                                        className="mt-2 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all"
                                        style={{
                                            background: (seleccionActual || yaRespondio) ? "linear-gradient(135deg, #f97316, #fbbf24)" : "rgba(255,255,255,0.06)",
                                            color: (seleccionActual || yaRespondio) ? "#1a0a00" : "rgba(255,255,255,0.3)",
                                            cursor: (seleccionActual || yaRespondio) ? "pointer" : "not-allowed",
                                            boxShadow: (seleccionActual || yaRespondio) ? "0 4px 20px rgba(249,115,22,0.35)" : "none",
                                        }}
                                    >
                                        {paso + 1 < totalHistorias ? "Siguiente historia" : "Ver resultado"}
                                        <ChevronRight size={18} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Resultado */}
                    {paso === 4 && (
                        <motion.div
                            key="resultado"
                            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <h2 className="text-3xl font-black text-white text-center">Resultado del Grupo</h2>

                            {/* Semáforo */}
                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                className="flex flex-col items-center gap-4 rounded-3xl px-12 py-10 border-2 text-center"
                                style={{ borderColor: semaforo.color + "66", background: semaforo.color + "11", boxShadow: `0 0 60px ${semaforo.glow}` }}
                            >
                                <div className="w-24 h-24 rounded-full"
                                    style={{ background: `radial-gradient(circle at 35% 35%, ${semaforo.color}, ${semaforo.colorDark})`, boxShadow: `0 0 40px ${semaforo.glow}` }} />
                                <h3 className="text-2xl font-black" style={{ color: semaforo.color }}>"{semaforo.grupo}"</h3>
                                <p className="text-white/80 font-bold text-lg">{semaforo.descripcion}</p>
                                <p className="text-white/65 text-sm max-w-md leading-relaxed">{semaforo.mensaje}</p>
                            </motion.div>

                            {/* 3 grupos */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                                {[
                                    { color: "#22c55e", colorDark: "#15803d", glow: "#22c55e55", grupo: "Grupo Auténtico", desc: "Reconoce que muchas ideas son construcciones sociales. Cuestiona estereotipos." },
                                    { color: "#f59e0b", colorDark: "#b45309", glow: "#f59e0b55", grupo: "Grupo en proceso", desc: "Reconoce algunos estereotipos, pero no todos. A veces prioriza la aceptación social." },
                                    { color: "#f43f5e", colorDark: "#be123c", glow: "#f43f5e55", grupo: "Grupo bajo presión", desc: "Fuerte influencia de normas sociales. Dificultad para cuestionar." },
                                ].map((g, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
                                        className="flex flex-col items-center gap-3 rounded-2xl p-6 border text-center"
                                        style={{ borderColor: g.grupo === semaforo.grupo ? g.color + "88" : "rgba(255,255,255,0.08)", background: g.grupo === semaforo.grupo ? g.color + "14" : "rgba(255,255,255,0.03)" }}
                                    >
                                        <div className="w-14 h-14 rounded-full"
                                            style={{ background: `radial-gradient(circle at 35% 35%, ${g.color}, ${g.colorDark})`, boxShadow: g.grupo === semaforo.grupo ? `0 0 24px ${g.glow}` : "none" }} />
                                        <p className="font-black text-white text-base">"{g.grupo}"</p>
                                        <p className="text-white/60 text-sm leading-snug">{g.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mensaje final */}
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                                className="rounded-2xl px-8 py-5 text-center border border-pink-500/30"
                                style={{ background: "rgba(244,63,94,0.06)" }}
                            >
                                <p className="text-pink-400 font-black text-sm uppercase tracking-widest mb-2">Y RECUERDEN</p>
                                <p className="text-pink-300 font-bold text-base md:text-lg leading-relaxed">
                                    "Aunque existen normas de conducta prediseñadas para lo femenino y lo masculino, cada uno debe reflexionar desde su individualidad"
                                </p>
                            </motion.div>

                            {/* Resumen */}
                            <div className="w-full rounded-2xl p-5 border border-white/08" style={{ background: "rgba(255,255,255,0.03)" }}>
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Resumen de respuestas</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {historias.map((h, i) => (
                                        <div key={i} className="flex flex-col gap-1 rounded-xl p-3 border border-white/08" style={{ background: "rgba(255,255,255,0.03)" }}>
                                            <span className="text-white/40 text-xs font-bold">Historia {i + 1}</span>
                                            <span className="text-white font-black text-sm">{h.situacion}</span>
                                            <span className="text-xs font-black px-2 py-0.5 rounded-full self-start"
                                                style={{
                                                    background: respuestas[i + 1] === h.correcta ? "#22c55e22" : "#f43f5e22",
                                                    color: respuestas[i + 1] === h.correcta ? "#22c55e" : "#f43f5e",
                                                    border: `1px solid ${respuestas[i + 1] === h.correcta ? "#22c55e44" : "#f43f5e44"}`,
                                                }}>
                                                Opción {respuestas[i + 1]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button onClick={handleReiniciar}
                                className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/20 text-white/60 hover:text-white hover:border-white/40 font-bold text-sm transition-all">
                                <RotateCcw size={16} /> Jugar de nuevo
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </motion.main>
    );
}

export default JuegoRealOImpuesto;
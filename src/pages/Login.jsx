import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { fade } from "../animations/pageAnimations";

import estudianteImg from "../assets/images/modules/oso_hormiguero_estudiante.png";
import docenteImg from "../assets/images/modules/oso_jucu_maestra.png";

function Login() {
    document.title = "Acceso • Ututuy | ¡Qué rikito es saber!";
    const navigate = useNavigate();

    return (
        <motion.div
            className="flex h-screen w-full flex-col md:flex-row"
            initial="initial" animate="animate" exit="exit" variants={fade}
            style={{ fontFamily: "'Nunito', sans-serif" }}
        >
            {/* ══════════════════════════════════════
                LADO ESTUDIANTE — izquierdo
            ══════════════════════════════════════ */}
            <motion.div
                className="relative flex flex-1 flex-col items-center justify-center overflow-hidden"
                style={{ background: "linear-gradient(160deg, #1a0a3b 0%, #2d1060 50%, #0d0020 100%)" }}
                whileHover={{ flex: 1.08 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Fondo hex */}
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
                        backgroundSize: "60px 104px",
                    }}
                />

                {/* Glow de fondo */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] opacity-30"
                    style={{ background: "radial-gradient(circle, #f9d423, #f97316)" }} />

                {/* Estrellas */}
                {[...Array(18)].map((_, i) => (
                    <div key={i} className="absolute rounded-full bg-white"
                        style={{
                            width: (Math.sin(i * 7) * 1 + 1.5) + "px",
                            height: (Math.sin(i * 7) * 1 + 1.5) + "px",
                            top: ((i * 43) % 100) + "%",
                            left: ((i * 61) % 100) + "%",
                            opacity: Math.cos(i * 3) * 0.3 + 0.2,
                        }}
                    />
                ))}

                <div className="relative z-10 flex flex-col items-center text-center px-8 gap-2">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
                        style={{ background: "rgba(249,212,35,0.12)", border: "1px solid rgba(249,212,35,0.35)", color: "#f9d423" }}
                    >
                        🎮 Zona Estudiante
                    </motion.div>

                    {/* Personaje estudiante */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: [0, -12, 0] }}
                        transition={{
                            opacity: { duration: 0.5, delay: 0.3 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                        }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full blur-xl"
                            style={{ background: "#f9d423" }}
                        />
                        <img
                            src={estudianteImg}
                            alt="Personaje Estudiante"
                            className="w-36 md:w-44 max-h-[45vh] h-auto object-contain drop-shadow-2xl relative z-10"
                        />
                    </motion.div>

                    {/* Título */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1,
                            textTransform: "uppercase",
                            letterSpacing: "-1px",
                            color: "#f9d423",
                            textShadow: "4px 4px 0px rgba(180,120,0,0.8), 0 0 40px rgba(249,212,35,0.4)",
                        }}>
                            ¡A JUGAR!
                        </h2>
                        <p className="text-white/80 font-bold text-lg md:text-xl mt-1">
                            Soy <span style={{ color: "#f9d423", fontWeight: 900 }}>Estudiante</span>
                        </p>
                    </motion.div>

                    {/* Botón */}
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 12px 0px #b47800, 0 0 40px rgba(249,212,35,0.5)" }}
                        whileTap={{ scale: 0.97, y: 4 }}
                        onClick={() => navigate("/home")}
                        style={{
                            background: "linear-gradient(135deg, #f9d423, #f97316)",
                            borderRadius: "999px",
                            padding: "1rem 3rem",
                            fontSize: "1.15rem",
                            fontWeight: 900,
                            color: "#0d0020",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 8px 0px #b47800, 0 0 20px rgba(249,212,35,0.3)",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                        }}
                    >
                        🎒 Ingresar Aquí
                    </motion.button>

                </div>

                {/* Divisor vertical */}
                <div className="hidden md:block absolute right-0 top-0 h-full w-1"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(249,212,35,0.3), transparent)" }} />
            </motion.div>

            {/* ── TÍTULO CENTRAL ── */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-px h-16 mb-3"
                        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))" }} />

                    <h1 style={{
                        fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "-1px",
                        background: "linear-gradient(135deg, #ffffff 0%, #e0d4ff 40%, #a78bfa 80%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 0 20px rgba(167,139,250,0.8))",
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                    }}>
                        ¡UTUTUY!
                    </h1>

                    <div className="w-px h-16 mt-3"
                        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }} />
                </motion.div>
            </div>

            {/* ══════════════════════════════════════
                LADO DOCENTE — derecho
            ══════════════════════════════════════ */}
            <motion.div
                className="relative flex flex-1 flex-col items-center justify-center overflow-hidden"
                style={{ background: "linear-gradient(160deg, #3b0764 0%, #7c3aed 50%, #1e0a3b 100%)" }}
                whileHover={{ flex: 1.08 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Fondo hex */}
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
                        backgroundSize: "60px 104px",
                    }}
                />

                {/* Glow de fondo */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] opacity-30"
                    style={{ background: "radial-gradient(circle, #a855f7, #7c3aed)" }} />

                {/* Estrellas */}
                {[...Array(18)].map((_, i) => (
                    <div key={i} className="absolute rounded-full bg-white"
                        style={{
                            width: (Math.cos(i * 5) * 1 + 1.5) + "px",
                            height: (Math.cos(i * 5) * 1 + 1.5) + "px",
                            top: ((i * 57) % 100) + "%",
                            left: ((i * 37) % 100) + "%",
                            opacity: Math.sin(i * 4) * 0.3 + 0.2,
                        }}
                    />
                ))}

                <div className="relative z-10 flex flex-col items-center text-center px-8 gap-4">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
                        style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#e0d4ff" }}
                    >
                        📚 Panel Docente
                    </motion.div>

                    {/* Personaje docente */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: [0, -12, 0] }}
                        transition={{
                            opacity: { duration: 0.5, delay: 0.35 },
                            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                        }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 3.5, repeat: Infinity }}
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full blur-xl"
                            style={{ background: "#a855f7" }}
                        />
                        <img
                            src={docenteImg}
                            alt="Personaje Docente"
                            className="w-64 md:w-80 h-auto object-contain drop-shadow-2xl relative z-10"
                        />
                    </motion.div>

                    {/* Título */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.45 }}
                    >
                        <h2 style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1,
                            textTransform: "uppercase",
                            letterSpacing: "-1px",
                            color: "#fff",
                            textShadow: "4px 4px 0px rgba(100,30,180,0.8), 0 0 40px rgba(168,85,247,0.5)",
                        }}>
                            PANEL
                        </h2>
                        <p className="text-white/80 font-bold text-lg md:text-xl mt-1">
                            Soy <span style={{ color: "#c084fc", fontWeight: 900 }}>Docente</span>
                        </p>
                    </motion.div>

                    {/* Botón */}
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 12px 0px #5b21b6, 0 0 40px rgba(168,85,247,0.5)" }}
                        whileTap={{ scale: 0.97, y: 4 }}
                        onClick={() => navigate("/home_docente")}
                        style={{
                            background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                            borderRadius: "999px",
                            padding: "1rem 3rem",
                            fontSize: "1.15rem",
                            fontWeight: 900,
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 8px 0px #5b21b6, 0 0 20px rgba(168,85,247,0.3)",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                        }}
                    >
                        🗺️ Acceso Docente
                    </motion.button>

                </div>
            </motion.div>

        </motion.div>
    );
}

export default Login;
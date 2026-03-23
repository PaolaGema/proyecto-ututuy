import { motion } from "framer-motion";
import { ChevronLeft, ShieldAlert, Eye, Heart } from "lucide-react";
import { useNavigate } from "react-router";

const pasos = [
    {
        id: 1,
        titulo: "Identificación de la Situación de Violencia",
        emoji: "🔍",
        color: "#f97316",
        colorDark: "#c2500a",
        glow: "#f9731655",
        icon: <Eye size={28} />,
        lado: "izquierda",
        items: [
            { bold: "Observación directa", texto: ", por la presencia de indicadores físicos, emocionales o conductuales." },
            { bold: "Relato espontáneo", texto: ", del estudiante o de terceros, en situación de flagrancia." },
            { bold: "Denuncia verbal o escrita", texto: " presentada por el estudiante, docente, personal administrativo, madre, padre, tutor o cualquier miembro de la comunidad educativa." },
        ]
    },
    {
        id: 2,
        titulo: "Puesta en Conocimiento",
        emoji: "📢",
        color: "#22c55e",
        colorDark: "#15803d",
        glow: "#22c55e55",
        icon: <ShieldAlert size={28} />,
        lado: "derecha",
        items: [
            { bold: "", texto: "La o el director/a de la unidad educativa debe recibir la información en absoluta confidencialidad y proceder a la remisión inmediata y formal, preferentemente por escrito, ante la Defensoría de la Niñez y Adolescencia (DNA) o el Ministerio Público." },
            { bold: "", texto: "Dentro de las acciones educativas que pueden implementarse de manera inmediata, sin requerir una determinación externa, se recomienda que cada Unidad Educativa cuente con un registro sistemático de casos, que sirva como respaldo documental, facilite la sistematización de la información y permita un monitoreo efectivo de las acciones implementadas." },
        ]
    },
    {
        id: 3,
        titulo: "Acompañamiento",
        emoji: "🤝",
        color: "#f43f5e",
        colorDark: "#be123c",
        glow: "#f43f5e55",
        icon: <Heart size={28} />,
        lado: "izquierda",
        items: [
            { bold: "Contención emocional", texto: " y seguimiento continuo al estudiante afectado." },
            { bold: "Coordinación", texto: " con las instancias competentes para garantizar su protección y bienestar integral." },
            { bold: "Monitoreo", texto: " efectivo de las acciones implementadas en cada caso." },
        ]
    },
];

// ← nombre cambiado a GaranteDerecho
function GaranteDerecho() {
    document.title = "Garante de Derecho | UTUTUY";
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(160deg, #0d0a1f 0%, #1a0a3b 40%, #0f1a3d 100%)",
            color: "#fff",
            fontFamily: "'Nunito', sans-serif",
            overflowX: "hidden",
            position: "relative",
        }}>

            {/* Partículas de fondo */}
            {[...Array(25)].map((_, i) => (
                <div key={i} style={{
                    position: "fixed",
                    width: (Math.sin(i * 9) * 1.5 + 2) + "px",
                    height: (Math.sin(i * 9) * 1.5 + 2) + "px",
                    borderRadius: "50%",
                    background: "#fff",
                    top: ((i * 41) % 100) + "%",
                    left: ((i * 67) % 100) + "%",
                    opacity: Math.cos(i * 3) * 0.2 + 0.15,
                    pointerEvents: "none",
                }} />
            ))}

            {/* Header ← texto cambiado */}
            <div style={{ padding: "20px 24px 0", display: "flex", alignItems: "center", gap: "12px" }}>
                <button
                    onClick={() => navigate("/home_docente")} // ← vuelve al home del docente
                    style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "50%", width: "42px", height: "42px",
                        color: "#fff", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                >
                    <ChevronLeft size={22} />
                </button>
                <div>
                    <p style={{ margin: 0, fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                        Panel Docente
                    </p>
                    <h1 style={{ margin: 0, fontSize: "1.3rem", fontWeight: 900, letterSpacing: "-0.5px" }}>
                        Garante de Derecho
                    </h1>
                </div>
            </div>

            {/* Banner naranja */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{
                    margin: "20px 24px 0",
                    background: "linear-gradient(90deg, #f97316, #f59e0b)",
                    borderRadius: "16px",
                    padding: "14px 24px",
                    textAlign: "center",
                    boxShadow: "0 4px 24px #f9731644",
                }}
            >
                <h2 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "1px" }}>
                    🛡️ Nuestro Rol como Garantes de Derecho
                </h2>
            </motion.div>

            {/* Subtítulo */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                    textAlign: "center", margin: "14px 24px 0",
                    fontSize: "0.95rem", fontWeight: 800,
                    color: "#fff", lineHeight: 1.4,
                }}
            >
                ¿Qué hacemos si nos damos cuenta de casos<br />de violencia sexual?
            </motion.p>

            {/* Camino con pasos */}
            <div style={{ position: "relative", padding: "20px 16px 80px", maxWidth: "720px", margin: "0 auto" }}>

                {/* SVG camino */}
                <svg
                    style={{
                        position: "absolute", top: 0, left: "50%",
                        transform: "translateX(-50%)",
                        width: "100%", height: "100%",
                        pointerEvents: "none", zIndex: 0,
                    }}
                    viewBox="0 0 600 900"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M 300 60 C 150 200, 450 350, 300 480 C 150 610, 450 730, 300 860"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="60"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 300 60 C 150 200, 450 350, 300 480 C 150 610, 450 730, 300 860"
                        fill="none"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="14 11"
                    />
                </svg>

                {/* Pasos */}
                <div style={{
                    display: "flex", flexDirection: "column",
                    gap: "4rem", position: "relative", zIndex: 2, paddingTop: "10px"
                }}>
                    {pasos.map((paso, index) => {
                        const isRight = paso.lado === "derecha";
                        return (
                            <motion.div
                                key={paso.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
                                style={{
                                    display: "flex",
                                    flexDirection: isRight ? "row-reverse" : "row",
                                    alignItems: "flex-start",
                                    gap: "14px",
                                }}
                            >
                                {/* Nodo */}
                                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                                    <div style={{
                                        width: "80px", height: "80px",
                                        borderRadius: "50%",
                                        background: `linear-gradient(135deg, ${paso.color}, ${paso.colorDark})`,
                                        border: "4px solid rgba(255,255,255,0.25)",
                                        boxShadow: `0 6px 0 ${paso.colorDark}, 0 0 24px ${paso.glow}`,
                                        display: "flex", flexDirection: "column",
                                        alignItems: "center", justifyContent: "center",
                                        gap: "1px", position: "relative",
                                    }}>
                                        <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                                            {paso.id}
                                        </span>
                                        <span style={{ fontSize: "1rem" }}>{paso.emoji}</span>
                                        <motion.div
                                            animate={{ scale: [1, 1.55, 1], opacity: [0.45, 0, 0.45] }}
                                            transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.5 }}
                                            style={{
                                                position: "absolute", inset: "-7px",
                                                borderRadius: "50%",
                                                border: `3px solid ${paso.color}`,
                                                pointerEvents: "none",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Tarjeta */}
                                <div style={{
                                    flex: 1,
                                    background: `${paso.color}0d`,
                                    border: `1px solid ${paso.color}33`,
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                }}>
                                    <div style={{
                                        background: `${paso.color}28`,
                                        borderBottom: `1px solid ${paso.color}33`,
                                        padding: "9px 14px",
                                        display: "flex", alignItems: "center", gap: "8px",
                                    }}>
                                        {paso.icon}
                                        <span style={{
                                            fontWeight: 900, color: paso.color,
                                            fontSize: "0.78rem", textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                        }}>
                                            {paso.titulo}
                                        </span>
                                    </div>
                                    <div style={{ padding: "10px 14px", display: "flex", flexDirection: "column", gap: "7px" }}>
                                        {paso.items.map((item, i) => (
                                            <div key={i} style={{
                                                background: "rgba(255,255,255,0.03)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                borderRadius: "9px",
                                                padding: "8px 12px",
                                                color: "rgba(255,255,255,0.88)",
                                                fontSize: "0.8rem",
                                                lineHeight: "1.55",
                                            }}>
                                                {item.bold && <strong style={{ color: "#fff" }}>{item.bold}</strong>}
                                                {item.texto}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default GaranteDerecho;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ShieldAlert, BookOpen, Users, Star, X } from "lucide-react";
import { useNavigate } from "react-router";

const S = {
    root: {
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0d0a1f 0%, #1a0a3b 40%, #0f1a3d 100%)",
        color: "#fff",
        padding: "2rem",
        fontFamily: "'Nunito', sans-serif",
    },
    pathContainer: {
        maxWidth: "400px",
        margin: "3rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        position: "relative"
    },
    node: (color) => ({
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "6px solid rgba(255,255,255,0.2)",
        boxShadow: `0 8px 0 rgba(0,0,0,0.2), 0 0 20px ${color}55`,
        cursor: "pointer",
        position: "relative",
        zIndex: 2
    }),
    modalOverlay: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: "20px"
    }
};

const niveles = [
    { id: 1, titulo: "Rol como Garantes", color: "#f97316", icon: <ShieldAlert size={35} /> },
    { id: 2, titulo: "Sexo vs Género", color: "#3b82f6", icon: <BookOpen size={35} /> },
    { id: 3, titulo: "Dinámica Grupal", color: "#a855f7", icon: <Users size={35} /> },
];

function RutaDocente() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <div style={S.root}>
            <button onClick={() => navigate(-1)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
                <ChevronLeft size={30} />
            </button>
            <h1 style={{ textAlign: "center", fontWeight: 900 }}>RUTA METODOLÓGICA</h1>

            <div style={S.pathContainer}>
                {niveles.map((nivel, index) => (
                    <div key={nivel.id} style={{ alignSelf: index % 2 === 0 ? "flex-start" : "flex-end" }}>
                        <motion.div 
                            whileHover={{ scale: 1.1 }} 
                            style={S.node(nivel.color)}
                            onClick={() => setOpen(true)}
                        >
                            {nivel.icon}
                            <span style={{ position: "absolute", top: "110%", width: "150px", textAlign: "center", fontSize: "0.8rem" }}>
                                {nivel.titulo}
                            </span>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* MODAL SIMPLE PARA VER LA DIAPOSITIVA */}
            {open && (
                <div style={S.modalOverlay} onClick={() => setOpen(false)}>
                    <div style={{ position: "relative", maxWidth: "90%" }}>
                        <button style={{ position: "absolute", top: "-40px", right: "0", color: "#fff", background: "none", border: "none" }}>
                            <X size={30} />
                        </button>
                        <div style={{ background: "#fff", padding: "10px", borderRadius: "10px", color: "#333", textAlign: "center" }}>
                            <h3>Visualización de Material</h3>
                            <p>Aquí se cargará la diapositiva seleccionada.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RutaDocente;
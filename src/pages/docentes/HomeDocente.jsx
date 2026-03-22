import { AnimatePresence, motion } from "framer-motion";
import {
    BookOpen,
    ShieldCheck,
    FileText,
    LogOut,
    Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { HiOutlinePlay } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router";

// ─── ANIMACIONES ───
import { fade } from "../../animations/pageAnimations";
import LettersPullUpAnimation from "../../animations/components/LettersPullUpAnimation";

// ─── ASSETS ───
import logoIpas from "../../assets/images/historietas/logo_ipas.png";

const S = {
    root: {
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0d0a1f 0%, #1a0a3b 40%, #0f1a3d 100%)",
        fontFamily: "'Nunito', 'Segoe UI', sans-serif",
        color: "#fff",
        overflowX: "hidden",
    },
    hero: {
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        textAlign: "center",
    },
    heroBg: {
        position: "absolute",
        inset: 0,
        backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120,60,255,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(60,30,180,0.15) 0%, transparent 70%)
        `,
        pointerEvents: "none",
    },
    nav: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 1.75rem",
        zIndex: 10,
    },
    navLogo: {
        fontWeight: 900,
        fontSize: "1.1rem",
        letterSpacing: "0.12em",
        color: "#e0d4ff",
        textTransform: "uppercase",
        textShadow: "0 0 20px rgba(167,139,250,0.6)",
    },
    logoutBtn: {
        padding: "0.5rem 1.2rem",
        borderRadius: "999px",
        border: "1px solid rgba(255,100,100,0.3)",
        color: "#ff8a8a",
        fontSize: "0.85rem",
        textDecoration: "none",
        background: "rgba(255,0,0,0.05)",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
    },
    badge: {
        display: "inline-block",
        background: "rgba(167,139,250,0.15)",
        border: "1px solid rgba(167,139,250,0.4)",
        borderRadius: "999px",
        padding: "0.3rem 1rem",
        fontSize: "0.78rem",
        color: "#c4b5fd",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "1rem",
    },
    heroTitle: {
        fontWeight: 900,
        fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
        lineHeight: 1.1,
        textTransform: "uppercase",
        marginBottom: "1rem",
        background: "linear-gradient(135deg, #ffffff 0%, #e0d4ff 40%, #a78bfa 80%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    ctaPrimary: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
        color: "#fff",
        fontWeight: 900,
        fontSize: "1.1rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        border: "none",
        borderRadius: "999px",
        padding: "1rem 2.5rem",
        cursor: "pointer",
        boxShadow: "0 6px 30px rgba(124,58,237,0.4)",
        transition: "all 0.2s",
    },
    sectionTitle: {
        fontWeight: 900,
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
        marginBottom: "2rem",
        textAlign: "center"
    },
    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 1.5rem 5rem"
    },
    featureCard: {
        background: "rgba(255, 255, 255, 0.03)",
        borderRadius: "24px",
        padding: "2rem",
        border: "1px solid rgba(167,139,250,0.1)",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    }
};

function HomeDocente() {
    document.title = "Portal Docente | UTUTUY";
    const navigate = useNavigate();

    // Al hacer clic, redirigimos a la ventana de materiales/recursos
    const handleStart = () => {
    navigate("/ruta-docente");
};

    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={fade} style={S.root}>
            
            {/* HERO SECTION */}
            <section style={S.hero}>
                <div style={S.heroBg} />
                
                <nav style={S.nav}>
                    <span style={S.navLogo}>⚡ GUARDIANAS</span>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        style={S.logoutBtn}
                        onClick={() => navigate("/login")}
                    >
                        <LogOut size={16} /> Salir
                    </motion.button>
                </nav>

                <div style={{ position: "relative", zIndex: 2, maxWidth: "850px" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div style={S.badge}>Panel de Control del Educador</div>
                    </motion.div>

                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <LettersPullUpAnimation text="TU ROL COMO GARANTE" />
                    </div>

                    <motion.p style={{ color: "#b8a4e8", fontSize: "1.2rem", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto 2.5rem" }}>
                        Gestiona materiales didácticos sobre derechos sexuales y reproductivos para acompañar a tus estudiantes.
                    </motion.p>

                    <motion.button 
                        style={S.ctaPrimary} 
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(124,58,237,0.6)" }} 
                        whileTap={{ scale: 0.95 }} 
                        onClick={handleStart}
                    >
                        <BookOpen size={22} /> EXPLORAR MATERIALES
                    </motion.button>
                </div>
            </section>

            {/* FEATURES / MATERIAL PREVIEW SECTION */}
            <section style={{ padding: "5rem 0" }}>
                <h2 style={S.sectionTitle}>¿Qué encontrarás aquí?</h2>
                <div style={S.cardGrid}>
                    <motion.div style={S.featureCard} whileHover={{ y: -5, background: "rgba(255,255,255,0.06)" }}>
                        <ShieldCheck className="text-purple-400" size={40} />
                        <h3 className="text-xl font-bold">Rutas de Atención</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Protocolos claros sobre qué hacer ante casos de violencia detectados en el aula.</p>
                    </motion.div>

                    <motion.div style={S.featureCard} whileHover={{ y: -5, background: "rgba(255,255,255,0.06)" }}>
                        <FileText className="text-blue-400" size={40} />
                        <h3 className="text-xl font-bold">Conceptos Clave</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Infografías sobre Sexo vs Género y Derechos Reproductivos basadas en la OMS.</p>
                    </motion.div>

                    <motion.div style={S.featureCard} whileHover={{ y: -5, background: "rgba(255,255,255,0.06)" }}>
                        <Users className="text-orange-400" size={40} />
                        <h3 className="text-xl font-bold">Guía de Dinámicas</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Instrucciones para aplicar los juegos de toma de decisiones con tus grupos.</p>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER (Similar al que te gusta) */}
            <footer style={{ background: "linear-gradient(135deg, #7c3aed, #4c1d95)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ ...S.footer, background: "transparent", display: "flex", justifyContent: "space-between", padding: "3rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
                    <div>
                        <div style={{ background: "#fff", padding: "8px", width: "70px", height: "70px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={logoIpas} alt="IPAS Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                    </div>
                    <div className="text-right">
                        <p style={{ fontSize: "0.8rem", color: "#fff", fontWeight: "bold", marginBottom: "0.75rem" }}>Recursos para Docentes</p>
                        <p style={{ color: "#e0d4ff", fontSize: "0.85rem" }}>Guía Metodológica 2026</p>
                        <p style={{ color: "#e0d4ff", fontSize: "0.85rem" }}>Soporte Técnico</p>
                    </div>
                </div>
                <p style={{ textAlign: "center", color: "#c4b5fd", fontSize: "0.78rem", paddingBottom: "1.5rem", margin: 0 }}>
                    © {new Date().getFullYear()} Guardianas del poder Warmi! - Panel Administrativo
                </p>
            </footer>

        </motion.div>
    );
}

export default HomeDocente;
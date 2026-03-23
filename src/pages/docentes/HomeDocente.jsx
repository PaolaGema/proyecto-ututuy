import { motion } from "framer-motion";
import {
    BookOpen,
    ShieldCheck,
    FileText,
    LogOut,
    Users,
    Shield,
} from "lucide-react";
import { useNavigate } from "react-router";
import { HiOutlinePlay } from "react-icons/hi2";

import { fade } from "../../animations/pageAnimations";
import LettersPullUpAnimation from "../../animations/components/LettersPullUpAnimation";
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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        textAlign: "center",
        overflow: "hidden",
    },
    heroBg: {
        position: "absolute",
        inset: 0,
        backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120,60,255,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(60,30,180,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 60%, rgba(255,140,0,0.08) 0%, transparent 70%)
        `,
        pointerEvents: "none",
    },
    stars: {
        position: "absolute",
        inset: 0,
        backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 20%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 88% 35%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 85%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 90%, rgba(255,255,255,0.3) 0%, transparent 100%)
        `,
        pointerEvents: "none",
    },
    hexOverlay: {
        position: "absolute",
        inset: 0,
        opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%23a78bfa' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 104px",
        pointerEvents: "none",
    },
    nav: {
        position: "absolute",
        top: 0, left: 0, right: 0,
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
        background: "rgba(255,0,0,0.05)",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "pointer",
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
        fontSize: "clamp(3rem, 10vw, 6.5rem)",
        lineHeight: 1,
        letterSpacing: "-0.01em",
        textTransform: "uppercase",
        marginBottom: "0.5rem",
        background: "linear-gradient(135deg, #ffffff 0%, #e0d4ff 40%, #a78bfa 80%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter: "drop-shadow(0 0 30px rgba(167,139,250,0.5))",
    },
    heroTagline: {
        display: "inline-block",
        background: "linear-gradient(90deg, #7c3aed, #6d28d9)",
        borderRadius: "999px",
        padding: "0.4rem 1.5rem",
        fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
        fontWeight: 700,
        color: "#fff",
        marginBottom: "2.5rem",
        boxShadow: "0 4px 24px rgba(124,58,237,0.5)",
    },
    ctaPrimary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.8rem",
        background: "linear-gradient(135deg, #f59e0b, #d97706)",
        color: "#1a0a00",
        fontWeight: 900,
        fontSize: "1.1rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        border: "none",
        borderRadius: "999px",
        padding: "1.2rem 3rem",
        cursor: "pointer",
        boxShadow: "0 6px 30px rgba(245,158,11,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
        width: "100%",
        maxWidth: "400px",
    },
    ctaSecondary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.8rem",
        background: "rgba(255,255,255,0.05)",
        color: "#e0d4ff",
        fontWeight: 700,
        fontSize: "1rem",
        border: "1px solid rgba(167,139,250,0.3)",
        borderRadius: "999px",
        padding: "1rem 2.5rem",
        cursor: "pointer",
        width: "100%",
        maxWidth: "400px",
        backdropFilter: "blur(10px)",
    },
    quizSection: {
        background: "linear-gradient(135deg, #1e0a4a 0%, #2d1a6e 100%)",
        padding: "5rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
    },
    quizCircle: {
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 70%)",
        left: "-150px",
        bottom: "-150px",
        pointerEvents: "none",
    },
    ctaSecondaryQuiz: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "linear-gradient(135deg, #f59e0b, #d97706)",
        color: "#1a0a00",
        fontWeight: 800,
        fontSize: "1rem",
        letterSpacing: "0.05em",
        border: "none",
        borderRadius: "999px",
        padding: "0.85rem 2.2rem",
        cursor: "pointer",
        boxShadow: "0 4px 24px rgba(245,158,11,0.4)",
        marginTop: "1.75rem",
    },
    sectionTitle: {
        fontWeight: 900,
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
        marginBottom: "3rem",
        textAlign: "center",
    },
    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 1.5rem 5rem",
    },
    featureCard: {
        background: "rgba(255,255,255,0.03)",
        borderRadius: "24px",
        padding: "2rem",
        border: "1px solid rgba(167,139,250,0.1)",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
};

function HomeDocente() {
    document.title = "Portal Docente | UTUTUY";
    const navigate = useNavigate();

    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={fade} style={S.root}>

            {/* ── HERO — idéntico al estudiante ── */}
            <section style={S.hero}>
                <div style={S.heroBg} />
                <div style={S.stars} />
                <div style={S.hexOverlay} />

                {/* Nav */}
                <nav style={S.nav}>
                    <span style={S.navLogo}>⚡ GPW</span>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        style={S.logoutBtn}
                        onClick={() => navigate("/login")}
                    >
                        <LogOut size={16} /> Salir
                    </motion.button>
                </nav>

                <div style={{ position: "relative", zIndex: 2, maxWidth: "720px", width: "100%" }}>

                    {/* Badge */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div style={S.badge}>Panel de Control del Educador</div>
                    </motion.div>

                    {/* Título ¡UTUTUY! — igual al del estudiante */}
                    <motion.h1 style={S.heroTitle}>
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <LettersPullUpAnimation text="¡UTUTUY!" />
                        </div>
                    </motion.h1>

                    {/* Tagline — igual al del estudiante */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <p style={S.heroTagline}>¡Panel del Educador!</p>
                    </motion.div>

                    {/* Descripción */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        style={{ color: "#b8a4e8", fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.65 }}
                    >
                        Accede a los materiales didácticos y conoce tu rol como garante de derechos para proteger a tus estudiantes.
                    </motion.p>

                    {/* Botones */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                        <motion.button
                            style={S.ctaPrimary}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(245,158,11,0.6)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate("/ruta-docente")}
                        >
                            <BookOpen size={22} /> EXPLORAR MATERIALES
                        </motion.button>

                       
                    </div>
                </div>
            </section>

            {/* ── SECCIÓN QUIZ — igual estructura al estudiante pero con contenido docente ── */}
            <section style={S.quizSection}>
                <div style={S.quizCircle} />
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ position: "relative", zIndex: 1, maxWidth: "540px" }}
                >
                    <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>
                        ¿Qué hacemos si nos damos cuenta de casos de violencia sexual?
                    </h2>

                    <p style={{ color: "#b8a4e8", fontSize: "0.95rem" }}>
                        Conoce el protocolo de actuación como garante de derechos
                    </p>

                    <motion.button
                        style={S.ctaSecondaryQuiz}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => navigate("/garante_derecho")}
                    >
                        <HiOutlinePlay />
                        ¡Ver protocolo!
                    </motion.button>
                </motion.div>
            </section>

            {/* ── TARJETAS DE RECURSOS ── */}
            <section style={{ padding: "5rem 0", background: "rgba(0,0,0,0.2)" }}>
                <h2 style={S.sectionTitle}>Recursos Disponibles</h2>
                <div style={S.cardGrid}>

                    <motion.div style={S.featureCard} whileHover={{ y: -8, borderColor: "rgba(167,139,250,0.4)" }}>
                        <ShieldCheck color="#a78bfa" size={40} />
                        <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 900 }}>Rutas de Atención</h3>
                        <p style={{ margin: 0, color: "#9c85d0", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            Protocolos claros sobre qué hacer ante casos de violencia detectados en el aula.
                        </p>
                    </motion.div>

                    <motion.div style={S.featureCard} whileHover={{ y: -8, borderColor: "rgba(167,139,250,0.4)" }}>
                        <FileText color="#60a5fa" size={40} />
                        <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 900 }}>Conceptos Clave</h3>
                        <p style={{ margin: 0, color: "#9c85d0", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            Infografías sobre Sexo vs Género y Derechos Reproductivos actualizadas.
                        </p>
                    </motion.div>

                    <motion.div style={S.featureCard} whileHover={{ y: -8, borderColor: "rgba(167,139,250,0.4)" }}>
                        <Users color="#fb923c" size={40} />
                        <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 900 }}>Guía de Dinámicas</h3>
                        <p style={{ margin: 0, color: "#9c85d0", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            Instrucciones para aplicar los juegos de toma de decisiones con tus estudiantes.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* ── FOOTER — igual al del estudiante ── */}
            <footer style={{ background: "linear-gradient(135deg, #f59e0b, #e66e0d)", borderTop: "1px solid rgba(255,255,255,0.2)", marginTop: "auto" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "2rem",
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "3rem 2rem",
                    background: "transparent",
                }}>
                    <div>
                        <div style={{ background: "#fff", padding: "8px", width: "70px", height: "70px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={logoIpas} alt="IPAS Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: "0.8rem", color: "#fff", fontWeight: "bold", marginBottom: "0.75rem" }}>Plataforma</p>
                        {["Acerca de", "Materiales", "Contacto"].map(l => (
                            <a key={l} href="#" style={{ display: "block", color: "#fff3e0", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none" }}>{l}</a>
                        ))}
                    </div>
                </div>
                <p style={{ textAlign: "center", color: "#fff3e0", fontSize: "0.78rem", paddingBottom: "1.5rem", margin: 0 }}>
                    © {new Date().getFullYear()} Guardianas del poder Warmi!
                </p>
            </footer>

        </motion.div>
    );
}

export default HomeDocente;
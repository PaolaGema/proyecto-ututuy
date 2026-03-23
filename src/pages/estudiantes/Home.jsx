import { AnimatePresence, motion } from "framer-motion";
import {
    LogOut,
    MoonIcon,
    SunIcon,
    UserRoundPen,
} from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { HiOutlinePlay, HiStar } from "react-icons/hi2";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link, useLocation, useNavigate } from "react-router";

// ─── ANIMACIONES (Subimos 2 niveles) ───
import { fade, dropdownVariants } from "../../animations/pageAnimations";
import LettersPullUpAnimation from "../../animations/components/LettersPullUpAnimation";
import ContainerFadeAnimation from "../../animations/components/ContainerFadeAnimation";
import CounterAnimation from "../../animations/components/CounterAnimation";

// ─── SERVICIOS Y HOOKS (Subimos 2 niveles) ───
import { logoutUser } from "../../services/authService";
import { getUser } from "../../services/userService";
import { isTokenExpiringSoon } from "../../utils/authUtils";
import { getLocalUserInfo } from "../../utils/userUtils";
import { useTheme } from "../../hooks/useTheme";

// ─── ASSETS (Subimos 2 niveles) ───
import switchSound from "../../assets/sounds/switch.mp3";
import logoIpas from "../../assets/images/historietas/logo_ipas.png";

import { Howl, Howler } from "howler";
import Cookies from "js-cookie";

/* ─── ESTILOS INLINE (S) ─── */
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
    loginBtn: {
        padding: "0.5rem 1.2rem",
        borderRadius: "999px",
        border: "1px solid rgba(167,139,250,0.5)",
        color: "#e0d4ff",
        fontSize: "0.85rem",
        textDecoration: "none",
        background: "rgba(167,139,250,0.1)",
        fontWeight: "600",
        transition: "all 0.3s ease",
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
        gap: "0.6rem",
        background: "linear-gradient(135deg, #f59e0b, #d97706)",
        color: "#1a0a00",
        fontWeight: 900,
        fontSize: "1.1rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        border: "none",
        borderRadius: "999px",
        padding: "1rem 2.5rem",
        cursor: "pointer",
        boxShadow: "0 6px 30px rgba(245,158,11,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
        transition: "transform 0.2s, box-shadow 0.2s",
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
    ctaSecondary: {
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
        textDecoration: "none",
    },
    audienceSection: {
        padding: "5rem 1.5rem",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
    },
    photoGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "0.75rem",
    },
    photoCard: {
        borderRadius: "16px",
        overflow: "hidden",
        aspectRatio: "1",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(167,139,250,0.15)",
    },
    footer: {
        background: "#050210",
        padding: "3rem 2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "2rem",
        maxWidth: "1100px",
        margin: "0 auto",
    },
};

function Home() {
    document.title = "UTUTUY";
    const navigate = useNavigate();
    const location = useLocation();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.visualViewport?.width || window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

   const handlePlay = (target = "/play") => {
    if (Howler.ctx && Howler.ctx.state === "suspended") Howler.ctx.resume();
    navigate(target);
};

    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={fade} style={S.root}>
            {/* HERO SECTION */}
            <section style={S.hero}>
                <div style={S.heroBg} />
                <div style={S.stars} />
                <div style={S.hexOverlay} />

                <nav style={S.nav}>
                    <span style={S.navLogo}>⚡ GPW</span>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/login" style={S.loginBtn}>Salir</Link>
                    </motion.div>
                </nav>

                <div style={{ position: "relative", zIndex: 2, maxWidth: "720px" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div style={S.badge}>Descubramos juntos</div>
                    </motion.div>

                    <motion.h1 style={S.heroTitle} className="text-center w-full">
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <LettersPullUpAnimation text="¡UTUTUY!" />
                        </div>
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.25 }}>
                        <p style={S.heroTagline}>¡Qué rikito es saber...!</p>
                    </motion.div>

                    <motion.p style={{ color: "#b8a4e8", fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.65 }}>
                        ¡Aprende a tomar decisiones para cuidar tu cuerpo y tus relaciones!.
                    </motion.p>

                    <motion.button 
                        style={S.ctaPrimary} 
                        whileHover={{ scale: 1.05 }} 
                        onClick={() => handlePlay("/play")} // <-- Cambiado a función de flecha
                    >
                        <HiOutlinePlay /> EMPEZAR AHORA
                    </motion.button>
                </div>
            </section>

            {/* QUIZ SECTION */}
            <section style={S.quizSection}>
                <div style={S.quizCircle} />
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: "relative", zIndex: 1, maxWidth: "540px" }}>

                    <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>¿Te gustaría saber cuánto conoces de tu sexualidad?</h2>

                    <p style={{ color: "#b8a4e8", fontSize: "0.95rem" }}>Sobre tu forma de relacionarte y tus decisiones</p>

                   
                <motion.button 
                    style={S.ctaSecondary} 
                    whileHover={{ scale: 1.04 }} 
                    whileTap={{ scale: 0.97 }} 
                    onClick={() => handlePlay("/quiz-diagnostico")}
                >
                    <HiOutlinePlay />
                    ¡Hacer test!
                </motion.button>
                </motion.div>
            </section>


            

            {/* AUDIENCE SECTION */}
            <section style={S.audienceSection}>
                <h2 style={{ fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", marginBottom: "0.5rem" }}>¡Dirigido a chicos y chicas como tú!</h2>
                <p style={{ color: "#9c85d0", marginBottom: "2.5rem" }}>Entre 13 y 15 años</p>
                <div style={S.photoGrid}>
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div key={i} style={S.photoCard} whileHover={{ scale: 1.03 }}>
                            <div style={{ width: "100%", height: "100%", minHeight: "160px", background: `linear-gradient(135deg, hsl(${260 + i * 20},50%,25%) 0%, hsl(${240 + i * 15},40%,18%) 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                                {["🧒", "👧", "👦", "🧒‍♀️"][i - 1]}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{ background: "linear-gradient(135deg, #f59e0b, #e66e0d)", borderTop: "1px solid rgba(255,255,255,0.2)", marginTop: "auto" }}>
                <div style={{ ...S.footer, background: "transparent" }}>
                    <div>
                        <div style={{ background: "#fff", padding: "8px", width: "70px", height: "70px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={logoIpas} alt="IPAS Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: "0.8rem", color: "#fff", fontWeight: "bold", marginBottom: "0.75rem" }}>Plataforma</p>
                        <Link to="/login" style={{ display: "block", color: "#fff3e0", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none", fontWeight: "500" }}>
                            Acceso Docente
                        </Link>
                        {["Acerca de", "Respuestas", "Contacto"].map(l => (
                            <a key={l} href="#" style={{ display: "block", color: "#fff3e0", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none" }}>{l}</a>
                        ))}
                    </div>
                </div>
                <p style={{ textAlign: "center", color: "#fff3e0", fontSize: "0.78rem", paddingBottom: "1.5rem", margin: 0 }}>
                    © {new Date().getFullYear()} Guardianas del poder Warmi!
                </p>
            </footer>

            {location.state?.newUser && (
                <Confetti width={windowWidth} height={windowHeight} recycle={false} numberOfPieces={280} style={{ zIndex: 50 }} />
            )}
        </motion.div>
    );
}

export default Home;
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
import { fade } from "../animations/pageAnimations";
import LettersPullUpAnimation from "../animations/components/LettersPullUpAnimation";
import ContainerFadeAnimation from "../animations/components/ContainerFadeAnimation";
import CounterAnimation from "../animations/components/CounterAnimation";
import { logoutUser } from "../services/authService";
import { getUser } from "../services/userService";
import { isTokenExpiringSoon } from "../utils/authUtils";
import { getLocalUserInfo } from "../utils/userUtils";
import { Howl, Howler } from "howler";
import Cookies from "js-cookie";
import { useTheme } from "../hooks/useTheme";
import { dropdownVariants } from "../animations/pageAnimations";
import switchSound from "../assets/sounds/switch.mp3";
import logoIpas from "../assets/images/historietas/logo_ipas.png";

/* ─── inline styles (no deps on Tailwind extended palette) ─── */
const S = {
  root: {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #0d0a1f 0%, #1a0a3b 40%, #0f1a3d 100%)",
    fontFamily: "'Nunito', 'Segoe UI', sans-serif",
    color: "#fff",
    overflowX: "hidden",
  },
  /* ── HERO ── */
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
  /* grid hex pattern overlay */
  hexOverlay: {
    position: "absolute",
    inset: 0,
    opacity: 0.04,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%23a78bfa' stroke-width='1'/%3E%3C/svg%3E")`,
    backgroundSize: "60px 104px",
    pointerEvents: "none",
  },
  /* nav */
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
  navActions: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  navBtn: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(167,139,250,0.25)",
    borderRadius: "10px",
    color: "#c4b5fd",
    padding: "0.45rem 0.65rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    fontSize: "0.8rem",
    transition: "all 0.2s",
  },
  /* badge */
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
  /* main title */
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
  /* CTA */
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
  /* score chip */
  scoreChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "999px",
    padding: "0.4rem 1rem",
    fontSize: "0.85rem",
    color: "#d4bbff",
    marginTop: "2rem",
  },
  /* ── SECTION 2 (quiz callout) ── */
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
  quizTitle: {
    fontWeight: 900,
    fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
    marginBottom: "0.75rem",
    color: "#fff",
    maxWidth: "520px",
  },
  quizSub: {
    color: "#b8a4e8",
    fontSize: "0.95rem",
    marginBottom: "0.3rem",
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
  /* ── SECTION 3 (audience) ── */
  audienceSection: {
    padding: "5rem 1.5rem",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  audienceTitle: {
    fontWeight: 900,
    fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
    color: "#fff",
    marginBottom: "0.5rem",
  },
  audienceSub: {
    color: "#9c85d0",
    fontSize: "0.95rem",
    marginBottom: "2.5rem",
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
  photoImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.85,
  },
  /* ── FOOTER ── */
  footer: {
    background: "#050210",
    padding: "3rem 2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "2rem",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  footerLogo: {
    fontWeight: 900,
    fontSize: "1.4rem",
    color: "#fff",
    border: "2px solid #fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "44px",
    borderRadius: "6px",
    letterSpacing: "0.05em",
  },
  footerHeading: {
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#6b5fa0",
    marginBottom: "0.75rem",
    fontWeight: 700,
  },
  footerLink: {
    display: "block",
    color: "#9c85d0",
    fontSize: "0.85rem",
    marginBottom: "0.4rem",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  footerInput: {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(167,139,250,0.3)",
    borderRadius: "8px",
    padding: "0.55rem 0.85rem",
    color: "#d4bbff",
    fontSize: "0.82rem",
    outline: "none",
  },
};

function Home() {
  document.title = "UTUTUY";

  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const { theme, toggleTheme } = useTheme();
  const [mobileDropDown, setMobileDropDown] = useState(false);

  const switchSoundEffect = new Howl({ src: switchSound, volume: 0.8 });
  const handleToggleTheme = () => { toggleTheme(); switchSoundEffect.play(); };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token || isTokenExpiringSoon(token)) {
      Cookies.remove("token");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const info = getLocalUserInfo();
    setUserInfo(info);
    const lastCall = localStorage.getItem("lastGetUserCall");
    const now = Date.now();
    if (!lastCall || now - parseInt(lastCall) > 10 * 60 * 1000) {
      getUser(info.id).then(() => {
        localStorage.setItem("lastGetUserCall", now.toString());
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.visualViewport?.width || window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePlay = () => {
    if (Howler.ctx && Howler.ctx.state === "suspended") Howler.ctx.resume();
    navigate("/play");
  };

  return (
    <motion.div
      initial="initial" animate="animate" exit="exit" variants={fade}
      style={S.root}
    >
      {/* ════════ HERO ════════ */}
      <section style={S.hero}>
        <div style={S.heroBg} />
        <div style={S.stars} />
        <div style={S.hexOverlay} />

        {/* NAV */}
        <nav style={S.nav}>
          <span style={S.navLogo}>⚡ GPW</span>
          {/* <div style={S.navActions}>
            <Link to="/edit-profile" style={S.navBtn}>
              <UserRoundPen size={15} /> Perfil
            </Link>
            <button style={S.navBtn} onClick={handleToggleTheme}>
              {theme === "light" ? <MoonIcon size={15} /> : <SunIcon size={15} />}
            </button>
            <button style={{ ...S.navBtn, color: "#fca5a5" }} onClick={logoutUser}>
              <LogOut size={15} />
            </button>
          </div> */}
        </nav>

        {/* CONTENT */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "720px" }}>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div style={S.badge}>Descubramos juntos</div>
  </motion.div>

  <motion.h1
    style={S.heroTitle}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="text-center w-full"
  >
    {userInfo.name ? (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <LettersPullUpAnimation text="¡UTUTUY!" />
      </div>
    ) : (
      "¡Tabla de Glécio!"
    )}
  </motion.h1>

  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.25 }}
  >
    <p style={S.heroTagline}>¡Qué rikito es saber...!</p>
  </motion.div>

  <motion.p
    style={{
      color: "#b8a4e8",
      fontSize: "1.05rem",
      marginBottom: "2rem",
      lineHeight: 1.65,
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.35 }}
  >
   ¡Aprende a tomar decisiones para 
cuidar tu cuerpo y tus relaciones!.
  </motion.p>

  <motion.button
    style={S.ctaPrimary}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.45 }}
    whileHover={{
      scale: 1.04,
      boxShadow: "0 8px 40px rgba(245,158,11,0.6)",
    }}
    whileTap={{ scale: 0.97 }}
    onClick={handlePlay}
  >
    <HiOutlinePlay style={{ width: 22, height: 22 }} />
    EMPEZAR AHORA
  </motion.button>

  {/* score */}
  <motion.div
    style={{ display: "flex", justifyContent: "center" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
  >
    {/* <div style={S.scoreChip}>
      <HiStar style={{ color: "#fbbf24" }} />
      Mayor puntuación:{" "}
      <strong style={{ color: "#fff" }}>
        <CounterAnimation
          value={userInfo.maxScore ? Number(userInfo.maxScore) : 0}
        />
      </strong>
    </div> */}
  </motion.div>
</div>

        {/* decorative glow orbs */}
        <div style={{
          position: "absolute", bottom: "-80px", left: "50%",
          transform: "translateX(-50%)",
          width: "600px", height: "200px",
          background: "radial-gradient(ellipse, rgba(109,40,217,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
      </section>

      {/* ════════ QUIZ CALLOUT ════════ */}
      <section style={S.quizSection}>
        <div style={S.quizCircle} />
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ position: "relative", zIndex: 1, maxWidth: "540px" }}
        >
          <h2 style={S.quizTitle}>¿Te gustaría saber cuánto conoces de tu sexualidad?</h2>
          <p style={S.quizSub}>Sobre tu forma de relacionarte y tus decisiones</p>
          <p style={{ color: "#9c85d0", fontSize: "0.88rem" }}>¡Completa este test en 3 minutos!</p>
          <motion.button
            style={S.ctaSecondary}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handlePlay}
          >
            <HiOutlinePlay />
            Empezar ahora!
          </motion.button>
        </motion.div>
      </section>

      {/* ════════ AUDIENCE ════════ */}
      <section style={S.audienceSection}>
        <motion.h2
          style={S.audienceTitle}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          ¡Dirigido a chicos y chicas como tú!
        </motion.h2>
        <p style={S.audienceSub}>Entre 13 y 15 años</p>
        <div style={S.photoGrid}>
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i} style={S.photoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* placeholder visual when no real photos */}
              <div style={{
                width: "100%", height: "100%", minHeight: "160px",
                background: `linear-gradient(135deg,
                  hsl(${260 + i * 20},50%,25%) 0%,
                  hsl(${240 + i * 15},40%,18%) 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "3rem",
              }}>
                {["🧒", "👧", "👦", "🧒‍♀️"][i - 1]}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
<footer style={{ 
  background: "linear-gradient(135deg, #f59e0b, #e66e0d)", 
  borderTop: "1px solid rgba(255,255,255,0.2)",
  marginTop: "auto"
}}>
  <div style={{
    ...S.footer,
    background: "transparent"
  }}>
    <div>
      <div style={{
        ...S.footerLogo,
        background: "#fff",
        border: "none",
        padding: "8px",
        width: "70px",
        height: "70px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <img 
        src={logoIpas} // Sin comillas, usando la variable importada
        alt="IPAS Logo" 
        style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
        }}
        />
      </div>
    </div>
    <div>
      <p style={{
        ...S.footerHeading,
        color: "#fff",
        fontWeight: "bold",
        fontSize: "0.8rem"
      }}>Plataforma</p>
      {["Inicio", "Acerca de", "Respuestas", "Contacto"].map(l => (
        <a key={l} href="#" style={{
          ...S.footerLink,
          color: "#fff3e0",
          fontWeight: "500",
          transition: "color 0.2s"
        }}>{l}</a>
      ))}
    </div>
    <div>
      <p style={{
        ...S.footerHeading,
        color: "#fff",
        fontWeight: "bold",
        fontSize: "0.8rem"
      }}>Redes</p>
      {["Facebook", "LinkedIn", "Instagram", "Twitter"].map(l => (
        <a key={l} href="#" style={{
          ...S.footerLink,
          color: "#fff3e0",
          fontWeight: "500",
          transition: "color 0.2s"
        }}>{l}</a>
      ))}
    </div>
  </div>
  <p style={{ 
    textAlign: "center", 
    color: "#fff3e0", 
    fontSize: "0.78rem", 
    paddingBottom: "1.5rem",
    margin: 0,
    fontWeight: "500"
  }}>
    © {new Date().getFullYear()} Guardianas del poder Warmi!
  </p>
</footer>

      {/* ════════ EXTRAS ════════ */}
      <AnimatePresence mode="wait">
        {mobileDropDown && (
          <motion.div
            style={{ position: "fixed", inset: 0, zIndex: 0, backdropFilter: "blur(4px)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>

      {location.state?.newUser && (
        <Confetti
          width={windowWidth} height={windowHeight}
          recycle={false} numberOfPieces={280}
          style={{ zIndex: 50 }}
        />
      )}
    </motion.div>
  );
}

export default Home;

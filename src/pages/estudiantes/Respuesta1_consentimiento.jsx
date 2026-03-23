import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import ButtonPageBack from "../../components/buttons/ButtonPageBack";
import { fade } from "../../animations/pageAnimations";

// ─── CAMBIO AQUÍ: Ajuste de rutas para Assets (subimos dos niveles) ───
import imagenA from "../../assets/images/modules/incorrecta1-1.png";
import imagenB from "../../assets/images/modules/correcta1.png";
import imagenC from "../../assets/images/modules/incorrecta1-2.png";

const contentMap = {
    A: {
        quote: `"“No pasa nada, está bien” (aunque te sientas incómoda para no hacer drama).".`,
        feedbackTitle: "Siempre expresa cómo te sientes",
        subFeedback: "Decir “está bien” cuando no lo sientes protege el momento, pero no ayuda a que la otra persona APRENDA A RESPETAR TU ESPACIO.El consentimiento necesita ser honesto para que todos se sientan seguros.",
        bubbleColor: "#FF7A00",
        isCorrect: false,
        imagen: imagenA,
    },
    B: {
        quote: `"“Me gustó que festejaras conmigo, pero prefiero abrazos más suaves o que me preguntes primero. Gracias por darte cuenta”.".`,
        feedbackTitle: "¡Muy bien! ",
        subFeedback: "Expresar con calma lo que te gusta o no te gusta es ejercer TU DERECHO A CONSENTIMIENTO. Fortalece la amistad y hace que todos se sientan respetados.",
        bubbleColor: "#16a34a",
        isCorrect: true,
        imagen: imagenB,
    },
    C: {
        quote: `"“No me gusta que me abracen así, no lo hagas más” (de forma cortante).".`,
        feedbackTitle: "Antes de hablar, piensa en lo que quieres decir. ",
        subFeedback: "Ser directa está bien si lo necesitas, pero un tono más suave con explicación ayuda a que la otra persona entienda sin sentirse atacada. El consentimiento se enseña con respeto mutuo.",
        bubbleColor: "#FF7A00",
        isCorrect: false,
        imagen: imagenC,
    },
};

function SexualidadQuiz() {
    document.title = "Desafío 1 · Análisis";
    const navigate = useNavigate();
    const location = useLocation();

    const selectedOption = location.state?.selectedOption;
    const content = contentMap[selectedOption?.id] ?? contentMap["A"];

    // FUNCIÓN PARA NAVEGAR SEGÚN RESULTADO
    const handleNavigation = () => {
        if (content.isCorrect) {
            navigate("/play/sexualidad"); // Si es correcto, vuelve al mapa
        } else {
            navigate("/play/sexualidad/definicion"); // Si es incorrecto, va a la pantalla de "Sexualidad es..."
        }
    };

    return (
        <motion.main
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-[#090118] text-white relative pb-20 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1E0E3D_0%,_#090118_100%)] opacity-70" />

            <section className="relative max-w-5xl mx-auto px-6 pt-16">
                <ButtonPageBack to="/play/sexualidad/consentimiento_lectura1" absolute={true}>
                    Lectura
                </ButtonPageBack>

                <div className="mb-10 flex flex-col items-center text-center">
                    <h3 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-wide">
                        Analicemos esta situación
                    </h3>
                    <div className="bg-[#1E0E3D]/80 backdrop-blur-md border border-white/10 p-5 rounded-[20px] max-w-2xl shadow-xl">
                        <p className="text-base md:text-lg italic text-purple-100 leading-relaxed">
                            {content.quote}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start justify-items-center">
                    {/* IZQUIERDA: Imagen Situación */}
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="rounded-[24px] overflow-hidden border border-white/10 shadow-2xl max-w-[260px] bg-[#1E0E3D]">
                            <img src={content.imagen} alt="Situación" className="w-full h-auto object-cover" />
                        </div>
                    </div>

                    {/* DERECHA: Feedback + Botón */}
                    <div className="flex flex-col items-center md:items-end gap-8 w-full">
                        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="relative max-w-xs md:max-w-sm w-full">
                            <div style={{ backgroundColor: content.bubbleColor }} className="border-4 border-[#8DE1C8] p-5 rounded-[24px] shadow-2xl">
                                <h4 className="text-base md:text-lg font-black mb-2 leading-tight text-white uppercase">
                                    {content.feedbackTitle}
                                </h4>
                                <p className="text-xs md:text-sm font-bold text-white leading-relaxed">
                                    {content.subFeedback}
                                </p>
                            </div>
                            <div style={{ borderRightColor: content.bubbleColor }} className="absolute top-1/2 -left-3.5 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[14px] z-20" />
                        </motion.div>

                        <button
                            onClick={handleNavigation}
                            className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#4E2A93] text-white font-bold hover:scale-105 transition-transform shadow-lg text-sm self-center md:self-end"
                        >
                            {content.isCorrect ? "CONTINUAR AVENTURA" : "ENTENDIDO, CONTINUAR"}
                            <ArrowRight className="w-4 h-4 text-[#FFD24D]" />
                        </button>
                    </div>
                </div>
            </section>
        </motion.main>
    );
}

export default SexualidadQuiz;
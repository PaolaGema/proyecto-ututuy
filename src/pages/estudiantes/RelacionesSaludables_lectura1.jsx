import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import ButtonPageBack from "../../components/buttons/ButtonPageBack";

// --- Assets ---
// Asegúrate de que esta ruta sea la correcta para tu imagen de la historieta
import imagen1 from "../../assets/images/historietas/modulo1_historieta7.png";

const comicPages = [
    {
        id: "pagina-1",
        subtitle: "Lee la historia y observa las situaciones que viven las y los personajes.",
        image: imagen1,
    },
];

const challengeData = {
    question: "¿por qué los cuerpos de las mujeres y varones cambian de forma diferente?",
    options: [
        {
            id: "A",
            text: `"“Bueno, compremos la tela de Lucía ahora y después vemos lo demás” (aunque Carla quede sin opciones).".`,
            isCorrect: false,
            feedback: "IGNORAR lo que siente otra persona puede hacer que se sienta MENOS CÓMODA en el grupo.",
            subFeedback: "Todos tenemos derechos a decir cómo queremos contactarnos."
        },
        {
            id: "B",
            text: `"No dices nada y sigues a quien hable más fuerte.".`,
            isCorrect: false,
            feedback: "LA SEXUALIDAD se expresa en la forma de demostrar nuestras emociones.",
            subFeedback: "Lo importante es escuchar, preguntar y respetar lo que cada uno siente."
        },
        {
            id: "C",
            text: `"Chicas, todas queremos algo diferente. ¿Qué tal si hacemos una lista rápida de lo que cada una necesita y luego decidimos el orden para que nadie se quede sin lo suyo?”.".`,
            isCorrect: true,
            feedback: "GUARDAR SILENCIO por miedo hace que otros se alejen y SIENTAN CULPA O VERGÜENZA.",
            subFeedback: "Procura ser una fuente de apertura y confianza."
        }
    ]
};

function RelacionesSaludablesReading() {
    document.title = "Lección 3 · Consentimiento";
    const navigate = useNavigate();
    const sliderRef = useRef(null);
    
    // Estado para manejar la selección
    const [selectedOption, setSelectedOption] = useState(null);

    // Como solo hay una página en comicPages, isLast siempre será true en este caso
    const isLast = true; 

    const handleSelectOption = (option) => {
        if (selectedOption !== null) return; // Evita múltiples clics
        setSelectedOption(option);

        // Pequeño retraso para que el usuario vea su elección antes de navegar
        setTimeout(() => {
            // Aquí puedes decidir a qué ruta enviarlo tras responder
            // Por defecto lo envío de vuelta al mapa de sexualidad
            navigate("/play/sexualidad/respuesta1_sexo", {
                state: { selectedOption: option }
            });
        }, 1200);
    };

    return (
        <main className="min-h-screen relative overflow-hidden text-white font-sans">
            {/* Capa de fondo oscuro/espacial */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E0E3D] via-[#110624] to-[#090118]" />

            <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-10">
                {/* Botón para volver al mapa de lecciones */}
                <ButtonPageBack to="/play/sexualidad" replace={true} absolute={true}>
                    Volver al Mapa
                </ButtonPageBack>

                {/* Contenedor de la Historieta */}
                <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-3">
                    <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4">
                        {comicPages.map((page) => (
                            <article key={page.id} className="min-w-full snap-start rounded-2xl overflow-hidden bg-[#0E041D]">
                                <img
                                    src={page.image}
                                    className="w-full h-[300px] md:h-[550px] object-contain"
                                    alt="Historieta Lección Sexo"
                                />
                                <div className="p-5 bg-[#120624] border-t border-white/5">
                                    <p className="text-gray-300 text-sm md:text-base italic text-center">
                                        {page.subtitle}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Sección de la Pregunta (se activa al llegar al final) */}
                <AnimatePresence>
                    {isLast && (
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto mt-10 space-y-6"
                        >
                            <h3 className="text-2xl md:text-3xl font-black text-center mb-8 text-yellow-400">
                                {challengeData.question}
                            </h3>

                            <div className="grid gap-4">
                                {challengeData.options.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleSelectOption(opt)}
                                        disabled={selectedOption !== null}
                                        className={`relative flex items-center gap-5 p-5 rounded-2xl border-2 transition-all text-left shadow-lg
                                            ${selectedOption?.id === opt.id
                                                ? (opt.isCorrect ? "border-green-500 bg-green-500/20" : "border-red-500 bg-red-500/20")
                                                : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"}
                                            ${selectedOption && selectedOption.id !== opt.id ? "opacity-40" : "opacity-100"}
                                        `}
                                    >
                                        {/* Círculo con la letra (A, B, C) */}
                                        <span className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl
                                            ${selectedOption?.id === opt.id 
                                                ? (opt.isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white") 
                                                : "bg-purple-600 text-white"}
                                        `}>
                                            {opt.id}
                                        </span>
                                        
                                        <p className="text-base md:text-lg font-medium leading-tight">
                                            {opt.text}
                                        </p>
                                    </button>
                                ))}
                            </div>

                            {/* Feedback visual rápido al responder */}
                            {selectedOption && (
                                <motion.div 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }}
                                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10 mt-4"
                                >
                                    <p className="font-bold text-yellow-400 italic">
                                        {selectedOption.isCorrect ? "¡Excelente elección!" : "¡Casi! Analiza la respuesta."}
                                    </p>
                                </motion.div>
                            )}
                        </motion.section>
                    )}
                </AnimatePresence>
            </section>
        </main>
    );
}

export default RelacionesSaludablesReading;
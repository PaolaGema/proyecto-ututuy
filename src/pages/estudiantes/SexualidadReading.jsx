import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import ButtonPageBack from "../../components/buttons/ButtonPageBack";
// ─── CAMBIO AQUÍ: Agregamos el ../ extra para llegar a assets ───
import imagen1 from "../../assets/images/historietas/MODULO_1_HISTORIETA..jpg";

const comicPages = [
    {
        id: "pagina-1",
        subtitle: "Lee la historia y observa las situaciones que viven las y los personajes.",
        image: imagen1,
    },
];

const challengeData = {
    question: "¿Qué le respondes?",
    options: [
        {
            id: "A",
            text: `"Ay, no seas exagerada, es solo por festejar. Todos lo hacen, relájate".`,
            isCorrect: false,
            feedback: "IGNORAR lo que siente otra persona puede hacer que se sienta MENOS CÓMODA en el grupo.",
            subFeedback: "Todos tenemos derechos a decir cómo queremos contactarnos."
        },
        {
            id: "B",
            text: `"Entiendo, ¿qué te parece si hablamos con los chicos y les decimos que nos incomoda que nos abracen? Es mejor chocar las manos".`,
            isCorrect: true,
            feedback: "LA SEXUALIDAD se expresa en la forma de demostrar nuestras emociones.",
            subFeedback: "Lo importante es escuchar, preguntar y respetar lo que cada uno siente."
        },
        {
            id: "C",
            text: `"Yo no sé... mejor no digamos nada para no hacer problema".`,
            isCorrect: false,
            feedback: "GUARDAR SILENCIO por miedo hace que otros se alejen y SIENTAN CULPA O VERGÜENZA.",
            subFeedback: "Procura ser una fuente de apertura y confianza."
        }
    ]
};

function SexualidadReading() {
    document.title = "Desafío · Modulo 1";
    const navigate = useNavigate();
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const isLast = currentIndex === comicPages.length - 1;

    const handleSelectOption = (option) => {
        if (selectedOption !== null) return;
        setSelectedOption(option);

        setTimeout(() => {
            navigate("/play/sexualidad/desafio-1", {
                state: { selectedOption: option }
            });
        }, 800);
    };

    return (
        <main className="min-h-screen relative overflow-hidden text-surface font-sans">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E0E3D] via-[#110624] to-[#090118]" />

            <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-10">
                <ButtonPageBack to="/play/sexualidad" replace={true} absolute={true}>Ruta</ButtonPageBack>

                <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                    <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4">
                        {comicPages.map((page) => (
                            <article key={page.id} className="min-w-full snap-start rounded-2xl overflow-hidden bg-[#0E041D]">
                                <img
                                    src={page.image}
                                    className="w-full h-[280px] md:h-[500px] object-contain"
                                    alt="Historieta"
                                />
                                <div className="p-4 bg-[#120624]">
                                    <p className="text-surface/80 text-sm md:text-base">{page.subtitle}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <AnimatePresence>
                    {isLast && (
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto mt-8 space-y-4"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
                                {challengeData.question}
                            </h3>

                            <div className="grid gap-3">
                                {challengeData.options.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleSelectOption(opt)}
                                        disabled={selectedOption !== null}
                                        className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all text-left
                                            ${selectedOption?.id === opt.id
                                                ? (opt.isCorrect ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10")
                                                : "border-white/10 bg-white/5 hover:bg-white/10"}
                                            ${selectedOption && selectedOption.id !== opt.id ? "opacity-50" : "opacity-100"}
                                        `}
                                    >
                                        <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                                            ${selectedOption?.id === opt.id ? "bg-white text-black" : "bg-purple-600 text-white"}
                                        `}>
                                            {opt.id}
                                        </span>
                                        <p className="text-sm md:text-base pr-8">{opt.text}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </section>
        </main>
    );
}

export default SexualidadReading;
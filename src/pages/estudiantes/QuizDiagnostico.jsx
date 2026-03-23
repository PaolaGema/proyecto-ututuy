import { useState } from "react";
import { motion } from "framer-motion";
import { fade } from "../../animations/pageAnimations";
import { useNavigate } from "react-router";

// ─── ESTRUCTURA DE PREGUNTAS POR MÓDULOS ───
const questionsData = [
    // MÓDULO 1: CONCEPTOS BÁSICOS (Total max: 12)
    { id: 1, mod: 1, text: "La sexualidad no solo se trata del cuerpo, sino también de sentimientos, identidad, relaciones y formas de pensar." },
    { id: 2, mod: 1, text: "El sexo se refiere a características biológicas como los órganos reproductivos, las hormonas y los cromosomas." },
    { id: 3, mod: 1, text: "Las ideas sobre cómo deben comportarse hombres y mujeres construyen nuestros géneros." },
    { id: 4, mod: 1, text: "El consentimiento es necesario antes de que alguien acceda al espacio personal o íntimo de otra persona." },
    
    // MÓDULO 2: SALUD SEXUAL Y REPRODUCTIVA (Total max: 12)
    { id: 5, mod: 2, text: "Tengo derecho a decir ‘no’ cuando alguien toca, ve o trata mi cuerpo de una forma que me incomoda." },
    { id: 6, mod: 2, text: "Las personas tienen derecho a acceder a información y servicios de salud para tomar decisiones sobre la reproducción." },
    { id: 7, mod: 2, text: "El uso de métodos anticonceptivos permite tomar decisiones informadas y responsables sobre tener hijos." },
    { id: 8, mod: 2, text: "Prevenir las ITS no solo implica tener información, sino también tomar decisiones responsables." },
    { id: 9, mod: 2, text: "La salud sexual y reproductiva es un derecho humano que todas las personas deben poder ejercer." },

    // MÓDULO 3: PROYECTO DE VIDA Y RELACIONES (Total max: 9)
    { id: 10, mod: 3, text: "Los celos, el control o revisar el celular de la pareja son formas de violencia, aunque no haya golpes." },
    { id: 11, mod: 3, text: "En una relación saludable, ambas personas se escuchan, se respetan y pueden expresar lo que sienten sin miedo." },
    { id: 12, mod: 3, text: "El proyecto de vida implica tomar decisiones responsables sobre mi presente y mi futuro." },
    { id: 13, mod: 3, text: "Tomar decisiones implica pensar en las consecuencias de mis actos y en mi bienestar y el de los demás." }
];

const options = [
    { label: "De acuerdo", value: 3 },
    { label: "Neutral", value: 2 },
    { label: "En desacuerdo", value: 1 }
];

function QuizDiagnostico() {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    const handleSelect = (qId, val) => setAnswers(prev => ({ ...prev, [qId]: val }));

    const handleSubmit = () => {
        // 1. Calculamos puntajes por módulo
        let scoreM1 = 0, scoreM2 = 0, scoreM3 = 0;

        questionsData.forEach(q => {
            const val = answers[q.id] || 0;
            if (q.mod === 1) scoreM1 += val;
            if (q.mod === 2) scoreM2 += val;
            if (q.mod === 3) scoreM3 += val;
        });

        // 2. Lógica: El módulo con MENOR puntaje es el que necesita refuerzo
        const scores = [
            { mod: 1, score: scoreM1, msg: "La sexualidad es mucho más de lo que nos imaginamos, ¿verdad? Aprende más en el módulo 1." },
            { mod: 2, score: scoreM2, msg: "¡Aún nos queda mucho por conocer acerca de nosotros! Vamos a aprender al módulo 2." },
            { mod: 3, score: scoreM3, msg: "El proyecto de vida es muy importante para tu futuro, vamos a analizarlo juntos en el módulo 3." }
        ];

        // Ordenamos de menor a mayor puntaje
        const worstMod = scores.sort((a, b) => a.score - b.score)[0];
        setResult(worstMod);
    };

    if (result) {
        return (
            <motion.div variants={fade} initial="initial" animate="animate" className="min-h-screen bg-[#090118] text-white p-8 flex flex-col items-center justify-center text-center">
                <h2 className="text-5xl font-black text-yellow-500 mb-6">¡RESULTADO!</h2>
                <div className="bg-white/10 p-8 rounded-3xl border border-yellow-500/30 max-w-lg">
                    <p className="text-2xl mb-6 font-bold leading-tight">{result.msg}</p>
                    <button onClick={() => navigate("/home")} className="bg-yellow-500 text-black font-black px-10 py-3 rounded-full hover:scale-105 transition-transform">
                        ENTENDIDO
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.main variants={fade} initial="initial" animate="animate" exit="exit" className="min-h-screen bg-[#090118] text-white p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-black mb-2 text-center text-yellow-500">CHE, ¿CUÁNTITO SABES?</h1>
                <p className="text-center text-purple-300 mb-10">Tu camino se decidirá según lo que respondas aquí.</p>

                <div className="space-y-6">
                    {questionsData.map((q) => (
                        <div key={q.id} className="bg-white/5 p-5 rounded-2xl border border-white/10">
                            <p className="text-lg mb-4"><span className="text-yellow-500 font-bold">#</span> {q.text}</p>
                            <div className="flex gap-3">
                                {options.map((opt) => (
                                    <button
                                        key={opt.label}
                                        onClick={() => handleSelect(q.id, opt.value)}
                                        className={`flex-1 py-3 rounded-xl font-bold border-2 transition-all 
                                            ${answers[q.id] === opt.value ? "bg-yellow-500 border-yellow-400 text-black shadow-lg" : "border-purple-500/30 text-purple-200"}`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button 
                    disabled={Object.keys(answers).length < questionsData.length}
                    onClick={handleSubmit}
                    className={`w-full mt-10 py-5 rounded-full font-black text-2xl mb-20 ${Object.keys(answers).length < questionsData.length ? "bg-gray-800 text-gray-500" : "bg-yellow-500 text-black"}`}
                >
                    {Object.keys(answers).length < questionsData.length ? `FALTAN ${questionsData.length - Object.keys(answers).length}` : "VER MI RESULTADO"}
                </button>
            </div>
        </motion.main>
    );
}
export default QuizDiagnostico;
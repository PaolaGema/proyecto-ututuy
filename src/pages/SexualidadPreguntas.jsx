import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useNavigate } from "react-router";
import { fade } from "../animations/pageAnimations";

function SexualidadPreguntas() {
    const navigate = useNavigate();

    const handleAnswer = (answer) => {
        // Navegar a la ventana de mensaje con la respuesta
        navigate("/play/sexualidad/mensaje", { 
            state: { respuesta: answer }
        });
    };

    return (
        <motion.main
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-[#090118] text-white relative flex flex-col items-center justify-center px-6 overflow-hidden"
        >
            {/* FONDO */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1E0E3D_0%,_#090118_100%)] opacity-70" />

            <section className="relative w-full max-w-4xl flex flex-col items-center">
                
                {/* CABECERA: ICONO + PERSONAL */}
                <div className="flex items-center gap-4 mb-12 self-start md:ml-20">
                    <div className="bg-[#FF7A00] p-3 rounded-full shadow-lg">
                        <User className="w-8 h-8 text-black fill-current" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        PERSONAL
                    </h2>
                </div>

                {/* CAJA DE PREGUNTA */}
                <div className="relative w-full mb-16">
                    <div className="bg-[#090118]/60 backdrop-blur-md border-2 border-[#FF7A00] p-8 md:p-12 rounded-[30px] shadow-2xl">
                        <p className="text-xl md:text-3xl font-bold leading-tight text-center md:text-left">
                            “¿Alguna vez te pasó, como a Rosa, que alguien intentó tocarte o acercarse demasiado sin que tú quisieras, haciéndote sentir incómoda?”
                        </p>
                    </div>
                    
                    {/* SIGNO DE INTERROGACIÓN DECORATIVO */}
                    <div className="absolute -right-4 -bottom-8 md:-right-10 md:-bottom-10">
                        <span className="text-[#FF7A00] text-8xl md:text-[150px] font-black opacity-80 drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">
                            ?
                        </span>
                    </div>
                </div>

                {/* BOTONES SI / NO */}
                <div className="flex gap-8 md:gap-16 w-full justify-center">
                    <button
                        onClick={() => handleAnswer("SI")}
                        className="w-40 md:w-56 py-6 rounded-full bg-[#FFD24D] text-[#090118] text-4xl md:text-5xl font-black shadow-[0_10px_0_#b8942a] hover:translate-y-1 hover:shadow-[0_6px_0_#b8942a] transition-all active:scale-95 uppercase"
                    >
                        SI
                    </button>

                    <button
                        onClick={() => handleAnswer("NO")}
                        className="w-40 md:w-56 py-6 rounded-full bg-[#FFD24D] text-[#090118] text-4xl md:text-5xl font-black shadow-[0_10px_0_#b8942a] hover:translate-y-1 hover:shadow-[0_6px_0_#b8942a] transition-all active:scale-95 uppercase"
                    >
                        NO
                    </button>
                </div>

            </section>
        </motion.main>
    );
}

export default SexualidadPreguntas;
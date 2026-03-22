import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
// ─── CAMBIO 1: Ajuste de ruta para animaciones ───
import { fade } from "../../animations/pageAnimations";

// ─── CAMBIO 2: Ajuste de ruta para Assets ───
import llamaPersonaje from "../../assets/images/elements/selected-indicator.svg"; 

function SexualidadDefinicion() {
    const navigate = useNavigate();

    return (
        <motion.main
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-[#090118] text-white relative flex items-center justify-center py-12 overflow-y-auto"
        >
            {/* FONDO */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1E0E3D_0%,_#090118_100%)] opacity-70" />

            <section className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-center">
                
                {/* IZQUIERDA: PERSONAJE LLAMA */}
                <div className="flex justify-center items-center">
                    <img 
                        src={llamaPersonaje} 
                        alt="Llama" 
                        className="w-48 md:w-[350px] h-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* DERECHA: CONTENIDO */}
                <div className="flex flex-col gap-6 md:gap-8">
                    
                    {/* Título Estilo Botón Naranja */}
                    <div className="bg-[#FF7A00] self-start px-10 py-3 rounded-[24px] shadow-xl border-b-4 border-orange-800">
                        <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">
                            SEXUALIDAD
                        </h2>
                    </div>

                    {/* Texto Principal */}
                    <div className="space-y-4">
                        <p className="text-lg md:text-xl font-medium leading-relaxed max-w-xl text-balance text-purple-50">
                            La sexualidad es como un <span className="font-bold underline decoration-[#FF7A00] underline-offset-4">COLOR</span> que está en toda tu vida: en como te ríes con tus amigos, en cómo te sientes orgullosa cuando haces algo bien, en las ganas de compartir momentos lindos. 
                        </p>
                        <p className="text-lg md:text-xl font-medium leading-relaxed max-w-xl text-balance text-purple-50">
                            No es algo que empieza cuando eres grande ni algo que solo pasa en pareja.
                        </p>
                    </div>

                    {/* Destacado final */}
                    <div className="flex items-start md:items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                        <div className="bg-[#FFD24D] w-10 h-10 flex items-center justify-center rounded-xl rotate-12 shadow-lg shrink-0">
                            <span className="text-black font-black text-2xl">!</span>
                        </div>
                        <p className="text-lg md:text-xl font-bold uppercase italic leading-tight text-[#FFD24D]">
                            ¡Tú decides cómo quieres relacionarte y eso es poderoso!
                        </p>
                    </div>

                    {/* NUEVO BOTÓN: CONTINUAR PARA APRENDER MÁS */}
                    <div className="flex justify-center md:justify-end mt-4">
                        <button
                            onClick={() => navigate("/play/sexualidad/preguntas-personales")} 
                            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#4E2A93] text-white font-black hover:bg-[#5e35b1] transition-all shadow-[0_0_20px_rgba(78,42,147,0.4)] hover:scale-105 active:scale-95 uppercase italic tracking-wider text-sm md:text-base border-b-4 border-[#311b5e]"
                        >
                            Continuar para aprender más
                            <ArrowRight className="w-5 h-5 text-[#FFD24D] group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </motion.main>
    );
}

export default SexualidadDefinicion;
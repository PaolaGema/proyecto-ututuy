import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { fade } from "../animations/pageAnimations";

// Asegúrate de que esta ruta a la imagen sea correcta en tu carpeta de assets
const imgJukumariEstudiante = "/src/assets/images/modules/osa_jukumari.png"; 

function Login() {
    // Título actualizado con la marca Ututuy
    document.title = "Acceso • Ututuy | ¡Qué rikito es saber!";
    const navigate = useNavigate();

    return (
        <motion.div
            className="flex h-screen w-full flex-col md:flex-row bg-[#020131]"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fade}
        >
            {/* --- SECCIÓN ESTUDIANTE (Lado Izquierdo) --- */}
            <main className="relative flex flex-1 flex-col items-center justify-center p-10 overflow-hidden border-r-4 border-[#ffcb2f]/20 max-sm:border-r-0 max-sm:border-b-4">
                
                <div className="absolute inset-0 opacity-10 scale-150 rotate-12">
                    <div className="w-full h-full bg-[conic-gradient(from_0deg,#ff4e50,#fc913a,#f9d423,#eae374,#e2f4c7,#a8e6cf)] rounded-full blur-[100px]"></div>
                </div>

                <div className="relative flex flex-col items-center space-y-10 z-10 text-center">
                    <img 
                        src={imgJukumariEstudiante} 
                        alt="Jukumari Estudiante" 
                        className="w-80 h-auto max-w-[80%] drop-shadow-[0_0_15px_rgba(255,203,47,0.5)]" 
                    />

                    <div className="flex flex-col gap-3">
                        <h2 className="text-6xl font-black text-[#ffcb2f] tracking-tight [text-shadow:4px_4px_0px_rgba(215,152,0,1)] max-sm:text-5xl">
                            ¡A JUGAR!
                        </h2>
                        <p className="text-3xl font-bold text-white max-sm:text-xl">
                            Soy Estudiante
                        </p>
                    </div>
                    
                    <button 
                        // CORREGIDO: Ahora redirige a la pantalla de bienvenida del estudiante
                        onClick={() => navigate("/home")} 
                        className="rounded-full bg-[#f9d423] px-16 py-6 text-3xl font-black text-[#020131] shadow-[0_8px_0px_#d79800] transition-all hover:bg-[#eae374] hover:shadow-[0_4px_0px_#d79800] hover:translate-y-1 active:scale-95 active:shadow-[0_0_0px_#d79800]"
                    >
                        Ingresar Aquí
                    </button>
                </div>
            </main>

            {/* --- SECCIÓN DOCENTE (Lado Derecho) --- */}
            <div className="relative flex flex-1 flex-col items-center justify-center p-10 overflow-hidden bg-[#7839cf]">
                
                <div className="absolute inset-0 opacity-30 blur-[100px]">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4e50] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fc913a] rounded-full"></div>
                </div>

                <div className="relative flex flex-col items-center space-y-10 z-10 text-center">
                    <div className="p-8 bg-[#fc913a] rounded-full shadow-2xl">
                        {/* Icono de Usuario/Docente */}
                        <svg className="w-40 h-40 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="30" r="15" fill="currentColor"/>
                            <path d="M20 80C20 63.4315 33.4315 50 50 50V50C66.5685 50 80 63.4315 80 80V85H20V80Z" fill="currentColor"/>
                        </svg>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-6xl font-black text-white max-sm:text-5xl">
                            PANEL
                        </h2>
                        <p className="text-3xl font-bold text-[#eae374] max-sm:text-xl">
                            Soy Docente
                        </p>
                    </div>

                    <button 
                        onClick={() => navigate("/home_docente")}
                        className="rounded-full bg-white px-16 py-6 text-3xl font-black text-[#7839cf] shadow-[0_8px_0px_#e1e1e1] transition-all hover:bg-[#e2f4c7] hover:shadow-[0_4px_0px_#e1e1e1] hover:translate-y-1 active:scale-95 active:shadow-[0_0_0px_#e1e1e1]"
                    >
                        Acceso Docente
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default Login;
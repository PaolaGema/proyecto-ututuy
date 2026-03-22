import { motion } from "framer-motion";
import { Lock, Swords } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
// Se añade un nivel extra para salir de 'estudiantes' y 'pages'
import { fade } from "../../animations/pageAnimations";
import ButtonPageBack from "../../components/buttons/ButtonPageBack";
import islandMultiplicacion from "../../assets/images/modules/isla_modulo1.png";
import islandSumas from "../../assets/images/modules/isla_modulo2.png";
import islandFracciones from "../../assets/images/modules/isla_modulo3.png";

const modules = [
  {
    id: "sexualidad",
    island: "Módulo 1",
    title: "SEXUALIDAD",
    description:
      "Conozcamos más de nuestros cuerpos y la forma en que nos relacionamos con otros.",
    available: true,
    gradient: "from-[#7B4EC7] to-[#B386FF]",
    image: islandMultiplicacion,
  },
  {
    id: "violencia-sexual",
    island: "Módulo 2",
    title: "SALUD SEXUAL REPRODUCTIVA",
    description: "Aprende a cuidar y proteger tu cuerpo.",
    available: false,
    gradient: "from-[#0EA022] to-[#67C872]",
    image: islandSumas,
  },
  {
    id: "vida-sana-libre-violencia",
    island: "Módulo 3",
    title: "PROYECTO DE VIDA",
    description:
      "Proyecta tus metas e intereses aprendiendo a tomar decisiones.",
    available: false,
    gradient: "from-[#E01226] to-[#FF6A7A]",
    image: islandFracciones,
  },
];

function ModuleSelection() {
  document.title = "Selecciona el módulo";
  const navigate = useNavigate();

  const handleSelect = (module) => {
    if (!module.available) {
      toast.info("Este módulo estará disponible pronto.", {
        className: "bg-surface",
      });
      return;
    }
    navigate(`/play/${module.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b1450] to-[#120824] flex items-center justify-center px-4">
      <motion.main
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-gradient-to-b from-[#2b1450] to-[#120824] px-6 pt-28 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          <ButtonPageBack to="/" replace={true} absolute={true}>
            Inicio
          </ButtonPageBack>

          {/* HEADER */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Selecciona un módulo
            </h1>
            <p className="text-purple-300 mt-3 text-base md:text-lg max-w-xl mx-auto">
              Cada módulo representa una etapa de aprendizaje dentro del juego.
            </p>
          </section>

          {/* CARDS */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map((module) => (
              <button
                key={module.id}
                type="button"
                onClick={() => handleSelect(module)}
                className={`text-left p-[2px] rounded-2xl bg-gradient-to-b ${module.gradient} shadow-lg transition-all duration-200 hover:scale-[1.02]`}
              >
                <div className="bg-white/95 backdrop-blur rounded-2xl p-5 h-full border border-white/10">
                  {/* IMAGE */}
                  <div className="mb-4 overflow-hidden rounded-xl">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>

                  {/* TOP */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-500">
                      {module.island}
                    </span>
                    {module.available ? (
                      <Swords className="w-5 h-5 text-purple-700" />
                    ) : (
                      <Lock className="w-5 h-5 text-gray-400" />
                    )}
                  </div>

                  {/* TITLE */}
                  <h2 className="text-lg font-bold text-purple-800 mb-2">
                    {module.title}
                  </h2>

                  {/* DESC */}
                  <p className="text-sm text-gray-600">
                    {module.description}
                  </p>

                  {/* STATUS */}
                  <div className="mt-5">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        module.available
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {module.available ? "Disponible" : "Próximamente"}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </section>
        </div>
      </motion.main>
    </div>
  );
}

export default ModuleSelection;
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";
import estudianteImg from "../../assets/images/modules/oso_hormiguero_estudiante.png";

function ButtonPageBack({ to, replace, children, altColor, absolute }) {
    return (
        <Link
            to={to}
            replace={replace}
            className={`flex items-center gap-2 w-fit group transition-all duration-200
                ${altColor
                    ? "text-white border border-white/20 bg-white/5 backdrop-blur-md px-3 py-2 rounded-full hover:bg-white/10"
                    : "text-white/70 hover:text-white px-3 py-2 rounded-full hover:bg-white/5"
                }
                ${absolute && "absolute top-8 left-14 max-xl:left-4 max-xl:top-4 z-50"}
            `}
        >
            {/* Mini personaje */}
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border-2 border-yellow-400/50 shadow-lg shadow-yellow-400/20 group-hover:border-yellow-400 transition-all">
                <img
                    src={estudianteImg}
                    alt="Volver"
                    className="w-full h-full object-cover object-top scale-150 translate-y-1"
                />
            </div>

            <ChevronLeft size={18} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform flex-shrink-0 text-yellow-400" />

            <span className="text-sm font-bold">{children}</span>
        </Link>
    );
}

export default ButtonPageBack;
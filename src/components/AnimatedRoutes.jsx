import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";

// Imports confirmados según tu estructura de carpetas
import Home from "../pages/estudiantes/Home";
import Login from "../pages/Login";
import ModuleSelection from "../pages/estudiantes/ModuleSelection";
import Result from "../pages/Result";
import SexualidadQuiz from "../pages/estudiantes/SexualidadQuiz";
import SexualidadRoute from "../pages/estudiantes/SexualidadRoute";
import SexualidadReading from "../pages/estudiantes/SexualidadReading";
import SexualidadDefinicion from "../pages/estudiantes/SexualidadDefinicion";
import SexualidadPreguntas from "../pages/estudiantes/SexualidadPreguntas";
import SexualidadMensaje from "../pages/estudiantes/SexualidadMensaje";
import HomeDocente from "../pages/docentes/HomeDocente";
import RutaDocente from "../pages/docentes/RutaDocente";
import EditProfile from "../pages/EditProfile";
import ChangePassword from "../pages/ChangePassword";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* --- RUTA PRINCIPAL (Selección de Rol) --- */}
                <Route path="/" element={<Login />} />
                
                {/* --- RUTAS GENERALES --- */}
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />

                {/* --- RUTAS DEL DOCENTE --- */}
                <Route path="/home_docente" element={<HomeDocente />} />
                <Route path="/ruta-docente" element={<RutaDocente />} />

                {/* --- RUTAS DEL ESTUDIANTE (JUEGO) --- */}
                <Route path="/play" element={<ModuleSelection />} />
                <Route path="/play/sexualidad" element={<SexualidadRoute />} />
                <Route path="/play/sexualidad/lectura" element={<SexualidadReading />} />
                <Route path="/play/sexualidad/desafio-1" element={<SexualidadQuiz />} />
                <Route path="/play/sexualidad/definicion" element={<SexualidadDefinicion />} />
                <Route path="/play/sexualidad/preguntas-personales" element={<SexualidadPreguntas />} />
                <Route path="/play/sexualidad/mensaje" element={<SexualidadMensaje />} />

                {/* --- RUTAS DE PERFIL Y SISTEMA --- */}
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/edit-profile/password" element={<ChangePassword />} />
                <Route path="/results" element={<Result />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import About from "../pages/About";
import ChangePassword from "../pages/ChangePassword";
import EditProfile from "../pages/EditProfile";
import Home from "../pages/estudiantes/Home";
import Login from "../pages/Login";
import ModuleSelection from "../pages/estudiantes/ModuleSelection";
import Ranking from "../pages/Ranking";
import Register from "../pages/Register";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";
import ResetPasswordRequest from "../pages/ResetPasswordRequest";
import Result from "../pages/Result";
import SexualidadQuiz from "../pages/estudiantes/SexualidadQuiz";
import SexualidadRoute from "../pages/estudiantes/SexualidadRoute";
import SexualidadReading from "../pages/estudiantes/SexualidadReading";
import SexualidadDefinicion from "../pages/estudiantes/SexualidadDefinicion";
import SexualidadPreguntas from "../pages/estudiantes/SexualidadPreguntas";
import SexualidadMensaje from "../pages/estudiantes/SexualidadMensaje";
import HomeDocente from "../pages/docentes/HomeDocente";
import RutaDocente from "../pages/docentes/RutaDocente";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* --- RUTAS DEL DOCENTE --- */}
                <Route path="/home_docente" element={<HomeDocente />} />
                <Route path="/ruta-docente" element={<RutaDocente />} />

                <Route path="/play" element={<ModuleSelection />} />
                <Route path="/play/sexualidad" element={<SexualidadRoute />} />
                <Route path="/play/sexualidad/lectura" element={<SexualidadReading />} />
                <Route path="/play/sexualidad/desafio-1" element={<SexualidadQuiz />} />

                {/* RUTAS DE FLUJO DE SEXUALIDAD */}
                <Route path="/play/sexualidad/definicion" element={<SexualidadDefinicion />} />
                <Route path="/play/sexualidad/preguntas-personales" element={<SexualidadPreguntas />} />
                <Route path="/play/sexualidad/mensaje" element={<SexualidadMensaje />} />

                {/* RUTAS DE SISTEMA */}
                <Route path="/forgot-password" element={<ResetPasswordRequest />} />
                <Route path="/password-reset/confirm/:token" element={<ResetPasswordConfirm />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/edit-profile/password" element={<ChangePassword />} />
                <Route path="/about" element={<About />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/results" element={<Result />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
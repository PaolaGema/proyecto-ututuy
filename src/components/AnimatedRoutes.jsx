import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";

// --- Imports de Estudiantes ---
import Home from "../pages/estudiantes/Home";
import QuizDiagnostico from "../pages/estudiantes/QuizDiagnostico"; // Importación de la nueva ventana
import ModuleSelection from "../pages/estudiantes/ModuleSelection";
import SexualidadQuiz from "../pages/estudiantes/SexualidadQuiz";
import SexualidadRoute from "../pages/estudiantes/SexualidadRoute";
import SexualidadReading from "../pages/estudiantes/SexualidadReading";
import SexualidadDefinicion from "../pages/estudiantes/SexualidadDefinicion";
import SexualidadPreguntas from "../pages/estudiantes/SexualidadPreguntas";
import SexualidadMensaje from "../pages/estudiantes/SexualidadMensaje";

// ─── COMPONENTES DE LECCIONES ESPECÍFICAS ───
import SexoReading from "../pages/estudiantes/Sexo_lectura1"; 
import Respuesta1Sexo from "../pages/estudiantes/Respuesta1_sexo";
import SexualidadDefinicionSexo from "../pages/estudiantes/SexualidadDefinicionSexo";

import GeneroReading from "../pages/estudiantes/Genero_lectura1"; 
import Respuesta1Genero from "../pages/estudiantes/Respuesta1_genero";

import ConsentimientoReading from "../pages/estudiantes/Consentimiento_lectura1"; 
import Respuesta1Consentimiento from "../pages/estudiantes/Respuesta1_consentimiento";

import LimitesReading from "../pages/estudiantes/Limites_lectura1"; 
import ViolenciaNoviazgoReading from "../pages/estudiantes/ViolenciaNoviazgo_lectura1"; 
import RelacionesSaludablesReading from "../pages/estudiantes/RelacionesSaludables_lectura1"; 

// --- Imports de Docentes ---
import HomeDocente from "../pages/docentes/HomeDocente";
import RutaDocente from "../pages/docentes/RutaDocente";

// --- Otros Imports ---
import Login from "../pages/Login";
import Result from "../pages/Result";
import EditProfile from "../pages/EditProfile";
import ChangePassword from "../pages/ChangePassword";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* --- RUTA PRINCIPAL --- */}
                <Route path="/" element={<Login />} />
                
                {/* --- RUTAS GENERALES --- */}
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/quiz-diagnostico" element={<QuizDiagnostico />} />

                {/* --- RUTAS DEL DOCENTE --- */}
                <Route path="/home_docente" element={<HomeDocente />} />
                <Route path="/ruta-docente" element={<RutaDocente />} />

                {/* --- RUTAS DEL ESTUDIANTE (MODULO SEXUALIDAD) --- */}
                <Route path="/play" element={<ModuleSelection />} />
                <Route path="/play/sexualidad" element={<SexualidadRoute />} />
                <Route path="/play/sexualidad/lectura" element={<SexualidadReading />} />
                <Route path="/play/sexualidad/desafio-1" element={<SexualidadQuiz />} />
                <Route path="/play/sexualidad/definicion" element={<SexualidadDefinicion />} />
                <Route path="/play/sexualidad/preguntas-personales" element={<SexualidadPreguntas />} />
                <Route path="/play/sexualidad/mensaje" element={<SexualidadMensaje />} />
                
                {/* Rutas: Sexo */}
                <Route path="/play/sexualidad/sexo_lectura1" element={<SexoReading />} />
                <Route path="/play/sexualidad/respuesta1_sexo" element={<Respuesta1Sexo />} />
                <Route path="/play/sexualidad/definicion_sexo" element={<SexualidadDefinicionSexo />} />

                {/* Rutas: Género */}
                <Route path="/play/sexualidad/genero_lectura1" element={<GeneroReading />} />
                <Route path="/play/sexualidad/respuesta1_genero" element={<Respuesta1Genero />} />

                {/* Rutas: Consentimiento */}
                <Route path="/play/sexualidad/consentimiento_lectura1" element={<ConsentimientoReading />} />
                <Route path="/play/sexualidad/respuesta1_consentimiento" element={<Respuesta1Consentimiento />} />

                {/* Rutas: Otros Temas */}
                <Route path="/play/sexualidad/limites_lectura1" element={<LimitesReading />} />
                <Route path="/play/sexualidad/violencia_noviazgo_lectura1" element={<ViolenciaNoviazgoReading />} />
                <Route path="/play/sexualidad/relaciones_saludables_lectura1" element={<RelacionesSaludablesReading />} />

                {/* --- RUTAS DE PERFIL Y SISTEMA --- */}
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/edit-profile/password" element={<ChangePassword />} />
                <Route path="/results" element={<Result />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
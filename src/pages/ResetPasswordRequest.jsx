import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fade, scrollFromRight } from "../animations/pageAnimations";
import Input from "../components/Input";
import ButtonPageBack from "../components/buttons/ButtonPageBack";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import { resetPasswordRequest } from "../services/authService";

function ResetPasswordRequest() {
    document.title = "Olvidaste tu contrasena? · Juego de Glécio";
    const [email, setEmail] = useState("");
    const [time, setTime] = useState(0);
    const [buttonIsLoading, setButtonIsLoading] = useState(false);

    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [time]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonIsLoading(true);

        try {
            const response = await resetPasswordRequest(email);

            setTime(40);
            setButtonIsLoading(false);

            if (response.status_code == 200) {
                toast.success(response.message, {
                    className: "bg-surface",
                });
            }
        } catch (error) {
            setButtonIsLoading(false);
            toast.error(
                error.message ||
                    "Error al enviar correo de recuperacion. Intenta de nuevo mas tarde",
                {
                    className: "bg-surface",
                }
            );
        }
    };

    return (
        <div className="overflow-hidden">
            <motion.div
                className="flex flex-col h-screen"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fade}
            >
                <ButtonPageBack to="/login" replace={true} absolute={true}>
                    Volver
                </ButtonPageBack>
                <div className="flex items-center justify-center flex-grow max-sm:items-start max-sm:mt-24">
                    <main className="max-w-sm max-[405px]:max-w-[86%] max-sm:p-4 p-8 rounded-lg sm:border-2 border-borderColor sm:bg-surface w-full sm:drop-shadow-lg">
                        <div className="space-y-2">
                            <p className="text-4xl font-black text-darkPurple">
                                Olvidaste tu contrasena?
                            </p>
                            <p className="text-purpleGray">
                                Ingresa el correo de tu perfil y te enviaremos
                                un enlace para restablecer la contrasena.
                            </p>
                        </div>
                        <form
                            className="mt-6 space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <Input
                                label="Ingresa tu correo"
                                placeholder="glecio@prof.ce.gov.br"
                                type="email"
                                name="email"
                                required={true}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <ButtonPrimary
                                disabled={time > 0}
                                isLoading={buttonIsLoading}
                            >
                                {time > 0
                                    ? `Reenviar correo en ${time}s`
                                    : "Enviar"}
                            </ButtonPrimary>
                        </form>
                    </main>
                </div>
            </motion.div>
        </div>
    );
}
export default ResetPasswordRequest;


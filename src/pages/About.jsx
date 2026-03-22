import ButtonPageBack from "../components/buttons/ButtonPageBack";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { fade } from "../animations/pageAnimations";
import { motion } from "framer-motion";

function About() {
    document.title = "Sobre el proyecto · Juego de Glécio";

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fade}
            onAnimationComplete={() =>
                document.body.classList.remove("no-scroll")
            }
        >
            <ButtonPageBack to="/" replace={true} absolute={true}>
                Volver
            </ButtonPageBack>
            <main className="max-w-4xl pt-20 p-6 h-full mx-auto space-y-8 content-center">
                <div className="space-y-4">
                    <h2 className="text-3xl text-darkPurple font-black">
                        Sobre el proyecto
                    </h2>
                    <p className="text-purpleGray">
                        Proyecto desarrollado para ayudar a los estudiantes de la EEEP
                        Elsa Maria Porto Costa Lima a dominar la tabla de multiplicar y,
                        asi, obtener una buena nota en las pruebas del profesor
                        Glécio. Desarrollado por Informatica 2022/24.
                    </p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl text-darkPurple font-black">
                        Desarrolladores
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <Developer
                            name="Lucas Davi"
                            role="Desarrollador Front-End"
                            avatarUrl="https://avatars.githubusercontent.com/u/116373520?s=400&v=4"
                            instagramUrl="https://www.instagram.com/l.daavii/"
                            githubUrl="https://github.com/ldavi05"
                            linkedinUrl=""
                        />
                        <Developer
                            name="Luiz Leal"
                            role="Desarrollador Back-End y DBA"
                            avatarUrl="https://avatars.githubusercontent.com/u/116567691?s=400&v=4"
                            instagramUrl="https://www.instagram.com/luizleal.dev"
                            githubUrl="https://github.com/luizlealdev"
                            linkedinUrl=""
                        />
                        <Developer
                            name="Mateus Ferreira"
                            role="Desarrollador Front-End y Disenador UI/UX"
                            avatarUrl="https://avatars.githubusercontent.com/u/121569308?s=400&v=4"
                            instagramUrl="https://www.instagram.com/mateusf.53/"
                            githubUrl="https://github.com/ldavi05"
                            linkedinUrl=""
                        />
                    </div>
                </div>
            </main>
        </motion.div>
    );
}
export default About;

const Developer = ({
    name,
    role,
    avatarUrl,
    githubUrl,
    instagramUrl,
    linkedinUrl,
}) => {
    //const mobileRoleText = role.split("&");

    return (
        <div className="relative w-full min-w-60 bg-surface overflow-hidden rounded-xl shadow-md hover:-translate-y-2 transition-all ease-in-out">
            <img src={avatarUrl} alt={`Imagen de ${name}`} className="w-full bg-skeletonLoadingBase" />
            <div className="p-3">
                <p className="text-2xl font-medium text-purpleDarkGray" title={name}>
                    {name}
                </p>
                <span className="block w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis" title={role}>
                    {role}
                </span>
                <div className="flex gap-2 mt-1">
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                    >
                        <FaInstagram className="w-5 h-5 hover:text-purpleDarkGray hover:scale-110 transition-all ease-in-out" />
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github"
                    >
                        <FaGithub className="w-5 h-5 hover:text-purpleDarkGray hover:scale-110 transition-all ease-in-out" />
                    </a>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <FaLinkedin className="w-5 h-5 hover:text-purpleDarkGray hover:scale-110 transition-all ease-in-out" />
                    </a>
                </div>
            </div>
        </div>
    );
};

/*const Developer = ({
    name,
    role,
    avatarUrl,
    githubUrl,
    instagramUrl,
    linkedinUrl,
}) => {
    const mobileRoleText = role.split("&");
    return (
        <div className="flex gap-3 items-center">
            <img
                src={avatarUrl}
                alt={`Imagen de ${name}`}
                className="rounded-full bg-skeletonLoadingBase w-28 h-28"
            />
            <div className="flex flex-col">
                <p className="text-2xl font-medium text-purpleDarkGray">
                    {name}
                </p>
                <span>
                    {window.innerWidth < 768 ? mobileRoleText[0] : role}
                </span>
                <div className="flex gap-2">
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                    >
                        <FaInstagram className="w-6 h-6 hover:text-purpleDarkGray transition-all ease-in-out hover:scale-110" />
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github"
                    >
                        <FaGithub className="w-6 h-6 hover:text-purpleDarkGray transition-all ease-in-out hover:scale-110" />
                    </a>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <FaLinkedin className="w-6 h-6 hover:text-purpleDarkGray transition-all ease-in-out hover:scale-110" />
                    </a>
                </div>
            </div>
        </div>
    );
};*/


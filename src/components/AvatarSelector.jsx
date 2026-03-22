import { useEffect, useRef, useState } from "react";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import SelectedIndicator from "../assets/images/elements/selected-indicator.svg";

const AvatarSelector = ({
    label,
    avatarsList,
    selectedAvatarIndex,
    onSelect,
}) => {
    const [selectedAvatar, setSelectedAvatar] = useState(
        selectedAvatarIndex ?? null
    );
    const [showGradientEnd, setShowGradientEnd] = useState(true);
    const [showGradientStart, setShowGradientStart] = useState(false);
    const containerRef = useRef(null);

    const isLoading = !avatarsList || avatarsList.length === 0;

    // 1. Sincroniza la seleccion cuando cambia la prop externa
    useEffect(() => {
        if (selectedAvatarIndex !== undefined) {
            setSelectedAvatar(selectedAvatarIndex);
        }
    }, [selectedAvatarIndex]);

    // 2. Logica de scroll automatico para el item seleccionado
    useEffect(() => {
        if (!isLoading && selectedAvatar && containerRef.current) {
            // El timeout garantiza que el DOM ya se renderizo antes de buscar el elemento
            const timeoutId = setTimeout(() => {
                const selectedElement = containerRef.current.querySelector(
                    `[data-id="avatar-${selectedAvatar}"]`
                );

                if (selectedElement) {
                    selectedElement.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest", // Evita scroll vertical no deseado en la pagina
                        inline: "center",  // Centra el avatar en el contenedor horizontal
                    });
                }
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [selectedAvatar, isLoading]);

    // 3. Monitorea el scroll manual para mostrar/ocultar los gradientes laterales
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const isAtEnd =
                container.scrollLeft + container.offsetWidth >=
                container.scrollWidth - 20;
            const isAtStart = container.scrollLeft > 25;

            setShowGradientEnd(!isAtEnd);
            setShowGradientStart(isAtStart);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            // Ejecuta una vez al montar para definir el estado inicial
            handleScroll(); 
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, [isLoading]);

    const scrollContainer = (direction) => {
        const container = containerRef.current;
        if (!container) return;

        const scrollAmount = 300;
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    const handleAvatarClick = (avatarId) => {
        setSelectedAvatar(avatarId);
        onSelect?.(avatarId);
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-center mb-2">
                <span className="text-darkGray text-sm font-medium">{label}</span>
                <div className="flex justify-between gap-2 max-sm:hidden">
                    <HiMiniChevronLeft
                        className="w-6 h-6 cursor-pointer hover:scale-125 transition-all text-gray-600"
                        onClick={() => scrollContainer("left")}
                    />
                    <HiMiniChevronRight
                        className="w-6 h-6 cursor-pointer hover:scale-125 transition-all text-gray-600"
                        onClick={() => scrollContainer("right")}
                    />
                </div>
            </div>

            <div className="relative group">
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto whitespace-nowrap h-[75px] items-center scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {isLoading ? (
                        <SkeletonTheme
                            baseColor="var(--skeleton-loading-base)"
                            highlightColor="var(--skeleton-loading-highlight)"
                        >
                            {Array.from({ length: 15 }).map((_, index) => (
                                <Skeleton
                                    key={index}
                                    circle
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                />
                            ))}
                        </SkeletonTheme>
                    ) : (
                        avatarsList.map((avatar) => (
                            <div
                                key={avatar.id}
                                data-id={`avatar-${avatar.id}`} // Identificador para o scroll
                                onClick={() => handleAvatarClick(avatar.id)}
                                className="w-16 h-16 flex-none mr-3 cursor-pointer relative transition-transform active:scale-95"
                            >
                                <img
                                    className={`h-full w-full rounded-full bg-skeletonLoadingHighlight object-cover select-none border-2 ${
                                        selectedAvatar === avatar.id ? 'border-primary' : 'border-transparent'
                                    }`}
                                    src={avatar.path_256px}
                                    alt={`Avatar ${avatar.id}`}
                                />
                                {/*Fue necesario parsear a string*/}
                                {String(selectedAvatar) === String(avatar.id) && (
                                    <img
                                        src={SelectedIndicator}
                                        alt="Selected"
                                        className="absolute w-full h-full top-0 left-0 pointer-events-none select-none z-10"
                                    />
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Gradientes para indicar scroll */}
                {showGradientStart && (
                    <div className="absolute top-0 left-0 h-full w-12 pointer-events-none bg-gradient-to-l from-transparent to-surface z-20" />
                )}
                {showGradientEnd && (
                    <div className="absolute top-0 right-0 h-full w-12 pointer-events-none bg-gradient-to-r from-transparent to-surface z-20" />
                )}
            </div>
        </div>
    );
};

export default AvatarSelector;

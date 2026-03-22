import { jwtDecode } from "jwt-decode";

export const isTokenExpiringSoon = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        const timeRemaining = decoded.exp - currentTime;

        return timeRemaining < 86400;
    } catch (error) {
        console.error("Error al decodificar el token:", error);
        return true;
    }
};

export const isValidJWT = (token) => {
    if (typeof token !== 'string') {
        return false;
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
        return false; // Un token JWT debe tener exactamente 3 partes
    }

    try {
        // Funcion para decodificar Base64URL
        const decodeBase64URL = (str) => {
            const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
            const padding = '='.repeat((4 - (base64.length % 4)) % 4); // Agrega padding si es necesario
            const base64WithPadding = base64 + padding;

            // Usar atob para decodificar Base64 en el navegador
            return atob(base64WithPadding);
        };

        // Decodifica y valida las partes del token
        const [header, payload, signature] = parts;

        decodeBase64URL(header);
        decodeBase64URL(payload);

        // La firma no necesita decodificarse, pero debe existir
        if (!signature) {
            return false;
        }

        return true; // Todas las partes son validas
    } catch (error) {
        console.error('Error al verificar token JWT:', error);
        return false;
    }
};


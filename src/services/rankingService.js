import Cookies from "js-cookie";
import { USE_MOCK_API } from "./serviceConfig";
import {
    mockGetRankingGlobal,
    mockGetRankingNormal,
    mockResetRanking,
    mockSetRanking,
} from "./mockApiService";

const baseURL = "https://api-tabuada-glecio.vercel.app/api/v1/ranking";

export const getRankingNormal = async () => {
    try {
        if (USE_MOCK_API) {
            const body = await mockGetRankingNormal();
            return body.data;
        }

        const response = await fetch(`${baseURL}/normal`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });

        const body = await response.json();

        if (!response.ok) {
            throw new Error(body.message || "Error al listar el ranking");
        }

        return body.data;
    } catch (error) {
        throw error;
    }
};

export const getRankingGlobal = async () => {
    try {
        if (USE_MOCK_API) {
            const body = await mockGetRankingGlobal();
            return body.data;
        }

        const response = await fetch(`${baseURL}/global`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });

        const body = await response.json();

        if (!response.ok) {
            throw new Error(body.message || "Error al listar el ranking");
        }

        return body.data;
    } catch (error) {
        throw error;
    }
};

export const setRanking = async (score, attempt = 0) => {
    try {
        if (USE_MOCK_API) {
            return await mockSetRanking(score);
        }

        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
            body: JSON.stringify({ score }),
        });

        const body = await response.json();

        if (!response.ok) {
            if (attempt <= 3) {
                setRanking(score, attempt + 1);

                console.warn("Request failed, trying again...");
            } else {
                throw new Error(
                    body.message || "Error al enviar puntos al ranking",
                );
            }
        }

        return body;
    } catch (error) {
        throw error;
    }
};

export const resetRanking = async () => {
    try {
        if (USE_MOCK_API) {
            return await mockResetRanking();
        }

        const response = await fetch(baseURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });

        const body = await response.json();

        if (!response.ok) {
            throw new Error(body.message || "Error al reiniciar el ranking");
        }

        return body;
    } catch (error) {
        throw error;
    }
};


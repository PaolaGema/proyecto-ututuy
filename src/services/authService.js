import Cookies from "js-cookie";

import { setLocalUserInfo } from "../utils/userUtils";
import { USE_MOCK_API } from "./serviceConfig";
import {
    mockCreateUser,
    mockLoginUser,
    mockResetPasswordConfirm,
    mockResetPasswordRequest,
} from "./mockApiService";

const baseURL = "https://api-tabuada-glecio.vercel.app/api/v1/auth";
const MOCK_DB_STORAGE_KEY = "jogo-do-glecio-mock-db-v1";
const MOCK_RESET_TOKEN_KEY = "mock-last-reset-token";

const persistSession = (data) => {
    Cookies.set("token", data.access_token, {
        expires: 15,
        secure: true,
        sameSite: "strict",
    });

    setLocalUserInfo({
        id: data.user.id,
        name: data.user.name,
        courseId: data.user.course_id,
        course: data.user.course.name,
        avatarId: data.user.avatar_id,
        avatarDefault: data.user.avatar.path_default,
        avatarMedium: data.user.avatar.path_256px,
        avatarLow: data.user.avatar.path_128px,
        maxScore: Number(data.user.max_score || 0),
        isAdmin: data.user.is_admin,
    });
};

export const createUser = async (userData) => {
    try {
        let body;

        if (USE_MOCK_API) {
            body = await mockCreateUser(userData);
        } else {
            const response = await fetch(`${baseURL}/local/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            body = await response.json();

            if (!response.ok) {
                const error = new Error(
                    body.message || "Error al registrar usuario",
                );
                error.statusCode = body.status_code || 500;

                throw error;
            }
        }

        const { data } = body;
        persistSession(data);

        return data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        let body;

        if (USE_MOCK_API) {
            body = await mockLoginUser(credentials);
        } else {
            const response = await fetch(`${baseURL}/local/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            body = await response.json();

            if (!response.ok || body.status_code != 200) {
                const error = Error(body.message || "Error de autenticacion");
                error.statusCode = body.status_code || 500;

                throw error;
            }
        }

        const { data } = body;
        persistSession(data);

        return data;
    } catch (error) {
        throw error;
    }
};

export const logoutUser = () => {
    let mockDbSnapshot = null;
    let mockResetTokenSnapshot = null;

    if (USE_MOCK_API) {
        mockDbSnapshot = localStorage.getItem(MOCK_DB_STORAGE_KEY);
        mockResetTokenSnapshot = localStorage.getItem(MOCK_RESET_TOKEN_KEY);
    }

    localStorage.clear();

    if (USE_MOCK_API) {
        if (mockDbSnapshot) {
            localStorage.setItem(MOCK_DB_STORAGE_KEY, mockDbSnapshot);
        }

        if (mockResetTokenSnapshot) {
            localStorage.setItem(MOCK_RESET_TOKEN_KEY, mockResetTokenSnapshot);
        }
    }

    Cookies.remove("token");
    window.location.href = "/login";
};

export const resetPasswordRequest = async (email) => {
    try {
        if (USE_MOCK_API) {
            return await mockResetPasswordRequest(email);
        }

        const response = await fetch(`${baseURL}/password-reset/request`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "Error al intentar enviar correo de recuperacion",
            );
        }

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const resetPasswordConfirm = async (token, newPassword) => {
    try {
        if (USE_MOCK_API) {
            return await mockResetPasswordConfirm(token, newPassword);
        }

        const response = await fetch(`${baseURL}/password-reset/confirm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ new_password: newPassword }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Error al restablecer la contrasena");
        }

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


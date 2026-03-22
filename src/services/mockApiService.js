import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const STORAGE_KEY = "jogo-do-glecio-mock-db-v1";
const MOCK_DELAY_MS = 120;
const TOKEN_DURATION_SECONDS = 60 * 60 * 24 * 15;
const RESET_TOKEN_DURATION_SECONDS = 60 * 30;

let memoryDb = null;

const sleep = (ms = MOCK_DELAY_MS) =>
    new Promise((resolve) => setTimeout(resolve, ms));

const toBase64 = (value) => {
    if (typeof btoa === "function") {
        return btoa(value);
    }

    throw new Error("Base64 encoding is not available in this environment.");
};

const toBase64Url = (value) =>
    toBase64(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");

const createJwt = (payload, signature = "mock-signature") => {
    const header = { alg: "HS256", typ: "JWT" };
    const encodedHeader = toBase64Url(JSON.stringify(header));
    const encodedPayload = toBase64Url(JSON.stringify(payload));
    const encodedSignature = toBase64Url(signature);

    return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
};

const buildError = (message, statusCode = 500) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.status_code = statusCode;

    return error;
};

const normalizeEmail = (email = "") => email.trim().toLowerCase();

const getDefaultAvatars = () => {
    const avatars = [];

    for (let i = 1; i <= 8; i += 1) {
        avatars.push({
            id: i,
            path_default: `/android-chrome-192x192.png?avatar=${i}`,
            path_256px: `/android-chrome-192x192.png?avatar=${i}`,
            path_128px: `/android-chrome-192x192.png?avatar=${i}`,
        });
    }

    return avatars;
};

const buildInitialDb = () => {
    const courses = [
        { id: 1, name: "1er Ano - Informatica" },
        { id: 2, name: "2do Ano - Informatica" },
        { id: 3, name: "3er Ano - Informatica" },
    ];

    const users = [
        {
            id: 1,
            name: "Administrador",
            email: "admin@glecio.local",
            password: "1234",
            course_id: 3,
            avatar_id: 1,
            max_score: 32,
            is_admin: true,
        },
        {
            id: 2,
            name: "Lucas",
            email: "lucas@glecio.local",
            password: "1234",
            course_id: 2,
            avatar_id: 2,
            max_score: 24,
            is_admin: false,
        },
        {
            id: 3,
            name: "Ana",
            email: "ana@glecio.local",
            password: "1234",
            course_id: 2,
            avatar_id: 3,
            max_score: 27,
            is_admin: false,
        },
    ];

    return {
        version: 1,
        users,
        courses,
        avatars: getDefaultAvatars(),
        ranking_by_user: {
            1: 32,
            2: 24,
            3: 27,
        },
        password_reset_tokens: {},
        next_user_id: 4,
    };
};

const parseDb = (rawValue) => {
    try {
        const parsed = JSON.parse(rawValue);

        if (!parsed || typeof parsed !== "object") {
            return null;
        }

        return parsed;
    } catch {
        return null;
    }
};

const canUseLocalStorage = () =>
    typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const readDb = () => {
    if (!canUseLocalStorage()) {
        if (!memoryDb) {
            memoryDb = buildInitialDb();
        }

        return memoryDb;
    }

    const rawValue = window.localStorage.getItem(STORAGE_KEY);
    const parsedDb = rawValue ? parseDb(rawValue) : null;

    if (parsedDb) {
        return parsedDb;
    }

    const defaultDb = buildInitialDb();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDb));

    return defaultDb;
};

const writeDb = (db) => {
    if (!canUseLocalStorage()) {
        memoryDb = db;
        return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
};

const getCourseById = (db, courseId) =>
    db.courses.find((course) => Number(course.id) === Number(courseId));

const getAvatarById = (db, avatarId) =>
    db.avatars.find((avatar) => Number(avatar.id) === Number(avatarId));

const sanitizeUser = (db, user) => {
    const course = getCourseById(db, user.course_id) || db.courses[0];
    const avatar = getAvatarById(db, user.avatar_id) || db.avatars[0];

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        course_id: course.id,
        avatar_id: avatar.id,
        max_score: Number(user.max_score || 0),
        is_admin: Boolean(user.is_admin),
        course: {
            id: course.id,
            name: course.name,
        },
        avatar: {
            id: avatar.id,
            path_default: avatar.path_default,
            path_256px: avatar.path_256px,
            path_128px: avatar.path_128px,
        },
    };
};

const getCurrentUser = (db) => {
    const token = Cookies.get("token");

    if (!token) {
        throw buildError("Debes estar autenticado.", 401);
    }

    let payload;
    try {
        payload = jwtDecode(token);
    } catch {
        throw buildError("Token invalido.", 401);
    }

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp <= now) {
        throw buildError("Tu sesion expiro. Inicia sesion de nuevo.", 401);
    }

    const userId = Number(payload.sub);
    const user = db.users.find((item) => Number(item.id) === userId);

    if (!user) {
        throw buildError("Usuario autenticado no encontrado.", 401);
    }

    return user;
};

const buildRanking = (db, users) => {
    return users
        .map((user) => {
            const score =
                db.ranking_by_user[user.id] !== undefined
                    ? Number(db.ranking_by_user[user.id])
                    : Number(user.max_score || 0);

            return {
                score,
                user: {
                    id: user.id,
                    name: user.name,
                    avatar: sanitizeUser(db, user).avatar,
                    course: sanitizeUser(db, user).course,
                },
            };
        })
        .sort((a, b) => b.score - a.score || a.user.name.localeCompare(b.user.name));
};

const assertValidCourseAndAvatar = (db, courseId, avatarId) => {
    if (!getCourseById(db, courseId)) {
        throw buildError("Curso invalido.", 400);
    }

    if (!getAvatarById(db, avatarId)) {
        throw buildError("Avatar invalido.", 400);
    }
};

export const mockCreateUser = async (userData) => {
    await sleep();
    const db = readDb();

    const email = normalizeEmail(userData.email);
    const name = (userData.name || "").trim();
    const password = userData.password || "";
    const courseId = Number(userData.course_id);
    const avatarId = Number(userData.avatar_id);

    if (!name || !email || !password || !courseId || !avatarId) {
        throw buildError("Completa todos los campos obligatorios.", 400);
    }

    if (password.length < 4) {
        throw buildError("La contrasena debe tener al menos 4 caracteres.", 406);
    }

    const existingUser = db.users.find(
        (user) => normalizeEmail(user.email) === email,
    );

    if (existingUser) {
        throw buildError("Este correo ya esta registrado.", 409);
    }

    assertValidCourseAndAvatar(db, courseId, avatarId);

    const newUser = {
        id: db.next_user_id,
        name,
        email,
        password,
        course_id: courseId,
        avatar_id: avatarId,
        max_score: 0,
        is_admin: false,
    };

    db.users.push(newUser);
    db.ranking_by_user[newUser.id] = 0;
    db.next_user_id += 1;
    writeDb(db);

    const now = Math.floor(Date.now() / 1000);
    const accessToken = createJwt({
        sub: String(newUser.id),
        exp: now + TOKEN_DURATION_SECONDS,
        iss: "mock-api",
        type: "access",
    });

    return {
        status_code: 201,
        message: "Perfil creado con exito.",
        data: {
            access_token: accessToken,
            user: sanitizeUser(db, newUser),
        },
    };
};

export const mockLoginUser = async (credentials) => {
    await sleep();
    const db = readDb();

    const email = normalizeEmail(credentials.email);
    const password = credentials.password || "";

    const user = db.users.find((item) => normalizeEmail(item.email) === email);

 /*    if (!user) {
        throw buildError("Usuario no encontrado.", 404);
    }

    if (user.password !== password) {
        throw buildError("Contrasena incorrecta.", 401);
    } */

    const now = Math.floor(Date.now() / 1000);
    const accessToken = createJwt({
        sub: String(user.id),
        exp: now + TOKEN_DURATION_SECONDS,
        iss: "mock-api",
        type: "access",
    });

    return {
        status_code: 200,
        message: "Inicio de sesion exitoso.",
        data: {
            access_token: accessToken,
            user: sanitizeUser(db, user),
        },
    };
};

export const mockResetPasswordRequest = async (emailInput) => {
    await sleep();
    const db = readDb();

    const email = normalizeEmail(emailInput);
    const user = db.users.find((item) => normalizeEmail(item.email) === email);

    if (!user) {
        return {
            status_code: 200,
            message:
                "Si el correo esta registrado, recibiras un enlace de recuperacion.",
        };
    }

    const now = Math.floor(Date.now() / 1000);
    const token = createJwt({
        sub: String(user.id),
        exp: now + RESET_TOKEN_DURATION_SECONDS,
        iss: "mock-api",
        type: "password-reset",
    });

    db.password_reset_tokens[token] = user.id;
    writeDb(db);

    if (canUseLocalStorage()) {
        window.localStorage.setItem("mock-last-reset-token", token);
    }

    return {
        status_code: 200,
        message:
            "Solicitud recibida. Para pruebas locales, el token se guardo en localStorage como mock-last-reset-token.",
        data: {
            token,
        },
    };
};

export const mockResetPasswordConfirm = async (token, newPassword) => {
    await sleep();
    const db = readDb();

    /* if (!token || !db.password_reset_tokens[token]) {
        throw buildError("Token de restablecimiento invalido o expirado.", 401);
    }

    const userId = Number(db.password_reset_tokens[token]);
    const user = db.users.find((item) => Number(item.id) === userId);

    if (!user) {
        throw buildError("Usuario no encontrado.", 404);
    } */

    user.password = newPassword;
    delete db.password_reset_tokens[token];
    writeDb(db);

    return {
        status_code: 200,
        message: "Contrasena restablecida con exito.",
    };
};

export const mockGetUser = async (userId) => {
    await sleep();
    const db = readDb();
    const currentUser = getCurrentUser(db);

    /* const targetUser = db.users.find((user) => Number(user.id) === Number(userId));

    if (!targetUser) {
        throw buildError("Usuario no encontrado.", 404);
    }

    if (!currentUser.is_admin && Number(currentUser.id) !== Number(targetUser.id)) {
        throw buildError("No tienes permiso para acceder a este usuario.", 403);
    } */

    return {
        status_code: 200,
        data: sanitizeUser(db, targetUser),
    };
};

export const mockUpdateUser = async (newData) => {
    await sleep();
    const db = readDb();
    const currentUser = getCurrentUser(db);

    const courseId =
        newData.course_id !== undefined
            ? Number(newData.course_id)
            : Number(currentUser.course_id);
    const avatarId =
        newData.avatar_id !== undefined
            ? Number(newData.avatar_id)
            : Number(currentUser.avatar_id);

    assertValidCourseAndAvatar(db, courseId, avatarId);

    currentUser.name =
        newData.name !== undefined ? String(newData.name).trim() : currentUser.name;
    currentUser.course_id = courseId;
    currentUser.avatar_id = avatarId;

    writeDb(db);

    return {
        status_code: 200,
        message: "Informacion actualizada con exito.",
        data: sanitizeUser(db, currentUser),
    };
};

export const mockUpdateUserPassword = async (credentials) => {
    await sleep();
    const db = readDb();
    const currentUser = getCurrentUser(db);

    if (currentUser.password !== credentials.old_password) {
        throw buildError("Contrasena actual incorrecta.", 401);
    }

    if (!credentials.new_password || credentials.new_password.length < 4) {
        throw buildError("La nueva contrasena debe tener al menos 4 caracteres.", 406);
    }

    currentUser.password = credentials.new_password;
    writeDb(db);

    return {
        status_code: 200,
        message: "Contrasena actualizada con exito.",
    };
};

export const mockGetAvatarsList = async () => {
    await sleep();
    const db = readDb();

    return {
        status_code: 200,
        data: db.avatars,
    };
};

export const mockGetCoursesList = async () => {
    await sleep();
    const db = readDb();

    return {
        status_code: 200,
        data: db.courses,
    };
};

export const mockGetRankingNormal = async () => {
    await sleep();
    const db = readDb();
    const currentUser = getCurrentUser(db);

    const usersFromSameCourse = db.users.filter(
        (user) => Number(user.course_id) === Number(currentUser.course_id),
    );

    return {
        status_code: 200,
        data: buildRanking(db, usersFromSameCourse),
    };
};

export const mockGetRankingGlobal = async () => {
    await sleep();
    const db = readDb();
    getCurrentUser(db);

    return {
        status_code: 200,
        data: buildRanking(db, db.users),
    };
};

export const mockSetRanking = async (scoreInput) => {
    await sleep();
    const db = readDb();
    const currentUser = getCurrentUser(db);

    const numericScore = Number(scoreInput);

    if (Number.isNaN(numericScore)) {
        throw buildError("Puntuacion invalida.", 400);
    }

    const oldScore =
        db.ranking_by_user[currentUser.id] !== undefined
            ? Number(db.ranking_by_user[currentUser.id])
            : Number.NEGATIVE_INFINITY;
    const bestScore = Math.max(oldScore, numericScore);

    db.ranking_by_user[currentUser.id] = bestScore;
    currentUser.max_score = Math.max(Number(currentUser.max_score || 0), bestScore);
    writeDb(db);

    return {
        status_code: 201,
        message: "Puntuacion registrada con exito.",
        data: {
            score: bestScore,
        },
    };
};

export const mockResetRanking = async () => {
    await sleep();
    const db = readDb();
    const currentUser = getCurrentUser(db);

    if (!currentUser.is_admin) {
        throw buildError("No tienes permiso para reiniciar el ranking.", 403);
    }

    db.ranking_by_user = {};
    writeDb(db);

    return {
        status_code: 200,
        message: "Ranking reiniciado con exito.",
    };
};


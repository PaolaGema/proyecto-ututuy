# 🧠 Juego de Glécio
![GitHub Repo stars](https://img.shields.io/github/stars/mateus-f/jogo-do-glecio)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/mateus-f/jogo-do-glecio/main)
![GitHub contributors](https://img.shields.io/github/contributors/mateus-f/jogo-do-glecio)
![GitHub License](https://img.shields.io/github/license/mateus-f/jogo-do-glecio)

**Un juego educativo que fortalece el razonamiento lógico mediante la tabla de multiplicar, inspirado en una práctica escolar real.**

[🔗 Accede a la versión online](https://jogo-do-glecio.vercel.app)

## 📚 Sobre el Proyecto

El **Juego de Glécio** es una adaptación digital de una dinámica creada por el profesor Glécio en la secundaria. La versión original consistía en desafíos orales de tabla de multiplicar, donde los estudiantes anotaban las respuestas para su posterior corrección. Este proyecto lleva esa práctica al mundo digital, haciéndola accesible para cualquier estudiante, en cualquier lugar y en cualquier momento.

## 📑 Tabla de Contenidos

- [📚 Sobre el Proyecto](#-sobre-el-proyecto)
- [🎮 Funcionalidades](#-funcionalidades)
- [🖥️ Demostración](#️-demostración)
- [🖼️ Capturas de Pantalla](#️-capturas-de-pantalla)
- [⚙️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🛠️ Cómo Ejecutar Localmente](#️-cómo-ejecutar-localmente)
- [📄 Licencia](#-licencia)

## 🎮 Funcionalidades

- ⏱️ Tiempo límite para respuestas
- 🏆 Ranking local y global
- ⭐ Registro de la mejor puntuación
- 🕺 Animaciones interactivas
- 📱 Diseño responsivo

## 🖥️ Demostración

👉 Accede: [https://jogo-do-glecio.vercel.app](https://jogo-do-glecio.vercel.app)

## 🖼️ Capturas de Pantalla

![mockup-glecio](https://github.com/user-attachments/assets/200fa563-f257-47d7-9a77-313e4a72440e)

## ⚙️ Tecnologías Utilizadas

[![Repository's technologies](https://skillicons.dev/icons?i=react,nestjs,typescript,mysql,prisma,tailwind,vite,vercel,figma)](https://skillicons.dev)

## 🛠️ Cómo Ejecutar Localmente

```bash
# Clona el repositorio
git clone https://github.com/mateus-f/jogo-do-glecio.git
cd jogo-do-glecio

# Instala las dependencias
npm install

# (Opcional) elige el modo de datos
# Solo frontend (mock local): por defecto cuando VITE_USE_MOCK_API no está definido
# API real:
# VITE_USE_MOCK_API=false

# Inicia el servidor local
npm run dev
```

## 🧪 Modo Solo Frontend (Sin API)

Cuando `VITE_USE_MOCK_API` está activo (por defecto), el proyecto funciona completamente en frontend con datos en `localStorage`, manteniendo las mismas funciones de servicios para facilitar volver al backend después.

Credenciales de prueba (mock):

- Admin: `admin@glecio.local` / `1234`
- Alumno: `lucas@glecio.local` / `1234`

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://github.com/mateus-f/jogo-do-glecio/blob/main/LICENSE)


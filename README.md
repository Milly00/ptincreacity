# Marketplace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Requisitos
- Node.js 18+
- Angular CLI

## Servidor de desarrollo

Para correr el proyecto de manera local:

```bash
ng serve
```

## Compilar proyecto

Para construir el proyecto:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Compilar PWA

ng build --configuration production
npx http-server -p 8080 ./dist/frontend

## Additional Resources

## Angular Material

Angular Material (ng add @angular/material) [https://material.angular.dev/guide/getting-started]
Libreria propia de angular usada para algunos componentes como inputs, selects y dialogs

## Angular PWA

Libreria de angular para la construcción de la PWA, la cual realiza modificaciones en los archivos, añadiendo aquellos relacionados con service worker

## Dexie.js

npm install dexie [https://dexie.org/docs/Tutorial/Angular]

Biblioteca JavaScript que facilita la interacción con la API de IndexedDB en Angular

## NOTA

Antes de ejecutar el servidor, primero instalar los paquetes de node con (npm i)

El funcionamiento de pwa solo se logra primero construyendo la app con (ng build --configuration=production) y ejecutando un server con ayuda de http-server (npx http-server -p 8081 -c-1 dist/marketplace/browser) si no esta instalado generara error

# PWA con sincronización offline/online

## 🚀 Tecnologías utilizadas
- **Angular**: como frontend PWA
- **Dexie.js**: wrapper para IndexedDB
- **Service Worker**: para caché offline
- **Node.js + Express**: backend REST API

## 💡 Justificación de las tecnologías
- Angular permite crear una PWA con soporte nativo para service workers.
- Dexie simplifica el manejo de IndexedDB para guardar datos offline.
- Node.js con Express es ligero y fácil de integrar con Angular.

## 🔄 Sincronización offline/online

### ¿Cómo funciona?
1. Cuando no hay conexión, las peticiones (POST/PUT/DELETE) se guardan en IndexedDB con Dexie.
2. Al detectar que el usuario volvió a estar online, las peticiones se envían automáticamente al backend.
3. Si la petición se envía correctamente, se borra de la base local.
4. Se muestra una notificación al usuario indicando qué se envió.

### Almacenamiento local
Se usa `IndexedDB` vía Dexie para guardar:
- URL
- Método
- Cuerpo de la petición
- Descripción legible para mostrar en notificaciones

### Reintentos y manejo de errores
- El `syncService` intenta reenviar las peticiones automáticamente al reconectar.
- Si alguna falla, se mantiene en la base hasta que sea exitosa.
- Se puede forzar sincronización con un botón.

## 📸 Evidencia
Ver carpeta anexos.

## 🧠 Diagrama de Arquitectura
Ver anexos

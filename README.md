# Marketplace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

Para correr el proyecto de manera local:

```bash
ng serve
```

## Building

Para construir el proyecto:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


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
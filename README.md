# QuackTrack AI Sport

Plataforma premium de gestión deportiva, seguimiento de rendimiento y torneos.

## Requisitos Previos
*   Node.js (v18 o superior recomendado)
*   npm, yarn o pnpm

## Instalación y Desarrollo Local

1.  **Instalar dependencias:**
    Abre una terminal en la raíz del proyecto y ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:3000` (o el puerto asignado por Vite).

## Construcción para Producción

Para generar los archivos estáticos optimizados para producción, ejecuta:

```bash
npm run build
```
Los archivos generados se encontrarán en la carpeta `dist/`. Estos son los archivos que subirás a tu servidor de hosting.

## Instrucciones de Despliegue

Esta aplicación está construida con React y Vite, lo que la hace compatible con la mayoría de los servicios de alojamiento web estático modernos.

### Opción 1: Vercel (Recomendado y más fácil)
1. Crea una cuenta gratuita en [Vercel](https://vercel.com/).
2. Instala la CLI de Vercel (opcional): `npm i -g vercel`
3. Ejecuta `vercel` en la raíz del proyecto y sigue las instrucciones.
*Alternativa:* Conecta tu repositorio de GitHub directamente en el panel de Vercel. Vercel detectará automáticamente que es un proyecto Vite y configurará el comando de build (`npm run build`) y el directorio de salida (`dist`).

### Opción 2: Netlify
1. Crea una cuenta en [Netlify](https://www.netlify.com/).
2. En tu panel de control, ve a "Sites" y arrastra la carpeta `dist/` (generada tras ejecutar `npm run build`).
*Alternativa:* Conecta tu repositorio de GitHub para despliegue continuo. 
*   **Build command:** `npm run build`
*   **Publish directory:** `dist`

### Opción 3: Firebase Hosting
1. Instala las herramientas de Firebase globalmente: 
   ```bash
   npm install -g firebase-tools
   ```
2. Inicia sesión en tu cuenta de Google: 
   ```bash
   firebase login
   ```
3. Inicializa el proyecto en la raíz de tu código: 
   ```bash
   firebase init hosting
   ```
   *   Selecciona tu proyecto de Firebase (o crea uno nuevo).
   *   ¿Qué quieres usar como directorio público? Escribe: `dist`
   *   ¿Configurar como single-page app (reescribir todas las urls a /index.html)? Escribe: `Sí` (Y)
   *   ¿Configurar despliegues automáticos con GitHub? `No` (N)
4. Construye y despliega:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### Opción 4: Google Cloud Run o Docker
Si necesitas servirlo mediante un contenedor Docker (por ejemplo, para Cloud Run):
1. Crea un archivo `Dockerfile` en la raíz que construya la app y la sirva con un servidor web ligero como Nginx.
2. Construye la imagen: 
   ```bash
   docker build -t quacktrack-app .
   ```
3. Sube la imagen a tu registro de contenedores (ej. Google Artifact Registry) y despliégala en tu servicio en la nube preferido.

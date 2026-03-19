# Changelog y Detalles de Diseño

Este documento detalla la evolución del diseño y las decisiones de UI/UX implementadas en la aplicación.

## Filosofía de Diseño
El diseño sigue una estética **"Dark Luxury / High-Tech Sport"**, combinando fondos oscuros profundos con acentos vibrantes y efectos de cristal (glassmorphism) para crear una experiencia premium, moderna y enfocada en el rendimiento.

## Paleta de Colores
*   **Fondo Principal (`bg-background`)**: Tonos oscuros casi negros para reducir la fatiga visual, aumentar el contraste y hacer resaltar los elementos importantes.
*   **Superficies (`bg-surface-low`)**: Paneles y tarjetas ligeramente más claros con opacidad para crear profundidad y jerarquía visual sin usar colores sólidos que rompan la estética oscura.
*   **Acento Principal (`primary`)**: Un tono vibrante (dorado/amarillo) que denota energía, victoria y estatus premium. Se usa para llamadas a la acción, iconos activos y métricas clave.
*   **Bordes y Divisores**: Blanco con muy baja opacidad (`border-white/5`, `border-white/10`) para delinear elementos sutilmente, separando secciones sin saturar la vista del usuario.

## Tipografía
*   **Titulares (`font-headline`)**: Fuentes gruesas (`font-black`), en mayúsculas (`uppercase`) y con espaciado ajustado (`tracking-tight` o `tracking-tighter`) para transmitir un look deportivo, audaz y contundente.
*   **Cuerpo y Metadatos**: Fuentes sans-serif limpias para máxima legibilidad. Se hace un uso extensivo de texto pequeño (`text-[10px]`), en mayúsculas y con amplio espaciado (`tracking-widest`) para etiquetas y subtítulos, dándole un toque editorial y técnico.

## Componentes Clave y Efectos Visuales
*   **Neo-Extrusión**: Las tarjetas y contenedores usan una clase personalizada `neo-extrusion` combinada con bordes sutiles para dar la sensación de que los elementos emergen del fondo, creando un efecto 3D suave.
*   **Animaciones (Framer Motion)**:
    *   **Transiciones de página**: Entradas y salidas suaves con `AnimatePresence` (fade in/out y scale) para que la navegación se sienta fluida como una app nativa.
    *   **Micro-interacciones**: Efectos de hover en tarjetas (`scale: 1.02`) para dar retroalimentación táctil inmediata.
    *   **Menú Lateral**: Físicas de resorte (`spring`, `damping: 25`) para un deslizamiento natural y orgánico.
*   **Botones**: Los botones principales incluyen un resplandor (glow) usando sombras (`shadow-[0_0_15px_rgba(...)]`) para guiar el ojo del usuario hacia la acción principal.
*   **Menú Lateral (SideMenu)**: Diseño de panel flotante con fondo desenfocado (backdrop blur) y un área de perfil de usuario integrada en la cabecera que actúa como acceso directo a la edición del perfil.

## Vistas Implementadas
1.  **Inicio (HomeView)**: Dashboard principal con métricas de rendimiento destacadas (Torneos Activos, Jugadores), un carrusel de servicios élite y botones de navegación rápida.
2.  **Mi Perfil (ProfileView)**: Interfaz de edición de datos personales con avatares circulares, indicadores de estado (Pro Member) y campos de formulario estilo "glass" que cambian de estado al editar.
3.  **Ligas (LigasView)**: Gestión y visualización de competiciones y torneos.
4.  **Citas (CitasView)**: Calendario y agendamiento de eventos o partidos.
5.  **Portafolio (PortfolioView)**: Exhibición de logros, estadísticas y trofeos del jugador.
6.  **Paquetes (PackagesView)**: Visualización de planes de suscripción y servicios premium.
7.  **Configuración (SettingsView)**: Ajustes de la app (Notificaciones, Modo Oscuro, Idioma, Privacidad) con interruptores (toggles) personalizados animados.

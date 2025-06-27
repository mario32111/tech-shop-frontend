// tailwind.config.js

// Elimina o comenta esta línea, ya que es específica de Nx y su utilidad `createGlobPatternsForDependencies`.
// const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

// La línea de abajo (const animations...) es correcta y debe permanecer.
const animations = require('@midudev/tailwind-animations');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // --- Configuración de 'content' ---
  // Esta es la parte más importante para adaptar desde Nx.
  // 'content' le dice a Tailwind dónde buscar tus clases para incluirlas en el CSS final.
  // Las rutas por defecto de Next.js cubren la mayoría de los casos.
  // Asegúrate de que las rutas aquí reflejen la estructura de tu proyecto Next.js.
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Para el App Router de Next.js
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Para el Pages Router de Next.js
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Para tus componentes compartidos
    // Si tienes un directorio 'src' que contiene tus componentes o páginas, añádelo así:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // O si usas una estructura más anidada dentro de 'src':
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',

    // Estas líneas son de Nx para omitir archivos de test/historias.
    // Si no usas Storybook o archivos .spec, puedes eliminarlas.
    // Si los usas y quieres que Tailwind los ignore, déjalas o adapta la ruta si están en `src`.
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {
      // --- Colores ---
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',

        'accent-blue': {
          DEFAULT: '#0070F3',
          'light': '#3B82F6',
          'dark': '#1D4ED8',
        },
        'accent-green': {
          DEFAULT: '#16A34A',
          'light': '#22C55E',
          'dark': '#15803D',
        },
        'accent-red': {
          DEFAULT: '#EF4444',
          'light': '#F87171',
          'dark': '#B91C1C',
        },
      },

      // --- Tipografía (Fuentes) ---
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // monospace: ['Fira Code', 'monospace'],
      },

      // --- Espaciado (opcional, si quieres más granularidad) ---
      // spacing: {
      //   '72': '18rem',
      //   '84': '21rem',
      // },

      // --- Sombras (para profundidad y UI limpia) ---
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },

      // --- Transiciones (para animaciones suaves) ---
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'ease-in-out-quad': 'cubic-bezier(0.45, 0, 0.55, 1)',
      },
    },
  },
  // --- Plugins ---
  // Esta línea es correcta y crucial para que el plugin `@midudev/tailwind-animations` funcione.
  plugins: [animations],
};
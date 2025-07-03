# 🛍️ Mi Tech Shop

Una moderna tienda online de tecnología construida con Next.js 15, React 19 y Tailwind CSS.

## 🚀 Características

- **🛒 Carrito de Compras**: Sistema completo de carrito con persistencia local
- **🔍 Búsqueda Avanzada**: Búsqueda en tiempo real con sugerencias automáticas
- **📱 Responsive Design**: Optimizado para móviles, tablets y desktop
- **⚡ Rendimiento**: Carga rápida con Next.js App Router y Turbo Pack
- **🎨 UI Moderna**: Interfaz elegante con Tailwind CSS y animaciones fluidas
- **🌙 Modo Oscuro**: Soporte para tema claro y oscuro
- **📦 Gestión de Productos**: Catálogo completo con categorías y filtros
- **💳 Ofertas Especiales**: Sección dedicada a productos en oferta

## 🛠️ Tecnologías

- **Frontend**: 
  - [Next.js 15](https://nextjs.org/) - Framework de React
  - [React 19](https://react.dev/) - Biblioteca de UI
  - [TypeScript](https://www.typescriptlang.org/) - Tipado estático
  
- **Estilos**:
  - [Tailwind CSS 3.4](https://tailwindcss.com/) - Framework de CSS
  - [Tailwind Animations](https://github.com/midudev/tailwind-animations) - Animaciones adicionales
  - [PostCSS](https://postcss.org/) - Procesador de CSS

- **Herramientas de Desarrollo**:
  - [ESLint](https://eslint.org/) - Linter de código
  - [Turbo Pack](https://turbo.build/pack) - Bundler rápido para desarrollo
  - [PNPM](https://pnpm.io/) - Gestor de paquetes eficiente

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- PNPM (recomendado) o NPM

### Pasos

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/my-tech-shop-front.git
   cd my-tech-shop-front
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Abre en tu navegador**
   ```
   http://localhost:3000
   ```

## 🗂️ Estructura del Proyecto

```
my-tech-shop-front/
├── public/                 # Archivos estáticos
│   ├── favicon.ico
│   └── *.svg              # Iconos SVG
├── src/
│   ├── app/               # App Router de Next.js 15
│   │   ├── fonts.ts       # Configuración de fuentes
│   │   ├── globals.css    # Estilos globales + Tailwind
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Página de inicio
│   │   ├── providers.tsx  # Proveedores de contexto
│   │   ├── api/           # API Routes
│   │   ├── lib/           # Utilidades y tipos
│   │   ├── ofertas/       # Página de ofertas
│   │   ├── product/       # Páginas de productos
│   │   ├── search/        # Página de búsqueda
│   │   ├── shoppingCart/  # Página del carrito
│   │   └── ui/            # Componentes de UI
│   └── context/           # Contextos de React
├── tailwind.config.js     # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
└── package.json
```

## 🎨 Componentes Principales

### 🧭 Navbar
- Navegación responsive
- Barra de búsqueda con sugerencias
- Indicador de carrito
- Menú hamburguesa para móviles

### 🛒 Shopping Cart
- Gestión completa del carrito
- Persistencia en localStorage
- Actualización en tiempo real

### 🔍 Search System
- Búsqueda en tiempo real
- Sugerencias automáticas
- Navegación a resultados

### 📱 Product Components
- Tarjetas de producto responsive
- Carga lazy de imágenes
- Estados de carga animados

## 🚀 Scripts Disponibles

```bash
# Desarrollo con Turbo Pack
pnpm dev

# Construcción para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Linting
pnpm lint
```

## 🎨 Personalización de Estilos

El proyecto utiliza Tailwind CSS con una configuración personalizada que incluye:

- **Colores personalizados**: Paleta de grises y colores de acento
- **Fuentes**: Inter como fuente principal
- **Sombras**: Sistema de sombras personalizado
- **Animaciones**: Plugin de animaciones de @midudev/tailwind-animations

### Colores Principales

```css
/* Colores de acento */
accent-blue: #0070F3    /* Azul principal */
accent-green: #16A34A   /* Verde para éxito */
accent-red: #EF4444     /* Rojo para alertas */
```

## 📱 Características Responsive

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Sistema de breakpoints de Tailwind
- **Navegación**: Menú hamburguesa en móviles
- **Búsqueda**: Barra de búsqueda adaptativa

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.tu-tienda.com

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=tu-google-analytics-id
```

### Configuración de Tailwind

El archivo `tailwind.config.js` está configurado con:
- Rutas de contenido optimizadas
- Tema extendido con colores personalizados
- Plugin de animaciones integrado

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conecta tu repositorio** en [Vercel](https://vercel.com)
2. **Configuración automática** - Vercel detecta Next.js automáticamente
3. **Deploy** - Se despliega automáticamente en cada push

### Otras Plataformas

- **Netlify**: Compatible con Next.js
- **Railway**: Despliegue full-stack
- **DigitalOcean**: App Platform

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- [Next.js Team](https://nextjs.org/) por el excelente framework
- [Tailwind Labs](https://tailwindlabs.com/) por Tailwind CSS
- [@midudev](https://github.com/midudev) por el plugin de animaciones
- Comunidad de desarrolladores de React

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐

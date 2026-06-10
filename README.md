# Botánica — Atelier Floral

Landing page premium para una floristería de alto nivel. Diseño romántico oscuro con estética editorial, tipografía serif dramática y animaciones sutiles al scroll.

## Stack

- **React 19** + **TypeScript 6**
- **Vite 8** (build tool)
- **Tailwind CSS v4** (estilado utility-first)
- **Motion** (animaciones)
- **Phosphor Icons** (iconografía)

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build

```bash
pnpm run build
```

El output se genera en `dist/`. Las imágenes estáticas se sirven desde `public/`.

## Estructura

```
src/
├── components/
│   ├── Nav.tsx             # Navegación flotante tipo isla de cristal
│   ├── Hero.tsx            # Split screen con iluminación dramática
│   ├── Philosophy.tsx      # Valores y esencia de la marca
│   ├── Collections.tsx     # Bento grid asimétrico de colecciones
│   ├── Moments.tsx         # Sticky stack horizontal de ocasiones
│   ├── Testimonials.tsx    # Marquee infinito de citas
│   ├── Contact.tsx         # Formulario + información de contacto
│   ├── Footer.tsx          # Pie de página con redes sociales
│   └── GrainOverlay.tsx    # Textura de grano analógico fija
├── App.tsx
├── index.css               # Tailwind v4 + theme personalizado
└── main.tsx
```

## Paleta

| Token | Color |
|---|---|
| `--color-dark` | `#0a0a0a` |
| `--color-gold` | `#c4956a` |
| `--color-burgundy` | `#4a1a2a` |
| `--color-cream` | `#f5f0eb` |

## Imágenes

Las imágenes se encuentran en `public/` y se referencian con ruta absoluta (`/hero-dramatic.jpg`).

| Archivo | Sección |
|---|---|
| `hero-dramatic.jpg` | Hero |
| `collection-*.jpg` | Colecciones (×5) |
| `moment-*.jpg` | Momentos (×4) |

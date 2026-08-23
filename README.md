# Adam Podolak Interactive Portfolio

Modern Vite and TypeScript portfolio site for Adam Podolak, built around a pan-and-zoom 2D canvas experience. The site groups editorial reels, campaign videos, photo work, testimonials, process notes, and contact details across an explorable dark canvas.

## Tech Stack

- Vite
- React
- TypeScript
- Konva and React Konva for canvas rendering, panning, zooming, drag, and touch gestures

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Updating Content

Portfolio items live in `src/data/portfolio.ts`. Replace placeholder image URLs, video embeds, project descriptions, and contact details there. Video entries support YouTube, Vimeo, or other embeddable iframe URLs.

## Interaction Model

- Drag the canvas to pan.
- Scroll to zoom around the pointer.
- Use pinch gestures on touch devices.
- Portfolio pieces are loose canvas objects rather than cards.
- Only video objects open the media viewer.

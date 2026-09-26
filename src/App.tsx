import { useState } from 'react'
import type { PointerEvent } from 'react'
import { SpaceCanvas } from './components/SpaceCanvas'
import { ProjectLightbox } from './components/ProjectLightbox'
import { portfolioNodes } from './data/portfolio'
import type { PortfolioNode } from './data/portfolio'
import './App.css'

function getNodeLabel(node: PortfolioNode) {
  const labels: Record<PortfolioNode['kind'], string> = {
    contact: 'Contact',
    photo: 'Photo work',
    testimonial: 'Client note',
    text: 'Portfolio note',
    video: 'Video work',
  }

  return node.eyebrow ?? labels[node.kind]
}

function App() {
  const [selectedNode, setSelectedNode] = useState<PortfolioNode | null>(null)
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--light-x', `${event.clientX}px`)
    event.currentTarget.style.setProperty('--light-y', `${event.clientY}px`)
  }

  return (
    <main className="app-shell" aria-label="Adam Podolak portfolio canvas" onPointerMove={handlePointerMove}>
      <header className="topbar">
        <a className="brand" href="mailto:hello@adampodolak.com" aria-label="Email Adam Podolak">
          <span>
            <strong>Adam Podolak</strong>
            <small>Videographer & Photographer</small>
          </span>
        </a>
      </header>

      <SpaceCanvas nodes={portfolioNodes} onSelectNode={setSelectedNode} />

      <footer className="creator-credit" aria-label="Website credit">
        Created by{' '}
        <a href="https://lukaspodolak.cz/" target="_blank" rel="noopener noreferrer">
          Lukáš Podokák
        </a>
      </footer>

      <section className="seo-content" aria-labelledby="portfolio-title">
        <h1 id="portfolio-title">Adam Podolak Video Editor and Content Creator Portfolio</h1>
        <p>
          Adam Podolak creates editorial reels, short-form campaign cutdowns, creator portraits, post-production systems,
          and photo-led social packages for brands that need rhythm, taste, and speed.
        </p>
        <h2>Selected portfolio work</h2>
        <ul>
          {portfolioNodes.map((node) => (
            <li key={node.id}>
              <article>
                <p>{getNodeLabel(node)}</p>
                <h3>{node.title}</h3>
                <p>{node.description}</p>
                {node.linkUrl && node.cta ? (
                  <a href={node.linkUrl} tabIndex={-1}>
                    {node.cta}
                  </a>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
        <h2>Services</h2>
        <p>Video editing, content creation, launch campaign assets, creator portrait direction, and post-production delivery.</p>
        <p>
          Contact Adam Podolak at <a href="mailto:hello@adampodolak.com" tabIndex={-1}>hello@adampodolak.com</a>.
        </p>
      </section>

      <ProjectLightbox node={selectedNode} onClose={() => setSelectedNode(null)} />
    </main>
  )
}

export default App

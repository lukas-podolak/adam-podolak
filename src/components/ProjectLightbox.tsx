import type { CSSProperties } from 'react'
import type { PortfolioNode } from '../data/portfolio'

interface ProjectLightboxProps {
  node: PortfolioNode | null
  onClose: () => void
}

export function ProjectLightbox({ node, onClose }: ProjectLightboxProps) {
  if (!node) {
    return null
  }

  const hasVideo = node.kind === 'video' && node.videoUrl
  const mediaAspectRatio = node.mediaAspectRatio ?? (hasVideo ? 16 / 9 : undefined)
  const isVerticalVideo = Boolean(hasVideo && mediaAspectRatio && mediaAspectRatio < 1)
  const mediaColumnWidth = mediaAspectRatio
    ? `min(${isVerticalVideo ? 360 : 720}px, calc((100svh - 112px) * ${mediaAspectRatio}))`
    : 'min(720px, calc(100svh - 112px))'
  const mediaStyle = {
    '--accent': node.accent,
    '--media-aspect': mediaAspectRatio ? String(mediaAspectRatio) : undefined,
    '--media-column': mediaColumnWidth,
  } as CSSProperties

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <button className="lightbox-backdrop" type="button" aria-label="Close project" onClick={onClose} />
      <article className={isVerticalVideo ? 'lightbox-panel is-vertical-video' : 'lightbox-panel'}>
        <button className="close-button" type="button" aria-label="Close project" onClick={onClose}>
          x
        </button>

        <div className="lightbox-media" style={mediaStyle}>
          {hasVideo ? (
            <iframe
              title={`${node.title} video`}
              src={node.videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : node.imageUrl ? (
            <img src={node.imageUrl} alt="" loading="lazy" />
          ) : (
            <div className="quote-card">{node.description}</div>
          )}
        </div>

        <div className="lightbox-copy">
          {node.eyebrow ? <p className="eyebrow">{node.eyebrow}</p> : null}
          <h2 id="project-title">{node.title}</h2>
          <p>{node.description}</p>
          {node.linkUrl && node.cta ? (
            <a className="text-link" href={node.linkUrl}>
              {node.cta}
            </a>
          ) : null}
        </div>
      </article>
    </div>
  )
}
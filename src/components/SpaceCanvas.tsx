import { useCallback, useMemo, useRef, useState } from 'react'
import { Circle, Group, Image, Layer, Line, Rect, Stage, Text } from 'react-konva'
import type { KonvaEventObject } from 'konva/lib/Node'
import type Konva from 'konva'
import type { PortfolioNode } from '../data/portfolio'
import { useImageAsset } from '../hooks/useImageAsset'
import { useViewportSize } from '../hooks/useViewportSize'

interface SpaceCanvasProps {
  nodes: PortfolioNode[]
  onSelectNode: (node: PortfolioNode) => void
}

interface ViewState {
  x: number
  y: number
  scale: number
}

interface TouchState {
  distance: number
  center: { x: number; y: number }
}

const minScale = 0.35
const maxScale = 1.9
const initialView: ViewState = { x: 0, y: 0, scale: 0.82 }

function clampScale(scale: number) {
  return Math.min(maxScale, Math.max(minScale, scale))
}

function getTouchCenter(touches: TouchList) {
  const first = touches[0]
  const second = touches[1]

  return {
    x: (first.clientX + second.clientX) / 2,
    y: (first.clientY + second.clientY) / 2,
  }
}

function getTouchDistance(touches: TouchList) {
  const first = touches[0]
  const second = touches[1]
  const deltaX = second.clientX - first.clientX
  const deltaY = second.clientY - first.clientY

  return Math.hypot(deltaX, deltaY)
}

function Grid({ width, height, view }: { width: number; height: number; view: ViewState }) {
  const lines = useMemo(() => {
    const spacing = 120
    const startX = Math.floor((-view.x / view.scale - width / view.scale) / spacing) * spacing
    const endX = Math.ceil((-view.x / view.scale + (width / view.scale) * 2) / spacing) * spacing
    const startY = Math.floor((-view.y / view.scale - height / view.scale) / spacing) * spacing
    const endY = Math.ceil((-view.y / view.scale + (height / view.scale) * 2) / spacing) * spacing
    const gridLines: Array<{ points: number[]; key: string; major: boolean }> = []

    for (let x = startX; x <= endX; x += spacing) {
      gridLines.push({ points: [x, startY, x, endY], key: `v-${x}`, major: x % 480 === 0 })
    }

    for (let y = startY; y <= endY; y += spacing) {
      gridLines.push({ points: [startX, y, endX, y], key: `h-${y}`, major: y % 480 === 0 })
    }

    return gridLines
  }, [height, view.scale, view.x, view.y, width])

  return (
    <Group listening={false}>
      {lines.map((line) => (
        <Line
          key={line.key}
          points={line.points}
          stroke={line.major ? 'rgba(245, 241, 232, 0.1)' : 'rgba(245, 241, 232, 0.035)'}
          strokeWidth={line.major ? 1.2 : 1}
        />
      ))}
      <Line points={[-1800, 0, 1800, 0]} stroke="rgba(245, 241, 232, 0.12)" strokeWidth={1.2} />
      <Line points={[0, -1100, 0, 1200]} stroke="rgba(245, 241, 232, 0.12)" strokeWidth={1.2} />
    </Group>
  )
}

function coverCrop(image: HTMLImageElement, width: number, height: number) {
  const imageRatio = image.width / image.height
  const targetRatio = width / height

  if (imageRatio > targetRatio) {
    const cropWidth = image.height * targetRatio
    return {
      x: (image.width - cropWidth) / 2,
      y: 0,
      width: cropWidth,
      height: image.height,
    }
  }

  const cropHeight = image.width / targetRatio
  return {
    x: 0,
    y: (image.height - cropHeight) / 2,
    width: image.width,
    height: cropHeight,
  }
}

function PortfolioItem({ node, onSelect }: { node: PortfolioNode; onSelect: (node: PortfolioNode) => void }) {
  const [isHovered, setIsHovered] = useState(false)
  const { image, isLoading, hasError } = useImageAsset(node.imageUrl)
  const scale = isHovered ? 1.035 : 1
  const hasMedia = Boolean(node.imageUrl)
  const hasEyebrow = Boolean(node.eyebrow?.trim())
  const isVideo = node.kind === 'video'
  const mediaAspectRatio = node.mediaAspectRatio ?? (isVideo ? 16 / 9 : undefined)
  const mediaHeight = hasMedia ? Math.max(170, mediaAspectRatio ? node.width / mediaAspectRatio : node.height * 0.72) : 0
  const titleY = hasMedia ? mediaHeight + (hasEyebrow ? 54 : 24) : hasEyebrow ? 48 : 16
  const canOpen = isVideo
  const headlineSize = node.kind === 'text' && node.featured ? 56 : node.kind === 'testimonial' ? 30 : 26
  const copyY = titleY + (node.kind === 'text' && node.featured ? 122 : 58)

  return (
    <Group
      x={node.x}
      y={node.y}
      scaleX={scale}
      scaleY={scale}
      offsetX={(node.width * (scale - 1)) / 2}
      offsetY={(node.height * (scale - 1)) / 2}
      onClick={() => {
        if (canOpen) {
          onSelect(node)
        }
      }}
      onTap={() => {
        if (canOpen) {
          onSelect(node)
        }
      }}
      onMouseEnter={(event) => {
        setIsHovered(true)
        const stage = event.target.getStage()
        if (stage) {
          stage.container().style.cursor = canOpen ? 'pointer' : 'grab'
        }
      }}
      onMouseLeave={(event) => {
        setIsHovered(false)
        const stage = event.target.getStage()
        if (stage) {
          stage.container().style.cursor = 'grab'
        }
      }}
    >
      {hasMedia ? (
        <Group clipX={0} clipY={0} clipWidth={node.width} clipHeight={mediaHeight}>
          {isVideo ? (
            <Rect
              width={node.width}
              height={mediaHeight}
              fill="rgba(7, 7, 7, 0.86)"
              stroke={isHovered ? node.accent : 'rgba(245, 241, 232, 0.28)'}
              strokeWidth={isHovered ? 2 : 1}
              shadowColor={node.accent}
              shadowOpacity={isHovered ? 0.22 : 0.08}
              shadowBlur={isHovered ? 22 : 10}
            />
          ) : null}
          {image && !hasError ? (
            <Image image={image} width={node.width} height={mediaHeight} crop={coverCrop(image, node.width, mediaHeight)} />
          ) : (
            <Group>
              <Text
                text={isLoading ? 'Loading media' : 'Media unavailable'}
                x={24}
                y={mediaHeight / 2 - 12}
                width={node.width - 48}
                fill="rgba(245, 241, 232, 0.76)"
                fontFamily="Inter, Segoe UI, sans-serif"
                fontSize={18}
                align="center"
              />
            </Group>
          )}
          <Rect width={node.width} height={mediaHeight} fill={isVideo ? 'rgba(10, 10, 10, 0.2)' : 'rgba(10, 10, 10, 0.1)'} />
          {isVideo ? (
            <Group x={node.width / 2} y={mediaHeight / 2}>
              <Circle radius={32} fill="rgba(10, 10, 10, 0.72)" stroke={node.accent} strokeWidth={1.5} />
              <Line points={[-8, -12, -8, 12, 14, 0]} closed fill="#f5f1e8" />
            </Group>
          ) : null}
          {isVideo ? (
            <Group x={14} y={14}>
              <Rect width={mediaAspectRatio && mediaAspectRatio < 1 ? 62 : 82} height={24} fill="rgba(10, 10, 10, 0.68)" stroke="rgba(245, 241, 232, 0.24)" strokeWidth={1} />
              <Text
                text={mediaAspectRatio && mediaAspectRatio < 1 ? '9:16' : '16:9'}
                x={11}
                y={5}
                width={mediaAspectRatio && mediaAspectRatio < 1 ? 40 : 60}
                fill="#f5f1e8"
                fontFamily="Inter, Segoe UI, sans-serif"
                fontSize={12}
                fontStyle="700"
              />
            </Group>
          ) : null}
        </Group>
      ) : null}

      {hasEyebrow ? <Rect x={0} y={hasMedia ? mediaHeight + 12 : 0} width={96} height={3} fill={node.accent} cornerRadius={2} opacity={0.92} /> : null}
      {hasEyebrow ? (
        <Text
          text={node.eyebrow?.toUpperCase() ?? ''}
          x={0}
          y={hasMedia ? mediaHeight + 26 : 12}
          width={node.width}
          fill={node.accent}
          fontFamily="Inter, Segoe UI, sans-serif"
          fontSize={12}
          fontStyle="700"
        />
      ) : null}
      <Text
        text={node.title}
        x={0}
        y={titleY}
        width={node.width}
        fill="#f5f1e8"
        fontFamily="Inter, Segoe UI, sans-serif"
        fontSize={headlineSize}
        fontStyle="700"
        lineHeight={1.04}
      />
      <Text
        text={node.description?.length > 140 ? node.description.slice(0, 190) + '...' : node.description}
        x={0}
        y={copyY}
        width={node.width}
        fill="rgba(245, 241, 232, 0.74)"
        fontFamily="Inter, Segoe UI, sans-serif"
        fontSize={16}
        lineHeight={1.32}
        align="justify"
      />
      {node.cta ? (
        <Text
          text={node.cta}
          x={0}
          y={node.height - 48}
          width={node.width}
          fill="#f5f1e8"
          fontFamily="Inter, Segoe UI, sans-serif"
          fontSize={17}
          fontStyle="700"
        />
      ) : null}
    </Group>
  )
}

export function SpaceCanvas({ nodes, onSelectNode }: SpaceCanvasProps) {
  const stageRef = useRef<Konva.Stage>(null)
  const touchRef = useRef<TouchState | null>(null)
  const viewport = useViewportSize()
  const [view, setView] = useState<ViewState>(() => ({
    ...initialView,
    x: viewport.width / 2,
    y: viewport.height / 2,
  }))

  const zoomAtPoint = useCallback((point: { x: number; y: number }, nextScale: number) => {
    setView((current) => {
      const clampedScale = clampScale(nextScale)
      const worldPoint = {
        x: (point.x - current.x) / current.scale,
        y: (point.y - current.y) / current.scale,
      }

      return {
        scale: clampedScale,
        x: point.x - worldPoint.x * clampedScale,
        y: point.y - worldPoint.y * clampedScale,
      }
    })
  }, [])

  const handleWheel = useCallback(
    (event: KonvaEventObject<WheelEvent>) => {
      event.evt.preventDefault()
      const stage = stageRef.current
      const pointer = stage?.getPointerPosition()

      if (!pointer) {
        return
      }

      const direction = event.evt.deltaY > 0 ? -1 : 1
      const factor = direction > 0 ? 1.08 : 0.92
      zoomAtPoint(pointer, view.scale * factor)
    },
    [view.scale, zoomAtPoint],
  )

  const handleDragMove = useCallback((event: KonvaEventObject<DragEvent>) => {
    setView((current) => ({
      ...current,
      x: event.target.x(),
      y: event.target.y(),
    }))
  }, [])

  const handleTouchMove = useCallback(
    (event: KonvaEventObject<TouchEvent>) => {
      const touches = event.evt.touches

      if (touches.length !== 2) {
        return
      }

      event.evt.preventDefault()
      const distance = getTouchDistance(touches)
      const center = getTouchCenter(touches)
      const previous = touchRef.current

      if (!previous) {
        touchRef.current = { distance, center }
        return
      }

      const nextScale = view.scale * (distance / previous.distance)
      zoomAtPoint(center, nextScale)
      touchRef.current = { distance, center }
    },
    [view.scale, zoomAtPoint],
  )

  const zoomIn = () => zoomAtPoint({ x: viewport.width / 2, y: viewport.height / 2 }, view.scale * 1.16)
  const zoomOut = () => zoomAtPoint({ x: viewport.width / 2, y: viewport.height / 2 }, view.scale * 0.84)
  const resetView = () => setView({ ...initialView, x: viewport.width / 2, y: viewport.height / 2 })

  return (
    <section className="canvas-wrap" aria-label="Interactive portfolio space">
      <Stage
        ref={stageRef}
        width={viewport.width}
        height={viewport.height}
        x={view.x}
        y={view.y}
        scaleX={view.scale}
        scaleY={view.scale}
        draggable
        onWheel={handleWheel}
        onDragMove={handleDragMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => {
          touchRef.current = null
        }}
        className="portfolio-stage"
      >
        <Layer>
          <Grid width={viewport.width} height={viewport.height} view={view} />
          {nodes.map((node) => (
            <PortfolioItem key={node.id} node={node} onSelect={onSelectNode} />
          ))}
        </Layer>
      </Stage>

      <aside className="navigation-card" aria-label="Canvas controls">
        <div className="control-row">
          <button type="button" onClick={zoomOut} aria-label="Zoom out">
            -
          </button>
          <button type="button" onClick={resetView} aria-label="Reset canvas view">
            Reset
          </button>
          <button type="button" onClick={zoomIn} aria-label="Zoom in">
            +
          </button>
        </div>
        <span>{Math.round(view.scale * 100)}%</span>
      </aside>
    </section>
  )
}
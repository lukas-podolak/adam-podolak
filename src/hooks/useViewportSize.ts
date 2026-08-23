import { useEffect, useState } from 'react'

export interface ViewportSize {
  width: number
  height: number
}

function readViewport(): ViewportSize {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export function useViewportSize(): ViewportSize {
  const [size, setSize] = useState<ViewportSize>(() => readViewport())

  useEffect(() => {
    const handleResize = () => setSize(readViewport())

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
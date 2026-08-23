import { useEffect, useState } from 'react'

type ImageAssetState = {
  image: HTMLImageElement | null
  isLoading: boolean
  hasError: boolean
}

type LoadedAsset = {
  src?: string
  image: HTMLImageElement | null
  hasError: boolean
}

export function useImageAsset(src?: string): ImageAssetState {
  const [asset, setAsset] = useState<LoadedAsset>({
    src: undefined,
    image: null,
    hasError: false,
  })

  useEffect(() => {
    if (!src) {
      return
    }

    let isMounted = true
    const image = new window.Image()
    image.crossOrigin = 'anonymous'
    image.decoding = 'async'

    image.onload = () => {
      if (isMounted) {
        setAsset({ src, image, hasError: false })
      }
    }

    image.onerror = () => {
      if (isMounted) {
        setAsset({ src, image: null, hasError: true })
      }
    }

    image.src = src

    return () => {
      isMounted = false
    }
  }, [src])

  const isCurrentAsset = Boolean(src && asset.src === src)

  return {
    image: isCurrentAsset ? asset.image : null,
    isLoading: Boolean(src && asset.src !== src),
    hasError: Boolean(isCurrentAsset && asset.hasError),
  }
}
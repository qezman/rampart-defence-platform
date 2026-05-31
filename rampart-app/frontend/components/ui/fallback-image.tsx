'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'

type FallbackImageProps = Omit<ImageProps, 'src'> & {
  src?: string
  fallbackSrc: string
}

export default function FallbackImage({
  src,
  fallbackSrc,
  alt,
  onError,
  ...props
}: FallbackImageProps) {
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc)

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      onError={(event) => {
        if (imageSrc !== fallbackSrc) setImageSrc(fallbackSrc)
        onError?.(event)
      }}
    />
  )
}

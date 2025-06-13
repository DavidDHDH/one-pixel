'use client'

import React, { useEffect, useRef, useState } from 'react'

interface LayeredVideoProps {
  className?: string
  autoPlay?: boolean
  width?: number
  height?: number
}

const LayeredVideo: React.FC<LayeredVideoProps> = ({
  className = '',
  autoPlay = true,
  width = 800,
  height = 600,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const baseVideoRef = useRef<HTMLVideoElement>(null)
  const devVideoRef = useRef<HTMLVideoElement>(null)
  const ecransVideoRef = useRef<HTMLVideoElement>(null)
  const panneauVideoRef = useRef<HTMLVideoElement>(null)
  const telephoneVideoRef = useRef<HTMLVideoElement>(null)

  const layers = [
    {
      name: 'base',
      ref: baseVideoRef,
      loop: true,
      zIndex: 1,
      webm: '/animation/base-vp9-chrome.webm',
      mp4: '/animation/base-hevc-safari.mp4',
    },
    {
      name: 'panneau',
      ref: panneauVideoRef,
      loop: true,
      zIndex: 2,
      webm: '/animation/panneau-vp9-chrome.webm',
      mp4: '/animation/panneau-hevc-safari.mp4',
    },
    {
      name: 'dev',
      ref: devVideoRef,
      loop: false,
      zIndex: 3,
      webm: '/animation/dev-vp9-chrome.webm',
      mp4: '/animation/dev-hevc-safari.mp4',
    },
    {
      name: 'écrans',
      ref: ecransVideoRef,
      loop: true,
      zIndex: 4,
      webm: '/animation/écrans-vp9-chrome.webm',
      mp4: '/animation/écrans-hevc-safari.mp4',
    },
    {
      name: 'téléphone',
      ref: telephoneVideoRef,
      loop: false,
      zIndex: 5,
      webm: '/animation/téléphone-vp9-chrome.webm',
      mp4: '/animation/téléphone-hevc-safari.mp4',
    },
  ]

  useEffect(() => {
    // Toujours jouer le layer base
    if (baseVideoRef.current) {
      baseVideoRef.current.play()
    }

    if (ecransVideoRef.current) {
      ecransVideoRef.current.play()
    }

    if (panneauVideoRef.current) {
      panneauVideoRef.current.play()
    }

    // Les autres layers : play/pause selon hover
    const hoverLayers = [devVideoRef, telephoneVideoRef]
    hoverLayers.forEach((ref) => {
      if (ref.current) {
        if (isHovered) {
          ref.current.play()
        }
        // else {
        //   ref.current.pause()
        // }
      }
    })
  }, [isHovered])

  useEffect(() => {
    // Toujours reset au début si autoPlay
    if (autoPlay) {
      layers.forEach((layer) => {
        if (layer.ref.current) {
          layer.ref.current.currentTime = 0
        }
      })
    }
  }, [autoPlay])

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {layers.map((layer) => (
        <video
          key={layer.name}
          ref={layer.ref}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: layer.zIndex }}
          width={width}
          height={height}
          autoPlay={layer.name === 'base' ? true : false}
          loop={layer.loop}
          muted
          playsInline
          aria-label="Illustration de l'agence web One Pixel, un développeur web et IA à son bureau sur la plage"
        >
          <source src={layer.webm} type="video/webm; codecs=vp9" />
          <source src={layer.mp4} type="video/mp4; codecs=hevc" />
        </video>
      ))}
    </div>
  )
}

export default LayeredVideo

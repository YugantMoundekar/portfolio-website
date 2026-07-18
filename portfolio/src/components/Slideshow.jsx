import { useEffect, useState } from 'react'

export default function Slideshow({ images, interval = 3000, className = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === index ? 'bg-accent-cyan w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

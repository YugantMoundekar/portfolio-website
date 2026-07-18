import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { gallery } from '../data/content.js'
import Slideshow from '../components/Slideshow.jsx'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <div className="container-page pt-32 pb-20">
      <h1 className="text-3xl sm:text-4xl font-extrabold">Gallery</h1>
      <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
        A few snapshots — moments, events, and behind-the-scenes.
      </p>

      <Slideshow images={gallery} className="h-64 sm:h-80 mt-8 border border-slate-200 dark:border-slate-800" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
        {gallery.map((src, i) => (
          <motion.button
            key={src + i}
            onClick={() => setActive(src)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-square"
          >
            <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-6"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={active}
              alt="Preview"
              className="max-w-full max-h-full rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

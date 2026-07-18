import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { profile, heroIntro, gallery } from '../data/content.js'
import Slideshow from '../components/Slideshow.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <div className="container-page pt-32 pb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
            Hi, I'm {profile.name} 👋
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight bg-gradient-to-r from-accent-pink to-accent-blue bg-clip-text text-transparent max-w-md">
            {profile.designation}
          </h1>

          <ul className="mt-8 space-y-3">
            {heroIntro.map((line) => (
              <li key={line} className="text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-2">
                {line}
              </li>
            ))}
          </ul>

          <a
            href={profile.resumeUrl}
            download
            className="pill-btn mt-8 border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white"
          >
            <Download size={16} /> Get My Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <Slideshow images={gallery.slice(0, 3)} className="h-72 sm:h-96 border border-slate-200 dark:border-slate-800" />
          <p className="text-center text-xs text-slate-400 mt-3 tracking-wide uppercase">My Photo Gallery</p>
        </motion.div>
      </div>

      <Contact />
    </div>
  )
}

import { motion } from 'framer-motion'
import { Download, Target, Cloud, Code2, Users } from 'lucide-react'
import { profile, heroHighlights, gallery } from '../data/content.js'
import Slideshow from '../components/Slideshow.jsx'
import Contact from '../components/Contact.jsx'

const highlightIcons = {
  target: Target,
  cloud: Cloud,
  code: Code2,
  users: Users,
}

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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.25] tracking-tight bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent max-w-lg [text-wrap:balance]">
            {profile.designation}
          </h1>

          <ul className="mt-8 space-y-4">
            {heroHighlights.map(({ icon, text }, i) => {
              const Icon = highlightIcons[icon] || Target
              return (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan/15 to-accent-indigo/15 text-accent-cyan shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Icon size={16} />
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed pt-1">{text}</span>
                </motion.li>
              )
            })}
          </ul>

          <a
            href={profile.resumeUrl}
            download
            className="pill-btn mt-8 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-white"
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

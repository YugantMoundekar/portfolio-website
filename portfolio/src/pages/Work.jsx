import { motion } from 'framer-motion'
import { projects } from '../data/content.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Work() {
  return (
    <div className="container-page pt-32 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-extrabold"
      >
        My Work
      </motion.h1>
      <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
        A selection of projects I've built. Click any project's link to see the code or a live demo.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Award, ExternalLink, Github, Linkedin, Mail, Link2 } from 'lucide-react'
import {
  profile,
  experience,
  skills,
  certifications,
  education,
} from '../data/content.js'
import SkillBar from '../components/SkillBar.jsx'

const sideLinks = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'certifications', label: 'Certification & Achievements' },
  { id: 'education', label: 'Education' },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.5, delay },
  }
}

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
}

export default function About() {
  return (
    <div className="container-page pt-32 pb-20">
      <div className="grid md:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block sticky top-28 h-fit">
          <div className="flex flex-col items-start gap-3 mb-8">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-24 h-24 rounded-full border border-slate-200 dark:border-slate-700 object-cover"
            />
            <div>
              <p className="font-semibold">{profile.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{profile.location}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{profile.languagesKnown}</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            {sideLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="group flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400 rounded-lg pl-4 pr-3 py-2 border-l-2 border-slate-200 dark:border-slate-800 hover:border-accent-pink hover:text-accent-pink hover:bg-accent-pink/5 hover:translate-x-1 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-accent-pink group-hover:scale-125 transition-all duration-200 shrink-0" />
                {l.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div>
          <section id="introduction" className="scroll-mt-28">
            <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold">{profile.name}</h1>
              <span className="text-accent-pink font-medium">{profile.designation}</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 text-sm">
              {profile.socials.map((s) => {
                const Icon = socialIcons[s.label] || Link2
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-accent-pink hover:text-accent-pink hover:bg-accent-pink/5 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent-pink/10 transition-all duration-200"
                  >
                    <Icon size={15} className="shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    {s.label}
                  </a>
                )
              })}
            </div>
            <motion.div {...fadeUp(0.1)} className="card p-5 mt-6 text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
              {profile.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>
            {profile.quote && (
              <motion.p {...fadeUp(0.15)} className="mt-4 text-sm italic text-accent-pink/90">
                "{profile.quote}"
              </motion.p>
            )}
          </section>

          <motion.section {...fadeUp(0.05)} id="experience" className="scroll-mt-28 mt-16">
            <h2 className="section-heading">Work Experience</h2>
            <div className="mt-6 space-y-8 border-l border-slate-200 dark:border-slate-800 pl-6">
              {experience.map((job) => (
                <div key={job.company + job.period} className="relative">
                  <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-pink" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {job.logo && (
                        <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden shadow-sm">
                          <img
                            src={job.logo}
                            alt={`${job.company} logo`}
                            className="w-full h-full object-contain p-1.5"
                          />
                        </span>
                      )}
                      <div>
                        <p className="font-semibold">{job.company}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{job.designation}</p>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeUp(0.05)} id="skills" className="scroll-mt-28 mt-16">
            <h2 className="section-heading">Technical Skills</h2>
            <div className="mt-6 card p-6 border-accent-pink/40 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="font-semibold text-sm mb-3 text-accent-blue">{category}</p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <SkillBar key={item} name={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeUp(0.05)} id="certifications" className="scroll-mt-28 mt-16">
            <h2 className="section-heading">Certification & Achievements</h2>
            <ul className="mt-6 space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-accent-pink transition-colors card px-4 py-3"
                  >
                    <Award size={16} className="text-accent-pink shrink-0" />
                    <span className="flex-1">{c.name}</span>
                    <ExternalLink size={14} className="opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section {...fadeUp(0.05)} id="education" className="scroll-mt-28 mt-16 mb-10">
            <h2 className="section-heading">Education</h2>
            <div className="mt-8 flex items-end justify-between gap-2 border-l border-b border-slate-300 dark:border-slate-700 pl-6 pb-2 pr-2 h-40">
              {education.map((e, i) => (
                <div key={e.year} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full max-w-[10px] rounded-t-full bg-gradient-to-t from-accent-pink to-accent-blue"
                    style={{ height: `${40 + i * 30}px` }}
                  />
                  <p className="text-xs font-medium">{e.year}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">{e.label}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="card overflow-hidden group hover:border-accent-pink/50 transition-colors duration-300">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-56 object-cover bg-slate-100 dark:bg-slate-900 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-lg">{project.name}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs px-2 py-0.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name}`}
          className="shrink-0 flex items-center gap-1 text-sm font-medium text-accent-pink hover:gap-2 transition-all"
        >
          Link <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  )
}

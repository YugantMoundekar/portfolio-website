import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="card overflow-hidden group hover:border-accent-cyan/50 transition-colors duration-300">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-56 object-cover bg-slate-100 dark:bg-slate-900 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-lg">{project.name}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name}`}
            className="shrink-0 flex items-center gap-1 text-sm font-medium text-accent-cyan hover:gap-2 transition-all mt-0.5"
          >
            Link <ArrowUpRight size={16} />
          </a>
        </div>
        {project.description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            {project.description}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
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
    </div>
  )
}

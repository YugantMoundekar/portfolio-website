import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="container-page py-10 mt-10 border-t border-slate-200 dark:border-slate-800/60">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>Â© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-cyan transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

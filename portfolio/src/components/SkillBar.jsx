export default function SkillBar({ name }) {
  return (
    <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
      {name}
    </li>
  )
}

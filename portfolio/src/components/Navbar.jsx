import { NavLink } from 'react-router-dom'
import { Home, User, Briefcase, Images, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: User },
  { to: '/work', label: 'Work', icon: Briefcase },
  { to: '/gallery', label: 'Gallery', icon: Images },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[94vw]">
      <nav className="flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-[#12121a]/80 backdrop-blur-md px-2 py-2 shadow-lg shadow-black/5">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-accent-cyan/90 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10'
              }`
            }
          >
            <Icon size={15} />
            <span className="hidden sm:inline">{label}</span>
          </NavLink>
        ))}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center justify-center w-8 h-8 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors shrink-0"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </div>
  )
}

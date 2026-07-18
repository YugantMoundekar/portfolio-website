import { useForm } from '@formspree/react'
import { Send, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/content.js'

const isConfigured = profile.formspreeId && profile.formspreeId !== 'YOUR_FORM_ID'

export default function Contact() {
  const [state, handleSubmit] = useForm(isConfigured ? profile.formspreeId : 'unconfigured')

  return (
    <section id="contact" className="mt-28">
      <h2 className="section-heading">Let's Connect</h2>
      <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-md">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      {!isConfigured && (
        <div className="mt-6 max-w-2xl flex items-start gap-3 card border-amber-400/40 bg-amber-400/5 px-4 py-3 text-sm text-amber-600 dark:text-amber-400">
          <AlertTriangle size={18} className="shrink-0 mt-0.5" />
          <span>
            Contact form isn't wired up yet. Add your Formspree Form ID to{' '}
            <code className="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10">profile.formspreeId</code> in{' '}
            <code className="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10">src/data/content.js</code>. Sign up
            free at formspree.io to get one.
          </span>
        </div>
      )}

      {isConfigured && state.succeeded ? (
        <div className="mt-8 max-w-2xl flex items-center gap-3 card border-green-400/40 bg-green-400/5 px-5 py-6 text-green-600 dark:text-green-400">
          <CheckCircle2 size={22} className="shrink-0" />
          <p className="font-medium">Thanks for reaching out! I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            disabled={!isConfigured}
            className="card px-4 py-3 text-sm bg-transparent outline-none focus:border-accent-cyan disabled:opacity-60"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Your email"
            disabled={!isConfigured}
            className="card px-4 py-3 text-sm bg-transparent outline-none focus:border-accent-cyan disabled:opacity-60"
          />
          <textarea
            required
            name="message"
            placeholder="Your message"
            rows={4}
            disabled={!isConfigured}
            className="card px-4 py-3 text-sm bg-transparent outline-none focus:border-accent-cyan sm:col-span-2 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!isConfigured || state.submitting}
            className="pill-btn sm:col-span-2 justify-center border-accent-cyan bg-accent-cyan text-white hover:opacity-90 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} /> {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}

      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        Or reach me directly at{' '}
        <a href={profile.socials.find((s) => s.label === 'Email')?.url} className="text-accent-cyan font-medium">
          {profile.socials.find((s) => s.label === 'Email')?.url.replace('mailto:', '')}
        </a>
      </p>
    </section>
  )
}

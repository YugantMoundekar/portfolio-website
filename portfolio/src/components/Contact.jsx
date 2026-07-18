import { useState } from 'react'
import { Send } from 'lucide-react'
import { profile } from '../data/content.js'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to a service like Formspree, EmailJS, or your own API.
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3000)
    e.target.reset()
  }

  return (
    <section id="contact" className="mt-28">
      <h2 className="section-heading">Let's Connect</h2>
      <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-md">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
        <input
          required
          type="text"
          name="name"
          placeholder="Your name"
          className="card px-4 py-3 text-sm bg-transparent outline-none focus:border-accent-pink"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your email"
          className="card px-4 py-3 text-sm bg-transparent outline-none focus:border-accent-pink"
        />
        <textarea
          required
          name="message"
          placeholder="Your message"
          rows={4}
          className="card px-4 py-3 text-sm bg-transparent outline-none focus:border-accent-pink sm:col-span-2"
        />
        <button
          type="submit"
          className="pill-btn sm:col-span-2 justify-center border-accent-pink bg-accent-pink text-white hover:opacity-90 w-fit"
        >
          <Send size={16} /> {status === 'sent' ? 'Message Sent!' : 'Send Message'}
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        Or reach me directly at{' '}
        <a href={profile.socials.find((s) => s.label === 'Email')?.url} className="text-accent-pink font-medium">
          {profile.socials.find((s) => s.label === 'Email')?.url.replace('mailto:', '')}
        </a>
      </p>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clinicData } from '../../data/clinicData'
import { getBookingHref, getTelHref } from '../../utils/links'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

function LogoMark() {
  return (
    <svg className="h-9 w-9 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect width="32" height="32" rx="9" className="fill-brand-600" />
      <path
        fill="#fff"
        d="M10 11c0-1.5 1-2.5 2.5-2.5S15 9.5 15 11v1.2c.3-.5.8-.8 1.5-.8 1 0 1.8.7 2 1.7.2-.6.8-1 1.5-1 1.2 0 2 1 2 2.3 0 3.5-1.5 7.5-4 7.5-.8 0-1.4-.4-1.8-1.1-.4.7-1 1.1-1.7 1.1-1.4 0-2.5-2.2-2.5-5.5V11Z"
      />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const bookingHref = getBookingHref()
  const bookingIsExternal = bookingHref.startsWith('http')
  const tel = getTelHref(clinicData.phone)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[box-shadow,background-color] duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm shadow-slate-200/60 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark />
          <div className="text-left leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              {clinicData.clinicName}
            </span>
            <span className="hidden text-xs font-medium text-brand-700 sm:block">Family dentistry</span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-50 hover:text-brand-800"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={tel}
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800 md:inline-flex"
          >
            Call
          </a>
          <a
            href={bookingHref}
            {...(bookingIsExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="inline-flex items-center justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-600/25 transition hover:bg-brand-700"
          >
            Book appointment
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={tel}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-base font-semibold text-slate-800"
                onClick={() => setOpen(false)}
              >
                Call now
              </a>
              <a
                href={bookingHref}
                {...(bookingIsExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-4 py-3 text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Book appointment
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

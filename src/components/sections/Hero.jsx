import { motion } from 'framer-motion'
import { clinicData } from '../../data/clinicData'
import { getBookingHref, getTelHref } from '../../utils/links'
import StarRating from '../ui/StarRating'

export default function Hero() {
  const tel = getTelHref(clinicData.phone)
  const bookingHref = getBookingHref()
  const bookingIsExternal = bookingHref.startsWith('http')

  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white pt-28 pb-16 sm:scroll-mt-28 sm:pt-32 sm:pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800 shadow-sm"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
            Accepting new patients
          </motion.p>
          <motion.h1
            className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            {clinicData.clinicName}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-lg text-slate-600 sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {clinicData.tagline}
          </motion.p>
          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-600"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
          >
            {clinicData.trustStatement}
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <StarRating rating={clinicData.googleRating} />
            <span className="text-sm font-semibold text-slate-800">
              {clinicData.googleRating}{' '}
              <span className="font-normal text-slate-500">
                ({clinicData.reviewCount} Google reviews)
              </span>
            </span>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
          >
            <a
              href={tel}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:border-brand-200 hover:bg-brand-50"
            >
              Call now
            </a>
            <a
              href={bookingHref}
              {...(bookingIsExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-md shadow-brand-600/25 transition hover:bg-brand-700"
            >
              Book appointment
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-100 via-white to-brand-50 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-100">
            <img
              src={clinicData.heroImageSrc}
              width={1200}
              height={900}
              className="aspect-[4/3] h-auto w-full object-cover"
              alt=""
              decoding="async"
              fetchPriority="high"
            />
            <p className="border-t border-slate-100 bg-white px-4 py-3 text-center text-xs text-slate-500">
              Replace <code className="rounded bg-slate-100 px-1">heroImageSrc</code> in{' '}
              <code className="rounded bg-slate-100 px-1">src/data/clinicData.js</code>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { clinicData } from '../../data/clinicData'
import { getTelHref } from '../../utils/links'

/** Prominent click-to-call entry on small screens (WhatsApp float sits above it). */
export default function MobileCallFab() {
  const tel = getTelHref(clinicData.phone)

  return (
    <motion.a
      href={tel}
      className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/30 ring-4 ring-white sm:hidden"
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.35 }}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
      Call {clinicData.phone}
    </motion.a>
  )
}

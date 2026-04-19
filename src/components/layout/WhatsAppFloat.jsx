import { motion } from 'framer-motion'
import { getWhatsAppHref } from '../../utils/links'

export default function WhatsAppFloat() {
  const href = getWhatsAppHref()
  if (!href) return null

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 ring-4 ring-white sm:bottom-8 sm:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      aria-label="Chat on WhatsApp"
    >
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M16.003 3C9.374 3 4 8.269 4 14.672c0 2.465.806 4.753 2.177 6.61L4.05 28.95l7.897-2.07A11.86 11.86 0 0 0 16.004 26.5c6.629 0 12.003-5.37 12.003-11.828C28.007 8.27 22.632 3 16.003 3Zm6.892 16.457c-.095.267-1.09 2.14-2.24 2.14-.56 0-1.12-.28-1.68-.28-.654 0-1.12.28-1.68 1.12-.56.84-1.68 2.8-4.2 2.8-2.38 0-4.06-1.68-4.62-2.24-.56-.56-2.24-2.24-2.24-4.76 0-2.52 1.26-3.78 1.68-4.34.42-.56 1.12-1.12 1.12-1.96 0-.84-.56-1.68-.84-2.24-.28-.56-.56-1.12-.56-1.68 0-.56.28-1.12.84-1.96.56-.84 1.68-1.68 1.96-1.96.28-.28 1.12-.56 1.96-.56.84 0 1.68.28 1.96.28.28 0 1.68.56 1.96 1.12.28.56.56 1.12.84 1.68.28.56.56 1.12.84 1.68.28.56.28 1.12 0 1.68-.28.56-.84 1.68-1.12 2.24-.28.56-.56 1.12-.28 1.68.28.56 1.12 1.68 1.4 2.24.28.56.56 1.12.28 1.68-.28.56-1.12 2.24-1.68 2.8Z" />
      </svg>
    </motion.a>
  )
}

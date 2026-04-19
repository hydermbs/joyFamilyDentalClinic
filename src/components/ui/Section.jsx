import { motion } from 'framer-motion'

const viewport = { once: true, margin: '-12% 0px -12% 0px' }

export function Section({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 md:scroll-mt-28 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

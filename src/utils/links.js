import { clinicData } from '../data/clinicData'

/** Returns true if value is still a template placeholder like [EMAIL] */
export function isPlaceholder(value) {
  if (value == null || typeof value !== 'string') return false
  return /^\[[^\]]+\]$/.test(value.trim())
}

/** Booking button href: external link or in-page appointment form */
export function getBookingHref() {
  const link = clinicData.bookingLink
  if (!link || isPlaceholder(link)) return '#appointment'
  return link
}

/** WhatsApp chat URL; falls back to clinic phone when whatsapp is not set */
export function getWhatsAppHref() {
  const raw = clinicData.whatsapp
  if (raw && !isPlaceholder(raw)) {
    const digits = String(raw).replace(/\D/g, '')
    if (digits.length >= 8) return `https://wa.me/${digits}`
  }
  const phoneDigits = String(clinicData.phone || '').replace(/\D/g, '')
  if (phoneDigits.length >= 8) return `https://wa.me/${phoneDigits}`
  return null
}

export function getTelHref(phone) {
  const digits = String(phone || '').replace(/[^\d+]/g, '')
  return digits ? `tel:${digits}` : '#contact'
}

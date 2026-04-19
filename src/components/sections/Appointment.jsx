import { useState } from 'react'
import { motion } from 'framer-motion'
import { clinicData } from '../../data/clinicData'
import { Section } from '../ui/Section'
import { getBookingHref } from '../../utils/links'

const initial = { name: '', phone: '', service: '', date: '', message: '' }

export default function Appointment() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const bookingHref = getBookingHref()
  const bookingIsExternal = bookingHref.startsWith('http')

  function onChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    // Wire this to your backend, form service, or email API.
    console.info('Appointment request (demo only):', form)
  }

  return (
    <Section id="appointment" className="bg-gradient-to-b from-white via-brand-50/40 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Appointments</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Request a visit in under a minute
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              This form is front-end only—connect it to your CRM, inbox, or booking platform. Until then, patients
              can still reach you by phone or your primary{' '}
              <a href={bookingHref} className="font-semibold text-brand-700 underline-offset-2 hover:underline">
                online booking link
              </a>
              .
            </p>
            <div className="mt-8 rounded-2xl border border-brand-100 bg-white/80 p-5 text-sm text-slate-600 shadow-sm ring-1 ring-brand-50">
              <p className="font-semibold text-slate-900">Emergency</p>
              <p className="mt-2 leading-relaxed">{clinicData.emergencyText}</p>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Full name</span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-900 outline-none ring-brand-200 transition focus:border-brand-300 focus:bg-white focus:ring-4"
                  autoComplete="name"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-900 outline-none ring-brand-200 transition focus:border-brand-300 focus:bg-white focus:ring-4"
                  autoComplete="tel"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Service</span>
                <select
                  required
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-900 outline-none ring-brand-200 transition focus:border-brand-300 focus:bg-white focus:ring-4"
                >
                  {clinicData.appointmentForm.serviceOptions.map((o) => (
                    <option key={o.value || 'empty'} value={o.value} disabled={o.placeholder}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Preferred date
                </span>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-900 outline-none ring-brand-200 transition focus:border-brand-300 focus:bg-white focus:ring-4"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className="mt-1 w-full resize-y rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-900 outline-none ring-brand-200 transition focus:border-brand-300 focus:bg-white focus:ring-4"
                />
              </label>
            </div>
            {submitted ? (
              <p className="mt-4 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 ring-1 ring-emerald-100">
                Thanks—your details are captured in this demo. Connect the form handler to your workflow to
                receive real requests.
              </p>
            ) : null}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition hover:bg-brand-700"
              >
                Submit request
              </button>
              <a
                href={bookingHref}
                {...(bookingIsExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-200 hover:bg-brand-50"
              >
                Open booking link
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </Section>
  )
}

import { clinicData } from '../../data/clinicData'
import { Section } from '../ui/Section'
import { ServiceIcon } from '../icons/ServiceIcons'

export default function Services() {
  return (
    <Section id="services" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Services</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive care for every smile in the family
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Edit the <code className="rounded bg-white px-1.5 py-0.5 text-sm">services</code> array in{' '}
              <code className="rounded bg-white px-1.5 py-0.5 text-sm">clinicData.js</code> to match your
              exact clinical menu.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clinicData.services.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100">
                <ServiceIcon id={s.id} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

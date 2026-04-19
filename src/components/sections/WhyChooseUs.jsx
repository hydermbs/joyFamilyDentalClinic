import { clinicData } from '../../data/clinicData'
import { Section } from '../ui/Section'
import { WhyIcon } from '../icons/WhyIcons'

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Why choose us</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Dentistry that feels calm, clear, and genuinely personal
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From routine hygiene to urgent care, we focus on conservative options, modern techniques, and
            respectful communication at every visit.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clinicData.whyChooseUs.map((item) => (
            <li
              key={item.id}
              className="group rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/40 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100 transition group-hover:bg-brand-100">
                <WhyIcon name={item.icon} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

import { clinicData } from '../../data/clinicData'
import { Section } from '../ui/Section'

export default function Faq() {
  return (
    <Section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">FAQ</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Answers to common questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Maintain questions in the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">faqs</code>{' '}
            array inside <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">clinicData.js</code>.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          {clinicData.faqs.map((f) => (
            <details
              key={f.id}
              className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-1 shadow-sm open:bg-white open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-4 text-left text-sm font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                {f.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-slate-100 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-4 pb-4 text-sm leading-relaxed text-slate-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}

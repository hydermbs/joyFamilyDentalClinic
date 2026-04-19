import { clinicData } from '../../data/clinicData'
import { Section } from '../ui/Section'
import StarRating from '../ui/StarRating'

export default function Testimonials() {
  return (
    <Section id="reviews" className="bg-gradient-to-b from-brand-50/60 via-white to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Reviews</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Kind words from people who trust our chairside care
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Update <code className="rounded bg-white px-1.5 py-0.5 text-sm">testimonials</code> in{' '}
            <code className="rounded bg-white px-1.5 py-0.5 text-sm">clinicData.js</code> with snippets from
            your live Google reviews.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {clinicData.testimonials.map((t) => (
            <li
              key={t.id}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm ring-1 ring-slate-100 backdrop-blur-sm"
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-6 text-sm font-semibold text-slate-900">{t.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

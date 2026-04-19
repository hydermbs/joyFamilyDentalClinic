import { clinicData } from '../../data/clinicData'
import { Section } from '../ui/Section'

export default function AboutDentist() {
  return (
    <Section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-50 to-white blur-xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-lg shadow-slate-200/50">
              <img
                src={clinicData.dentistPhotoSrc}
                width={560}
                height={700}
                className="aspect-[4/5] h-auto w-full object-cover"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Meet your dentist</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {clinicData.dentistName}
            </h2>
            <p className="mt-3 inline-flex rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-800 ring-1 ring-brand-100">
              {clinicData.yearsExperience} years experience
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600 whitespace-pre-line">
              {clinicData.aboutText}
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                Gentle technique for anxious patients
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                Clear explanations before any procedure
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                Family-focused scheduling
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                Focus on long-term oral health
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

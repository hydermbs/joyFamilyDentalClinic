import { clinicData } from '../../data/clinicData'
import { getTelHref, isPlaceholder } from '../../utils/links'

const quick = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book', href: '#appointment' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const tel = getTelHref(clinicData.phone)

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold text-slate-900">{clinicData.clinicName}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">{clinicData.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Quick links</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {quick.map((q) => (
                <li key={q.href}>
                  <a href={q.href} className="text-slate-700 hover:text-brand-700">
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>{clinicData.address}</li>
              <li>
                <a href={tel} className="hover:text-brand-700">
                  {clinicData.phone}
                </a>
              </li>
              <li>
                {isPlaceholder(clinicData.email) ? (
                  <span className="text-slate-500">{clinicData.email}</span>
                ) : (
                  <a href={`mailto:${clinicData.email}`} className="hover:text-brand-700">
                    {clinicData.email}
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
          © {year} {clinicData.clinicName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

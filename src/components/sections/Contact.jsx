import { clinicData } from '../../data/clinicData'
import { Section } from '../ui/Section'
import { getTelHref, isPlaceholder } from '../../utils/links'

export default function Contact() {
  const tel = getTelHref(clinicData.phone)

  return (
    <Section id="contact" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Contact</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Visit us on Mount Eden Road
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Update hours, email, and the map embed in <code className="rounded bg-white px-1.5 py-0.5 text-sm">clinicData.js</code> when you sync with Google Business Profile.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:col-span-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Address</p>
              <p className="mt-1 text-sm font-medium text-slate-900">{clinicData.address}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</p>
              <a href={tel} className="mt-1 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800">
                {clinicData.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
              {isPlaceholder(clinicData.email) ? (
                <p className="mt-1 text-sm text-slate-600">{clinicData.email}</p>
              ) : (
                <a
                  href={`mailto:${clinicData.email}`}
                  className="mt-1 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  {clinicData.email}
                </a>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Opening hours</p>
              <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                {clinicData.openingHours}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-100 lg:col-span-3">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Map preview</p>
              <a
                href={clinicData.mapsPlaceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-brand-700 hover:text-brand-800"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="aspect-[16/11] w-full lg:aspect-auto lg:min-h-[420px]">
              <iframe
                title="Clinic location map"
                src={clinicData.mapsEmbedUrl}
                className="h-full min-h-[320px] w-full border-0 lg:min-h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

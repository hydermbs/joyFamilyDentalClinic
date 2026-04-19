import { clinicData } from '../../data/clinicData'
import { Section } from '../ui/Section'

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Gallery</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Before &amp; after highlights
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Swap placeholder images in the <code className="rounded bg-white px-1.5 py-0.5 text-sm">gallery</code>{' '}
            array for real, consent-approved photography.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {clinicData.gallery.map((g) => (
            <figure
              key={g.id}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-100"
            >
              <figcaption className="border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-800">
                {g.caption}
              </figcaption>
              <div className="grid grid-cols-2 gap-px bg-slate-100">
                <div className="bg-white">
                  <p className="bg-slate-50 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Before
                  </p>
                  <img
                    src={g.beforeSrc}
                    alt=""
                    className="aspect-[4/3] h-auto w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="bg-white">
                  <p className="bg-brand-50 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-brand-800">
                    After
                  </p>
                  <img
                    src={g.afterSrc}
                    alt=""
                    className="aspect-[4/3] h-auto w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  )
}

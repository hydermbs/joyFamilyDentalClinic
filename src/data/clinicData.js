/**
 * Joy Family Dental Clinic — single source of truth for all editable content.
 * Replace bracketed placeholders (e.g. [EMAIL]) when you copy details from Google Maps / GBP.
 *
 * Original Maps place link (reference):
 * https://www.google.com/maps/place/Joy+Family+Dental+Clinic/@-36.8854084,174.7566679,17z/data=!4m15!1m8!3m7!1s0x6d0d463242884401:0xdc8c9c4fd7a4b3b9!2sJoy+Family+Dental+Clinic!8m2!3d-36.8854085!4d174.7615388!10e1!16s%2Fg%2F1tpn2rm4!3m5!1s0x6d0d463242884401:0xdc8c9c4fd7a4b3b9!8m2!3d-36.8854085!4d174.7615388!16s%2Fg%2F1tpn2rm4?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D
 */

export const clinicData = {
  clinicName: 'Joy Family Dental Clinic',
  tagline: 'Gentle family dentistry with modern care—confident smiles at every age.',

  address: '536 Mount Eden Rd',
  phone: '+64 210 365 717',
  /** E.164 without + for wa.me, or keep "[WHATSAPP]" until you add the business WhatsApp number */
  whatsapp: '[WHATSAPP]',
  email: '[EMAIL]',

  googleRating: 4.2,
  reviewCount: 17,

  openingHours: '[OPENING_HOURS]',

  dentistName: '[DENTIST_NAME]',
  yearsExperience: '[YEARS_EXPERIENCE]',
  aboutText:
    '[ABOUT_TEXT] Replace this paragraph with your dentist’s bio, qualifications, and philosophy. Aim for 2–4 short sentences that build trust and highlight gentle, family-focused care.',

  /** Shown in hero and contact; override copy in components if needed */
  trustStatement:
    'Local families trust us for careful exams, clear treatment plans, and a calm, welcoming chairside experience.',

  emergencyText:
    '[EMERGENCY_TEXT] Describe after-hours guidance or emergency triage instructions here.',

  /** Official Google Maps place URL (share link). */
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Joy+Family+Dental+Clinic/@-36.8854084,174.7566679,17z/data=!4m15!1m8!3m7!1s0x6d0d463242884401:0xdc8c9c4fd7a4b3b9!2sJoy+Family+Dental+Clinic!8m2!3d-36.8854085!4d174.7615388!10e1!16s%2Fg%2F1tpn2rm4!3m5!1s0x6d0d463242884401:0xdc8c9c4fd7a4b3b9!8m2!3d-36.8854085!4d174.7615388!16s%2Fg%2F1tpn2rm4?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D',

  /**
   * Iframe `src` — embed-friendly. Replace with the `src` from Maps → Share → Embed a map if needed.
   * Coordinates match `mapsPlaceUrl`.
   */
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=-36.8854085,174.7615388&hl=en&z=17&output=embed',

  /** Primary booking CTA — online scheduler, HealthEngine, Google Booking button, etc. */
  bookingLink: '[BOOKING_LINK]',

  seo: {
    title: 'Joy Family Dental Clinic | Family & Cosmetic Dentistry | Mount Eden',
    description:
      'Joy Family Dental Clinic on Mount Eden Road offers gentle family dentistry, cosmetic treatments, and emergency care. Call +64 210 365 717 to book.',
    keywords:
      'dentist Mount Eden, family dental Auckland, teeth cleaning, whitening, braces, dental implants, emergency dentist',
    canonicalPath: '/',
    ogImage: '/og-image-placeholder.svg',
  },

  whyChooseUs: [
    {
      id: 'experience',
      title: 'Experienced dentist',
      description:
        'Thoughtful diagnosis and conservative treatment plans tailored to your goals and budget.',
      icon: 'stethoscope',
    },
    {
      id: 'equipment',
      title: 'Modern equipment',
      description:
        'Digital workflows and comfortable techniques designed to make visits quicker and easier.',
      icon: 'sparkles',
    },
    {
      id: 'affordable',
      title: 'Affordable treatment',
      description:
        'Transparent fees and options explained upfront so you can decide with confidence.',
      icon: 'wallet',
    },
    {
      id: 'friendly',
      title: 'Friendly care',
      description:
        'A warm team that takes time with nervous patients and families with young children.',
      icon: 'heart',
    },
    {
      id: 'emergency',
      title: 'Emergency support',
      description:
        'Same-day attention for urgent pain or dental injuries whenever capacity allows.',
      icon: 'lifebuoy',
    },
  ],

  /**
   * Default service cards — edit titles/descriptions or replace the entire array.
   * [SERVICES] in your brief = this list + optional extra items you add here.
   */
  services: [
    {
      id: 'cleaning',
      title: 'Teeth Cleaning',
      description:
        'Professional hygiene visits to remove plaque and tartar and keep gums healthy.',
    },
    {
      id: 'whitening',
      title: 'Whitening',
      description:
        'Safe, monitored whitening options for a naturally brighter smile.',
    },
    {
      id: 'braces',
      title: 'Braces',
      description:
        'Orthodontic assessments and referrals aligned with your alignment goals.',
    },
    {
      id: 'root-canal',
      title: 'Root Canal',
      description:
        'Comfort-focused endodontic care to relieve pain and preserve your natural tooth.',
    },
    {
      id: 'implants',
      title: 'Implants',
      description:
        'Implant consultations and coordinated treatment planning with trusted specialists.',
    },
    {
      id: 'emergency',
      title: 'Emergency Dental Care',
      description:
        'Prompt attention for toothaches, swelling, broken teeth, and urgent dental trauma.',
    },
  ],

  /** [TESTIMONIALS] — add or replace objects; keep `rating` between 1–5 */
  testimonials: [
    {
      id: 't1',
      name: 'Sophie Dunkley',
      quote:
        'Came in for a cleaning and x-rays. The clinic was very clean and tidy and the dentist did a great job. The treatment was relatively quick and painless and she also took the time to explain everything to me throughout the procedure. Affordable and high quality 👍 …',
      rating: 5,
    },
    {
      id: 't2',
      name: 'Marie-Antoniette Balungcas',
      quote:
        'Dentist Jane has become my go-to dentist. She offers affordable dental services. I like to keep coming back here (eventhough I work at a dental clinic) because I feel that she genuinely cares for my oral health and not just earning $$. I highly recommend her',
      rating: 5,
    },
    {
      id: 't3',
      name: 'Zhu Helen',
      quote:
        'Jane is a professional dentist, she’s really good at several dental treatments such as root canal treatment, wisdom teeth removal, teeth restoration and cleaning. She’s always trying to explain as much as details to her patients so that lots of customers feel very comfortable in the whole treatment. In the meanwhile, Jane would like to spend as much as time she can on every patient which is quite different from some of the dental companies.',
      rating: 5,
    },
  ],

  /**
   * [GALLERY] — before/after placeholders; swap `beforeSrc` / `afterSrc` for real photos.
   * Use compressed WebP/JPEG in production for performance.
   */
  gallery: [
    {
      id: 'g1',
      caption: 'Whitening — example case',
      beforeSrc:
        'https://placehold.co/600x400/f1f5f9/64748b/png?text=Before+%28replace%29',
      afterSrc:
        'https://placehold.co/600x400/e0f2fe/0c4a6e/png?text=After+%28replace%29',
    },
    {
      id: 'g2',
      caption: 'Alignment — example case',
      beforeSrc:
        'https://placehold.co/600x400/f1f5f9/64748b/png?text=Before+%28replace%29',
      afterSrc:
        'https://placehold.co/600x400/e0f2fe/0c4a6e/png?text=After+%28replace%29',
    },
    {
      id: 'g3',
      caption: 'Restorative — example case',
      beforeSrc:
        'https://placehold.co/600x400/f1f5f9/64748b/png?text=Before+%28replace%29',
      afterSrc:
        'https://placehold.co/600x400/e0f2fe/0c4a6e/png?text=After+%28replace%29',
    },
  ],

  /** [FAQS] */
  faqs: [
    {
      id: 'faq1',
      question: 'Do you accept new patients?',
      answer:
        'Yes. New patients are welcome—mention any concerns or past dental history when you book so we can allow enough time.',
    },
    {
      id: 'faq2',
      question: 'How do I book an appointment?',
      answer:
        'Use the booking link in this template once configured, call the practice number, or send a message with your preferred times.',
    },
    {
      id: 'faq3',
      question: 'What if I have a dental emergency?',
      answer:
        'Call the clinic phone number for triage advice. Update [EMERGENCY_TEXT] here with your after-hours policy.',
    },
    {
      id: 'faq4',
      question: 'Do you offer payment plans?',
      answer:
        'Payment options vary by treatment—ask at reception for the latest information and any third-party plan providers you work with.',
    },
  ],

  /** Hero / team imagery — replace with your own photography */
  heroImageSrc:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
  dentistPhotoSrc:
    'https://placehold.co/560x700/f8fafc/475569/png?text=%5BDENTIST_PHOTO%5D',

  appointmentForm: {
    serviceOptions: [
      { value: '', label: 'Select a service', placeholder: true },
      { value: 'checkup', label: 'Check-up & hygiene' },
      { value: 'whitening', label: 'Whitening consult' },
      { value: 'pain', label: 'Tooth pain / emergency' },
      { value: 'cosmetic', label: 'Cosmetic dentistry' },
      { value: 'children', label: "Children's visit" },
      { value: 'other', label: 'Other' },
    ],
  },
}

export default clinicData

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppFloat from '../components/layout/WhatsAppFloat'
import MobileCallFab from '../components/layout/MobileCallFab'
import SeoHelmet from '../components/seo/SeoHelmet'
import Hero from '../components/sections/Hero'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Services from '../components/sections/Services'
import AboutDentist from '../components/sections/AboutDentist'
import Testimonials from '../components/sections/Testimonials'
import Gallery from '../components/sections/Gallery'
import Faq from '../components/sections/Faq'
import Appointment from '../components/sections/Appointment'
import Contact from '../components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <SeoHelmet />
      <Navbar />
      <main className="pb-28 sm:pb-0">
        <Hero />
        <WhyChooseUs />
        <Services />
        <AboutDentist />
        <Testimonials />
        <Gallery />
        <Faq />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCallFab />
    </>
  )
}

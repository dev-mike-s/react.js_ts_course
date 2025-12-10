// root/src/pages/HomePage.tsx

import Header from '../components/layout/Header.tsx'
import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'
import TechBanner from '../components/TechBanner.tsx'
import Services from '../components/Services.tsx'
import Cta from '../components/Cta.tsx'
import Contactform from '../components/Contactform.tsx'
import Footer from '../components/layout/Footer.tsx'

/** 
 * @returns dies das
 */
function HomePage() 
{
  return (
    <>
      <Header />
        <Navbar />
        <Hero />
        <TechBanner />
        <Services />
        <Cta />
        <Contactform />
      <Footer />
    </>
  )
};

export default HomePage
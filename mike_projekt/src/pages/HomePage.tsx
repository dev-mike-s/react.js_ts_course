// root/src/pages/HomePage.tsx

import Header from '../components/layout/Header.tsx'
import Navbar from '../components/Navbar.tsx'
import NavbarDesktop from '../components/NavbarDesktop.tsx'
import Hero from '../components/Hero.tsx'
import HeroDesktop from '../components/HeroDesktop.tsx'
import TechBanner from '../components/TechBanner.tsx'
import Services from '../components/Services.tsx'
import Cta from '../components/Cta.tsx'
import Contactform from '../components/Contactform.tsx'
import Footer from '../components/layout/Footer.tsx'
import { useState, useEffect } from 'react';

export const Device = {
    Mobile: "mobile",
    Tablet: "tablet", 
    Desktop: "desktop"
} as const;

export type DeviceType = typeof Device[keyof typeof Device];

/** 
 * @returns dies das
 */
function HomePage() 
{
  const [device, setDevice] = useState<DeviceType>(Device.Mobile);

  const getDevice = () => 
  {
      const width = window.innerWidth;
      if (width < 640) {
          setDevice(Device.Mobile);
      } else if (width >= 640 && width < 1024) {
          setDevice(Device.Tablet);
      } else {
          setDevice(Device.Desktop);
      }
  }
 
  /** 
   * @returns Cleanup, im Endeffekt gibt es insgesamt nur 1x EventListener mit getDevice.
   * Wird einmalig beim Laden der Komponente ausgeführt, wegen: [] - 
   * das Device wird gesetzt, bevor das Layout angezeigt wird.
   * EventListener wartet auf Fenstergrößenänderungen, führt dann Handler aus.
   */
  useEffect(() => 
  {
      getDevice();
      
      const handleResize = () => {
          getDevice();
      };
      
      window.addEventListener('resize', handleResize);
    
      return () => {
          window.removeEventListener('resize', handleResize);
      };
      
  }, []);

  return (
    <>
      <Header />
        { console.log("Komponente: HomePage, Wert von device: " + device) }
        { device === Device.Mobile ? <Navbar/> : <NavbarDesktop /> }
        { device === Device.Desktop ? <HeroDesktop /> : <Hero /> }
        <TechBanner />
        <Services />
        <Cta />
        <Contactform />
      <Footer />
    </>
  )
};

export default HomePage
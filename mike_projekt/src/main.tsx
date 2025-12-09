// root/src/main.tsx

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Index from './styles/index.css'
import { StrictMode } from 'react'
import { BrowserRouter, Route, NavLink} from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Hero from './components/HeroSection.tsx'
import TechBanner from './components/TechBannerSection.tsx'
import Services from './components/ServicesSection.tsx'
import Cta from './components/Cta.tsx'
import Contactform from './components/Contactform.tsx'
import Footer from './components/Footer.tsx'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

/** 
 * @returns dies das
 */
root.render(
  <StrictMode>
    <BrowserRouter>

      <App />
    </BrowserRouter>
  </StrictMode>
);

// root/src/components/Navbar.tsx
// A component to render a navigation bar, has a toggle for mobile view and nav links.

import { useState } from 'react';
import { FaReact, FaBars } from "react-icons/fa6";
import companylogo from '../assets/logo.png';


/** 
 * @returns todo
 * @docs    https://github.com/0x-skuld/Tailwindcss-React-Responsive-Navbar
 */
function Navbar() 
{
    const [toggleMenu, setToggleMenu] = useState(false);
    const [showLogo, setShowLogo] = useState(true);
    
    const handleToggleMenu = () => 
    {
        setToggleMenu(prevToggleMenu => !prevToggleMenu);
        setShowLogo(prevShowLogo => !prevShowLogo);
    }

    return (
    <>        
        {console.log("Komponente: Navbar, Wert von toggleMenu: " + toggleMenu)}

        <nav className="navigation bg-gray-800 h-14 lg:h-20 m-0 p-0 fixed top-0 w-full z-50"
        >            
            <div className={`flex mx-auto ${ toggleMenu ? "justify-center w-full" : "justify-between w-5/6"}`}
            >
                <div className={`flex items-center pt-4 my-0 ${toggleMenu ? "gap-0" : "gap-24"}`}
                >         

                    { /* logo */ }
                    {showLogo &&
                        <div className="flex items-center" style={{ paddingLeft: '24px'}}>
                            <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
                                <img src={companylogo} alt="MSP Logo" className="h-18 w-18"/>
                            </a>
                        </div>
                    }
                    
                    { /* primary nav */ } 
                    <div className="hidden lg:flex gap-8">
                        <a  href="#" className="text-white">
                        Start
                        </a>
                        <a href="#" className="text-white">Leistung</a>
                        <a href="#" className="text-white">Über</a>
                        <a href="#" className="text-white">Kontakt</a>
                    </div>

                    {/* secondary */}
                    <div className="flex gap-6">
                        <div className="hidden xs:flex items-center gap-10">
                            <div className="hidden lg:flex items-center gap-2">
                                <FaReact className="h-6 w-6" />
                                <FaReact className="h-6 w-6" />
                            </div>
                            <button className="rounded-full border-solid border-2 border-gray-300 
                                py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                                Kundenlogin
                            </button>
                        </div>
                    </div>

                    {/* Mobile nav toggle */}
                    <div id="mobile-nav-toggle" className="ld:hidden flex items-center">
                        <button 
                            type="button" 
                            className="navbar-toggler" 
                            onClick={handleToggleMenu}
                        >
                            <span className="navbar-toggler-icon">
                                <FaBars className="h-6 fill-blue-100" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile navigation */} 
            
            <div className={`fixed z-40 w-full bg-gray-800 overflow-hidden flex flex-col 
                lg:hidden gap-12 origin-top duration-700 ${ !toggleMenu ? "h-0" : "h-full"}`}>

                <div className="px-8">
                    <div className="flex flex-col gap-8 font-bold tracking-wider text-center text-white pt-6">
                        <a href="#" className="border-l-4 border-gray-600">
                            Leistungen
                        </a>
                        <a href="#">Über</a>
                        <a href="#">Kundenlogin</a>
                        <a href="#">Impressum</a>
                        <a href="#">Datenschutz</a>
                        <a href="#">Kontakt</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
    );
}

export default Navbar;
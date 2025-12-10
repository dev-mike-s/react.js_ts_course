// root/src/components/Navbar.tsx
// A component to render a navigation bar, has a toggle for mobile view and nav links.

import { useState } from 'react';
import { FaReact, FaBars } from "react-icons/fa6";

/** 
 * @returns todo
 * @docs    https://github.com/0x-skuld/Tailwindcss-React-Responsive-Navbar
 */
function Navbar() 
{
    const [toggleMenu, setToggleMenu] = useState(false);
    
    const handleToggleMenu = () => {
        if (toggleMenu === null) {
            throw new Error("toggleMenu is null");
        }
        setToggleMenu(!toggleMenu);
    }

    return (
    <>
        <h1 className="bg-red-500 text-white p-4">Test</h1>
        
        <nav className="navigation">
            <div className="max-w-7xl mx-auto">
                <div className="flex mx-auto justify-between w-5/6">
                    <div className="flex items-center gap-16 my-12">

                        { /* logo */ }
                        <div>
                            <a href="/" className="flex gap-1 font-bold text-gray-700 items-center"
                            >
                                <FaReact className="h-6 w-6 text-primary"/>
                                <span className="">MSP</span>
                            </a>
                        </div>

                        { /* primary nav */ } 
                        <div className="hidden lg:flex gap-8 ">
                            <a  href="#" className=""
                            >
                            Start
                            </a>
                            <a href="#">Leist</a>
                            <a href="#">Über</a>
                            <a href="#">Kont</a>
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
                                    kLogin
                                </button>
                            </div>
                        </div>

                        {/* Mobile nav toggle */}
                        <div className="ld:hidden flex items-center">
                            <button 
                                type="button" 
                                className="navbar-toggler" 
                                aria-controls=''
                                aria-expanded="false"
                                onClick={handleToggleMenu}
                            >
                                <span className="navbar-toggler-icon">
                                    <FaBars className="h-6" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile navigation */} 
            <div className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col 
                lg:hidden gap-12 origin-top duration-700 ${ !toggleMenu ? "h-0" : "h-full"}`}>
                <div className="px-8">
                    <div className="flex flex-col gap-8 font-bold tracking-wider">
                        <a href="#" className="border-l-4 border-gray-600">
                            Test 1
                        </a>
                        <a href="#">a1</a>
                        <a href="#">a2</a>
                        <a href="#">a3</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
    );
}

export default Navbar;
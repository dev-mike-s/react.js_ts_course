//import React from 'react'

//import { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import companylogo from '../assets/logo.png';

/** 
 * @returns todo
 */
function NavbarDesktop() 
{

  return (
    <>
        {console.log("Komponente: NavbarDesktop, ... " + "")}

        <nav className="navigation  bg-gray-800 h-15 lg:h-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex mx-auto justify-between w-5/6">
                    <div className="flex items-center gap-16 my-12">

                        { /* logo */ }
                        <div style={{ paddingLeft: '24px'}}>
                            <a href="/" className="flex gap-1 font-bold text-gray-700 items-center"
                            >
                                <img src={ companylogo } alt="MSP Logo" className="h-20 w-20 object-fit: scale-down"/>
                                <span className=""></span>
                            </a>
                        </div>

                        { /* primary nav */ } 
                        <div className="hidden lg:flex gap-8">
                            <a  href="#" className="text-white">
                            Start
                            </a>
                            <a href="#" className="text-white">Leistungen</a>
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
                    </div>
                </div>
            </div>
        </nav>
    </>
    );
}

export default NavbarDesktop;
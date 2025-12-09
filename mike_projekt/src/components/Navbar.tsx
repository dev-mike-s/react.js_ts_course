// root/src/components/Navbar.tsx
// A component to render a navigation bar.
// Has a toggle for mobile view, shows or hides the navigation links.


import "../App.css";
import "../index.css";
import { FaReact } from "react-icons/fa6";

/** 
 * @returns {React.ReactElement} A React element representing the navigation bar.
 */
function Navbar() {

    //const [mobileNav, toggleMobileNav] = useState(-1);
    
    return (
        <nav className="navigation">
            <div className="max-w-7xl mx-auto">
                <div className="flex mx-auto justify-between w-5/6">
                    <div className="flex items-center gap-16 my-12">

                        { /* logo */ }
                        <div>
                            <a  href="/"
                                className="flex gap-1 font-bold text-gray-700 items-center"
                            >
                                <FaReact className="h-6 w-6 text-primary"/>
                                <span className="">test</span>
                            </a>
                        </div>

                        { /* primary nav */ } 
                        <div className="hidden lg:flex gap-8 ">
                            <a  href="#" 
                                className=""
                            >
                            Start
                            </a>
                            <a href="#">Benefits</a>
                            <a href="#">Our Classes</a>
                            <a href="#">Contact Us</a>
                        </div>

                        {/* secondary */}
                        <div className="flex gap-6">
                        <div className="hidden xs:flex items-center gap-10">
                            <div className="hidden lg:flex items-center gap-2">
                                <FaReact className="h-6 w-6" />
                                <FaReact className="h-6 w-6" />
                            </div>
                            <div>
                            <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                                Kundenlogin
                            </button>
                            </div>
                        </div>

                        {/* Mobile nav toggle */}
                        <div className="lg:hidden flex items-center">
                            {/*<button onClick={() => setToggleMenu(!toggleMenu)}> */}
                            <FaReact className="h-6" />
                          
                        </div>
                    </div>
                </div>
            
            </div>
            </div>

                {/* mobile navigation (example with toggle removed for now) */}
                {/* If you want the height toggled by `toggleMenu`, use the template below in TSX:
                <div className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden \
                    gap-12 origin-top duration-700 ${!toggleMenu ? 'h-0' : 'h-full'}`}> */}
                <div className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden 
                    gap-12 origin-top duration-700`}>
                <div className="px-8">
                    <div className="flex flex-col gap-8 font-bold tracking-wider">
                    <a href="#" className="border-l-4 border-gray-600">
                        Features
                    </a>
                    <a href="#">Pricing</a>
                    <a href="#">Download</a>
                    <a href="#">Classic</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


/*

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

*/
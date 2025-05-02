import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            className="h-[10vh] px-6 md:px-[98px] font-DMSans flex justify-between items-center relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Link
                to="/"
                className="flex text-2xl md:text-3xl font-bold leading-normal tracking-tight"
            >
                <span className="text-teal-900">Quick</span>
                <span className="text-green-500">Funds</span>
            </Link>

            {/* Desktop menu */}
            <ul className="hidden md:flex w-full max-w-[579px] justify-between">
                <li className="nav-link hover:text-[#1b414b] text-neutral-600 text-lg md:text-2xl cursor-pointer tracking-wide">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link hover:text-[#1b414b] text-neutral-600 text-lg md:text-2xl cursor-pointer tracking-wide">
                    <ScrollLink to="services" smooth={true} duration={100}>
                        Services
                    </ScrollLink>
                </li>
                <li className="nav-link hover:text-[#1b414b] text-neutral-600 text-lg md:text-2xl cursor-pointer tracking-wide">
                    <ScrollLink to="how-we-work" smooth={true} duration={100}>
                        How we work
                    </ScrollLink>
                </li>
                <li className="nav-link hover:text-[#1b414b] text-neutral-600 text-lg md:text-2xl cursor-pointer tracking-wide">
                    <ScrollLink to="contact" smooth={true} duration={100}>
                        Contact
                    </ScrollLink>
                </li>
            </ul>

            <div className="hidden md:flex">
                <Link
                    to="login"
                    className="w-[100px] md:w-[127px] h-[40px] md:h-[48px] rounded-full text-sm md:text-lg flex justify-center items-center border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                    Login
                </Link>
            </div>

            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile menu */}
            {isOpen && (
                <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-[10vh] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 z-10"
                >
                    <li onClick={toggleMenu} className="text-lg cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={toggleMenu} className="text-lg cursor-pointer">
                        <ScrollLink to="services" smooth={true} duration={100}>
                            Services
                        </ScrollLink>
                    </li>
                    <li onClick={toggleMenu} className="text-lg cursor-pointer">
                        <ScrollLink
                            to="how-we-work"
                            smooth={true}
                            duration={100}
                        >
                            How we work
                        </ScrollLink>
                    </li>
                    <li onClick={toggleMenu} className="text-lg cursor-pointer">
                        <ScrollLink to="contact" smooth={true} duration={100}>
                            Contact
                        </ScrollLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link
                            to="login"
                            className="w-[100px] h-[40px] rounded-full text-sm flex justify-center items-center border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            Login
                        </Link>
                    </li>
                </motion.ul>
            )}
        </motion.nav>
    );
};

export default NavBar;

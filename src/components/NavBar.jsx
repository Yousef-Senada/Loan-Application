import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router";
import { motion } from "framer-motion";

const NavBar = () => {
    return (
        <motion.nav
            className="h-[10vh] px-[98px] font-DMSans flex justify-between items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Link
                to="/"
                className="flex justify-start text-3xl font-bold leading-normal tracking-tight w-[175px]"
            >
                <span className="text-teal-900">Quick</span>
                <span className="text-green-500">Funds</span>
            </Link>
            <ul className="flex w-[579px] justify-between">
                <motion.li className="nav-link hover:text-[#1b414b] text-neutral-600 text-2xl leading-normal cursor-pointer tracking-wide">
                    <Link to="/">Home</Link>
                </motion.li>
                <motion.li className="nav-link hover:text-[#1b414b] text-neutral-600 text-2xl leading-normal cursor-pointer tracking-wide">
                    <ScrollLink
                        to="services"
                        smooth={true}
                        duration={100}
                        className="cursor-pointer"
                    >
                        Services
                    </ScrollLink>
                </motion.li>
                <motion.li className="nav-link hover:text-[#1b414b] text-neutral-600 text-2xl leading-normal cursor-pointer tracking-wide">
                    <ScrollLink
                        to="how-we-work"
                        smooth={true}
                        duration={100}
                        className="cursor-pointer"
                    >
                        How we work
                    </ScrollLink>
                </motion.li>
                <motion.li className="nav-link hover:text-[#1b414b] text-neutral-600 text-2xl leading-normal cursor-pointer tracking-wide">
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={100}
                        className="cursor-pointer"
                    >
                        Contact
                    </ScrollLink>
                </motion.li>
            </ul>
            <Link
                to="login"
                className="w-[127px] h-[48px] rounded-full text-lg flex justify-center items-center border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
                Login
            </Link>
        </motion.nav>
    );
};

export default NavBar;

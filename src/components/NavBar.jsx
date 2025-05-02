import React from "react";
import { Link } from "react-router";

const NavBar = () => {
    return (
        <nav className="h-[10vh] px-[98px] font-DMSans flex justify-between items-center">
            <Link
                to={"/"}
                className="flex justify-start text-3xl font-bold leading-normal tracking-tight w-[175px]"
            >
                <span className="text-teal-900">Quick</span>
                <span className="text-green-500">Funds</span>
            </Link>
            <ul className="flex w-[579px] justify-between">
                <Link
                    to={"/"}
                    className="text-neutral-600 text-2xl leading-normal tracking-wide"
                >
                    Home
                </Link>
                <a className=" text-neutral-600 text-2xl leading-normal tracking-wide">
                    Services
                </a>
                <a className=" text-neutral-600 text-2xl leading-normal tracking-wide">
                    How we work
                </a>
                <a className=" text-neutral-600 text-2xl leading-normal tracking-wide">
                    Contact
                </a>
            </ul>
            <Link
                to={"/login"}
                className="w-[127px] h-[48px] rounded-full text-lg flex justify-center items-center border-2 border-primary bg-primary text-white  hover:bg-white hover:text-primary transition-all duration-300"
            >
                Login
            </Link>
        </nav>
    );
};

export default NavBar;

import React from "react";

const NavBar = () => {
    return (
        <nav className="h-[10vh] px-[98px] font-DMSans flex justify-between items-center">
            <div className="flex justify-start text-3xl font-bold leading-normal tracking-tight w-[175px]">
                <span className="text-teal-900">Quick</span>
                <span className="text-green-500">Funds</span>
            </div>
            <ul className="flex w-[579px] justify-between">
                <li className=" text-neutral-600 text-2xl leading-normal tracking-wide">
                    Home
                </li>
                <li className=" text-neutral-600 text-2xl leading-normal tracking-wide">
                    Services
                </li>
                <li className=" text-neutral-600 text-2xl leading-normal tracking-wide">
                    How we work
                </li>
                <li className=" text-neutral-600 text-2xl leading-normal tracking-wide">
                    Contact
                </li>
            </ul>
            <button className="w-[127px] h-[48px] rounded-full text-lg flex justify-center items-center bg-primary text-white">
                Login
            </button>
        </nav>
    );
};

export default NavBar;

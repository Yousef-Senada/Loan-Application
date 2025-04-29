import React from "react";
import heroPhotoIcon from "../assets/heroPhoto.svg";

const Hero = () => {
    return (
        <section className="py-[128px] px-[98px] h-[676px] flex justify-between font-DMSans">
            <div className="flex flex-col justify-between w-[612px]">
                <p className=" text-primary text-7xl font-bold font-Raleway leading-[76px] tracking-wide">
                    Quick and Easy Loans for Your Financial Needs.
                </p>
                <p className="w-[592px] text-zinc-700 text-lg tracking-wide">
                    Our loan services offer a hassle-free and streamlined
                    borrowing experience, providing you with the funds you need
                    in a timely manner to meet your financial requirements.
                </p>
                <button className="w-[134px] h-[48px] rounded-full py-3 px-5 tracking-wide bg-white text-primary border-primary border-2 flex justify-center items-center">
                    Get started
                </button>
            </div>
            <div>
                <img src={heroPhotoIcon} alt="" />
            </div>
        </section>
    );
};

export default Hero;

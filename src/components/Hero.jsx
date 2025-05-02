import React, { useState } from "react";
import { motion } from "framer-motion";
import heroPhotoIcon from "../assets/heroPhoto.svg";
import QuestionModal from "./QuestionModal";

const Hero = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="py-[128px] px-[98px] h-[676px] flex justify-between font-DMSans">
            <motion.div
                className="flex flex-col justify-between w-[612px]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className=" text-primary text-7xl font-bold font-Raleway leading-[76px] tracking-wide">
                    Quick and Easy Loans for Your Financial Needs.
                </p>
                <p className="w-[592px] text-zinc-700 text-lg tracking-wide">
                    Our loan services offer a hassle-free and streamlined
                    borrowing experience, providing you with the funds you need
                    in a timely manner to meet your financial requirements.
                </p>
                <button
                    onClick={() => setOpen(true)}
                    className="w-[134px] h-[48px] rounded-full py-3 px-5 tracking-wide bg-white text-primary border-primary border-2 flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                    Get started
                </button>
            </motion.div>

            <QuestionModal isOpen={open} onClose={() => setOpen(false)} />

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                <img src={heroPhotoIcon} alt="Hero" />
            </motion.div>
        </section>
    );
};

export default Hero;

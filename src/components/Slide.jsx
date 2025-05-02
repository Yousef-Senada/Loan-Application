import React from "react";
import { motion } from "framer-motion";

const Slide = ({ img, number, title, desc }) => {
    const isEven = number % 2 === 0;

    const TextSection = (
        <div className="w-[546px] relative">
            <p className="text-[#e8e8e8] absolute -top-4 -left-20 text-8xl font-bold font-Raleway leading-[56px] tracking-wide -z-10">
                0{number}
            </p>
            <p className="text-primary text-3xl font-bold font-Raleway leading-[56px] tracking-wide">
                {title}
            </p>
            <div className="self-stretch text-zinc-700 text-lg font-normal font-DMSans tracking-wide">
                {desc}
            </div>
        </div>
    );

    const ImageSection = (
        <img className="w-[315px] h-[274px]" src={img} alt={`${img}`} />
    );

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? 150 : -150, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="h-[300px] flex justify-around items-center"
        >
            {isEven ? (
                <>
                    {TextSection}
                    {ImageSection}
                </>
            ) : (
                <>
                    {ImageSection}
                    {TextSection}
                </>
            )}
        </motion.div>
    );
};

export default Slide;

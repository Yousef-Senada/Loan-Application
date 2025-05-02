import React from "react";
import { motion } from "framer-motion";
import personalIcon from "../assets/Personal.svg";
import businessIcon from "../assets/Business.svg";
import autoIcon from "../assets/Auto.svg";
import Service from "./Service";

const services = [
    {
        img: personalIcon,
        title: "Personal loan",
        desc: "  Personal loans provide <br />borrowers with flexibility in how they use the funds.",
    },
    {
        img: businessIcon,
        title: "Business loan",
        desc: "  Business Loan Services provide<br /> financial assistance to businesses<br /> for various purposes.",
    },
    {
        img: autoIcon,
        title: "Auto loan",
        desc: " Auto Loan Services provide <br />financing options for individuals <br />or businesses to purchase a vehicle..",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="h-[613px] bg-gradient-to-br from-emerald-100 via-slate-300/50 to-zinc-200/0 px-[125px] flex flex-col justify-evenly items-center overflow-hidden"
        >
            <motion.p
                className="text-4xl text-primary font-bold font-Raleway leading-[55px] tracking-wide"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Our Services
            </motion.p>

            <motion.div
                className="flex justify-between gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Service img={s.img} title={s.title} desc={s.desc} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.button
                className="w-[200px] h-[48px] font-DMSans rounded-full flex justify-center items-center bg-second tracking-wide text-white hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
                View more
            </motion.button>
        </section>
    );
};

export default Services;

import React from "react";
import personalIcon from "../assets/Personal.svg";
import businessIcon from "../assets/Business.svg";
import autoIcon from "../assets/Auto.svg";
import Service from "./Service";

const service = [
    {
        img: personalIcon,
        title: "Personal loan",
        desc: "Personal loans provide<br /> borrowers with flexibility in how they use thefunds.",
    },
    {
        img: businessIcon,
        title: "Business loan",
        desc: "Business Loan Services provide<br/> financial assistance to businesses<br/> for various purposes..",
    },
    {
        img: autoIcon,
        title: "Auto loan",
        desc: "Auto Loan Services provide <br/>financing options for individuals<br/> businesses to purchase a vehicle.",
    },
];

const Services = () => {
    return (
        <section className="h-[613px] bg-gradient-to-br from-emerald-100 via-slate-300/50 to-zinc-200/0 px-[125px] flex flex-col justify-evenly items-center">
            <p className="text-4xl text-primary font-bold font-Raleway leading-[55px] tracking-wide">
                Our Services
            </p>
            <div className="flex justify-between gap-8">
                {service.map((s) => (
                    <Service img={s.img} title={s.title} desc={s.desc} />
                ))}
            </div>
            <button className="w-[200px] h-[48px] font-DMSans rounded-full flex justify-center items-center bg-second tracking-wide text-white">
                View more
            </button>
        </section>
    );
};

export default Services;

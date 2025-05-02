import React from "react";
import { motion } from "framer-motion"; // استيراد motion
import contactUsIcon from "../assets/ContactUs.svg";

const ContactUs = () => {
    return (
        <section
            id="contact"
            className="h-[784px] py-[90px] px-[225px] flex justify-between items-center bg-gradient-to-br from-emerald-100/70 via-slate-300/50 to-zinc-200/0"
        >
            <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: -100 }} // البداية من الشمال مع شفافية
                whileInView={{ opacity: 1, x: 0 }} // يظهر بالكامل عند الوصول للعرض
                transition={{ duration: 1 }} // مدة الأنميشن
            >
                <p className=" text-primary text-4xl font-bold font-Raleway leading-[55px] tracking-wide mb-3.5">
                    Contact us
                </p>
                <img
                    className="w-[350px] h-[370]"
                    src={contactUsIcon}
                    alt="contactUsIcon"
                />
                <p className="w-[455px]  text-zinc-700 text-xl font-normal font-DMSans tracking-tight mt-8">
                    QuickFunds- Your trusted financial partner for loans. Quick
                    approvals, competitive rates, and personalized solutions to
                    meet your unique needs. Empowering you to achieve your
                    financial goals. Apply online today!
                </p>
            </motion.div>

            <motion.div
                className="bg-white w-[489px] h-[438px] rounded-[21px] px-[47px] py-[45px] font-Raleway"
                initial={{ opacity: 0, x: 100 }} // البداية من اليمين مع شفافية
                whileInView={{ opacity: 1, x: 0 }} // يظهر بالكامل عند الوصول للعرض
                transition={{ duration: 1 }}
            >
                <form className="flex flex-col justify-between h-[350px]">
                    <div>
                        <label
                            htmlFor="name"
                            className="font-medium text-gray-700 ml-1"
                        >
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full px-4 mt-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-second/70"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="font-medium text-gray-700 ml-1"
                        >
                            Phone number
                        </label>
                        <input
                            id="phone"
                            type="text"
                            className="w-full px-4 mt-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-second/70"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="font-medium text-gray-700 ml-1"
                        >
                            Email address
                        </label>
                        <input
                            id="email"
                            type="text"
                            className="w-full px-4 mt-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-second/70"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-primary text-white w-[125px] h-[48px] rounded-full font-DMSans"
                        >
                            SEND
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default ContactUs;

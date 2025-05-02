import React from "react";
import { motion } from "framer-motion";
import contactUsIcon from "../assets/ContactUs.svg";

const ContactUs = () => {
    return (
        <section
            id="contact"
            className="h-auto py-[90px] px-[225px] flex justify-between items-center bg-gradient-to-br from-emerald-100/70 via-slate-300/50 to-zinc-200/0"
        >
            <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <p className="text-primary text-4xl font-bold font-Raleway leading-[55px] tracking-wide mb-4">
                    Contact us
                </p>
                <img
                    className="w-[350px] h-[370px]"
                    src={contactUsIcon}
                    alt="contactUsIcon"
                />
                <p className="w-[455px] text-zinc-700 text-xl font-normal font-DMSans tracking-tight mt-8">
                    QuickFunds - Your trusted partner for loan approval
                    detection. We provide quick and reliable solutions to
                    identify approved loans, offering competitive insights and
                    personalized guidance. Get in touch with us to detect loan
                    approvals today!
                </p>
            </motion.div>

            <motion.div
                className="bg-white w-[489px] rounded-[21px] px-[47px] py-[45px] font-Raleway shadow-lg"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <form className="flex flex-col space-y-5">
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
                            placeholder="Enter your name"
                            className="w-full px-4 mt-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition"
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
                            placeholder="Enter your phone number"
                            className="w-full px-4 mt-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition"
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
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 mt-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="font-medium text-gray-700 ml-1"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Write your message or problem here"
                            className="w-full px-4 mt-2 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                            rows={4}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-primary text-white w-[125px] h-[48px] rounded-full font-DMSans hover:bg-primary/90 transition"
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

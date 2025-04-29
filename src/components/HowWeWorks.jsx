import React from "react";
import applicationIcon from "../assets/Application.svg";
import approvalIcon from "../assets/Approval.svg";
import creditIcon from "../assets/Credit.svg";
import documentationIcon from "../assets/Documentation.svg";
import Slide from "./Slide";

const slides = [
    {
        img: applicationIcon,
        number: 1,
        title: "Application",
        desc: "The borrower submits a loan application to the bank, either in person, online, or through other channels. The application includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan.",
    },
    {
        img: documentationIcon,
        number: 2,
        title: "Documentation and Verification",
        desc: "The bank requests supporting documents from the borrower, such as identification proof, income statements, bank statements, and collateral details (if applicable). The bank verifies the information provided to assess the borrower's creditworthiness and eligibility for the loan.",
    },
    {
        img: creditIcon,
        number: 3,
        title: "Credit Assessment",
        desc: "The bank conducts a credit assessment to evaluate the borrower's creditworthiness and ability to repay the loan. This process involves analyzing the borrower's credit history, income stability, debt-to-income ratio, and other factors.",
    },
    {
        img: approvalIcon,
        number: 4,
        title: "Loan Approval",
        desc: "If the borrower meets the bank's lending criteria and passes the credit assessment, the loan is approved. The bank determines the loan amount, interest rate, repayment term, and any associated fees.",
    },
];

const HowWeWorks = () => {
    return (
        <section className="h-[1662px] px-[158px] flex flex-col justify-evenly">
            <div className="flex flex-col gap-3.5 justify-center items-center">
                <p className=" text-primary text-4xl font-bold font-Raleway tracking-wide">
                    How we works ?
                </p>
                <p className=" text-zinc-700 text-lg  font-DMSans tracking-wide">
                    This is a process, how you can get loan for your self.
                </p>
            </div>
            {slides.map((s) => (
                <Slide
                    img={s.img}
                    number={s.number}
                    title={s.title}
                    desc={s.desc}
                />
            ))}
        </section>
    );
};

export default HowWeWorks;

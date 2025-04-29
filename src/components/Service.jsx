import React from "react";

const Service = ({ img, title, desc }) => {
    return (
        <div className="h-[355px] flex flex-col items-center justify-between w-[400px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05)] border border-[#dbe6e4] rounded-[39px] py-7 px-[18px]">
            <img className="w-20 h-24" src={img} alt={`${img}`} />
            <div className=" text-teal-900 text-3xl font-medium font-Raleway leading-normal tracking-wide">
                {title}
            </div>
            <div
                className="text-center text-stone-500 text-lg font-normal font-Poppins tracking-wide"
                dangerouslySetInnerHTML={{ __html: desc }}
            ></div>
            <button className="w-[123px] h-10 rounded-full font-DMSans flex text-primary justify-center items-center border-2 border-second/50 tracking-wide">
                Apply now
            </button>
        </div>
    );
};

export default Service;

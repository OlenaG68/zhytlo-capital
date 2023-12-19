import React from "react";

const FirstBlock = () => {
    return (
        <div className="h-screen w-full bg-first-block bg-cover bg-no-repeat bg-center flex items-center">
            <div className="container pl-5 md:pl-0">
                {" "}
                <div className=" text-5xl text-center md:text-left md:text-[64px] max-w-[865px] font-bold  text-neutral-50">
                    Find Your <span className="text-sky-500">Dream Home</span>{" "}
                    with Crypto
                </div>
            </div>
        </div>
    );
};

export default FirstBlock;

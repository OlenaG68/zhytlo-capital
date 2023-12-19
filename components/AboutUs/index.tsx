import React from "react";
import Button from "../UI/Button";

const AboutUs = () => {
    const advantages = [
        {
            number: "500+",
            title: "Projects",
            desc: "Over 500 lexury villas for“Home Away From Home” experience",
        },
        {
            number: "40+",
            title: "Locations",
            desc: "luxury villas and private holiday homes, from all across",
        },
        {
            number: "24/7",
            title: "Help",
            desc: "24/7 Help service for all customers to guide and support",
        },
    ];
    return (
        <div className=" bg-about-us-block bg-cover bg-center bg-no-repeat  relative">
            <div className="w-full h-full bg-black bg-opacity-75 absolute"></div>
            <div className="container flex flex-col md:flex-row gap-20 items-center justify-between py-[137px]">
                <div className="flex flex-col gap-4 px-3 md:px-0 max-w-[666px] relative z-20 justify-center items-center md:items-start text-center md:text-left">
                    <div className="text-sky-500 text-[32px] font-semibold">
                        About us
                    </div>
                    <div className=" text-neutral-50 text-base font-normal mb-">
                        Homeverse.io is a gated community with a great location.
                        Located downtown, you’re within walking distance of
                        Parks, and the best shopping, dining and entertainment
                        Getting around is a breeze, with easy access to
                        freeways, buses and trolleys. . Laundry is available on
                        premises.
                    </div>
                    <Button title="Читати більше" className=" mt-9 md:mt-0" />
                </div>
                <div className="flex flex-col relative z-20 gap-12">
                    {advantages.map((item, index) => (
                        <div
                            className="flex flex-col justify-center items-center text-center"
                            key={index}
                        >
                            <div className="text-center text-sky-500 text-opacity-80 text-[32px] font-semibold ">
                                {item.number}
                            </div>
                            <div className="text-center text-neutral-50 text-opacity-60 text-base font-semibold">
                                {item.title}
                            </div>
                            <div className="w-[276px] text-center text-neutral-50 text-opacity-50 text-base font-normal">
                                {item.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

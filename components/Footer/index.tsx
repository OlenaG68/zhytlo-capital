import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="container flex flex-wrap flex-col gap-20 md:gap-0 md:flex-row justify-between py-16">
                <div className="max-w-[313px]">
                    <div>Logo</div>
                    <div className="mt-4 text-neutral-50 text-base font-normal">
                        Homeverse.io is a gated community with a great location.
                        Located downtown, you’re within walking distance of
                        Parks.
                    </div>
                </div>
                <div>
                    <div className="text-white text-2xl font-semibold">
                        Contact Us
                    </div>
                    <div className="mt-4 text-white text-opacity-80 text-base font-normal ">
                        Deam home villas San Diego, CA, USA
                    </div>
                    <div className="mt-4 text-white text-opacity-80 text-base font-normal ">
                        icon 025-777-3067
                    </div>
                    <div className="mt-4 text-white text-opacity-80 text-base font-normal ">
                        icon admin@thehomeverse.io
                    </div>
                </div>
                <div>
                    <div className="text-white text-2xl font-semibold">
                        Follow Us
                    </div>
                    <div className="flex text-white gap-14 mt-4">
                        <div>Inst</div>
                        <div>FB</div>
                        <div>T</div>
                    </div>
                </div>
            </div>
            <div className=" text-center pt-8 pb-16 border-t text-white border-neutral-50 border-opacity-30">
                © 2022 WebDes | All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;

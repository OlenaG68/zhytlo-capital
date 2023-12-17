import React from "react";

const Header = () => {
    return (
        <nav>
            <div className="w-full fixed top-0 h-[82px] px-[135px] py-4 justify-between items-center inline-flex z-50">
                <div className="h-14 flex-col justify-start items-center inline-flex">
                    <div className="w-[39.07px] h-[39.07px] relative"></div>
                    <div className="text-white text-sm font-normal  leading-tight">
                        Homeverse.io
                    </div>
                </div>
                <div className="h-[42px] gap-[49px] justify-between items-center flex">
                    <div className="text-neutral-50 text-sm font-semibold  leading-tight">
                        Home
                    </div>
                    <div className="text-neutral-50 text-sm font-semibold  leading-tight">
                        About Us
                    </div>
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-neutral-50 text-sm font-semibold  leading-tight">
                            Other Projects
                        </div>
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="w-[94px] px-6 py-3 bg-sky-500 rounded-lg shadow justify-center items-center gap-2.5 flex">
                        <div className="text-white text-sm font-semibold  leading-tight">
                            Зв&apos;язатися
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

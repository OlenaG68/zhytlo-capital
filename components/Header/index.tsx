"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import MobMenu from "../Icons/MobMenu";
import Close from "../Icons/Close";
import { scrollElementToView } from "@/helpers/scrollElementToView";
import useClickOutside from "@/helpers/useClickOutside";

const Header = () => {
    const [activeLink, setActiveLink] = useState(1);
    const [openMobMenu, setOpenMobMenu] = useState(false);
    const [navBg, setNavBg] = useState(false);
    const mobMenuRef = useRef<HTMLDivElement>(null);
    const changeNavBg = () => {
        window.scrollY >= 500 ? setNavBg(true) : setNavBg(false);
    };
    const navLink = [
        { title: "Головна", id: 1, slug: "home" },
        { title: "Квартири", id: 2, slug: "gallery" },
        { title: "Про нас", id: 3, slug: "about-us" },
        { title: "Контакти", id: 4, slug: "contact" },
    ];
    const chooseLink = (id: number, slug: string) => {
        setActiveLink(id);
        scrollElementToView(slug);
        setOpenMobMenu(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", changeNavBg);
        return () => {
            window.removeEventListener("scroll", changeNavBg);
        };
    }, []);
    useClickOutside(mobMenuRef, () => setOpenMobMenu(false));
    return (
        <nav
            className={` w-full  fixed top-0 px-5 z-50 transition ease-in-out ${
                navBg ? "bg-black  duration-500 " : ""
            }`}
        >
            <div className=" w-full py-4 justify-between items-center inline-flex ">
                <div className=" text-white">Логотип</div>
                <div className="h-[42px] gap-[49px] justify-between items-center  hidden md:flex">
                    {navLink.map((link) => (
                        <div key={link.id} className="relative">
                            <div
                                className="text-neutral-50 text-sm font-semibold  leading-tight cursor-pointer"
                                onClick={() => chooseLink(link.id, link.slug)}
                            >
                                {link.title}
                            </div>
                            {link.id === activeLink && (
                                <div className="w-2 h-2 rounded-full top-5 left-1/2 -translate-x-1/2 absolute bg-[#1DAEFF]" />
                            )}
                        </div>
                    ))}

                    <Button title="Зв`язатися" />
                </div>
                <div ref={mobMenuRef} className="block md:hidden">
                    <MobMenu onClick={() => setOpenMobMenu(true)} />
                    {openMobMenu && (
                        <div className="bg-black w-full h-fit flex items-center gap-8 py-8 flex-col absolute top-0 left-0">
                            <div className="absolute top-4 right-4">
                                <Close onClick={() => setOpenMobMenu(false)} />
                            </div>

                            {navLink.map((link) => (
                                <div key={link.id} className="relative">
                                    <div
                                        className="text-neutral-50 text-sm font-semibold  leading-tight cursor-pointer"
                                        onClick={() =>
                                            chooseLink(link.id, link.slug)
                                        }
                                    >
                                        {link.title}
                                    </div>
                                    {link.id === activeLink && (
                                        <div className="w-2 h-2 rounded-full top-5 left-1/2 -translate-x-1/2 absolute bg-[#1DAEFF]" />
                                    )}
                                </div>
                            ))}
                            <Button title="Зв`язатися" />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;

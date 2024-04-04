"use client";
import React from "react";

import { Fade } from "react-awesome-reveal";
import Car from "../Icons/Car";
import Walk from "../Icons/Walk";

interface IPlace {
    title: string;
    desc: { number: number; icon: React.ReactNode }[] | string;
}

const AboutUs = () => {
    const advantages = [
        {
            number: "7",
            title: "Секцій",
            desc: "Over 500 lexury villas for“Home Away From Home” experience",
        },
        {
            number: "4",
            title: "Поверховість",
            desc: "luxury villas and private holiday homes, from all across",
        },
        {
            number: "118",
            title: "Квартир",
            desc: "24/7 Help service for all customers to guide and support",
        },
        {
            number: "92",
            title: "Паркомісць",
            desc: "24/7 Help service for all customers to guide and support",
        },
    ];
    const places: IPlace[] = [
        {
            title: "Парк Замарстинівський ",
            desc: "Безпосередньо біля будинку",
        },
        {
            title: "ТЦ Спартак",
            desc: [
                { number: 12, icon: <Walk /> },
                { number: 5, icon: <Car /> },
            ],
        },
        {
            title: "Школа №81, 97",
            desc: [
                { number: 12, icon: <Walk /> },
                { number: 5, icon: <Car /> },
            ],
        },
        {
            title: "Лікарні Святого Пантелеймона та Миколая",
            desc: [
                { number: 7, icon: <Walk /> },
                { number: 2, icon: <Car /> },
            ],
        },

        {
            title: "Гіпермаркет “Епіцентр”",
            desc: [{ number: 13, icon: <Car /> }],
        },
    ];
    return (
        <section
            id="about-us"
            className=" bg-about-us-block bg-cover bg-center bg-no-repeat  relative"
        >
            <div className="w-full h-full bg-black bg-opacity-75 absolute"></div>
            <div className="container flex flex-col lg:flex-row gap-20 items-center justify-between pt-[137px]">
                <div className="flex flex-col gap-4 px-3 md:px-0 max-w-[666px] relative z-20 justify-center items-center md:items-start text-center md:text-left">
                    <Fade direction="left">
                        <h1 className="text-sky-500 text-[32px] font-semibold">
                            Про нас
                        </h1>
                    </Fade>
                    <Fade direction="left" delay={300}>
                        <div className=" text-neutral-50 text-base font-normal mb-">
                            SUMMERSTONE VILLAGE – це новий проєкт
                            малоповерхового житла комфорт-класу, натхненний
                            природою та сучасним ритмом життя. Знаходиться на
                            вул. Орлика у Львові. Розташування дає змогу бути
                            собою і обирати те, що любиш. Вийти з під&apos;їзду
                            і опинитись посеред зеленого оазису лісопарку
                            Замарстинівський, або пройтись до спортзалу чи на
                            шопінг. Сісти за кермо та за 15 хвилин пити каву на
                            Площі Ринок. Інфраструктура дозволяє якісно та
                            ефективно планувати свій час, адже поруч - дитячі
                            садки, школи, медичні установи, торгові центри.
                        </div>
                    </Fade>
                    {/* <Fade direction="left" delay={600}>
                        <Button
                            title="Читати більше"
                            className=" mt-9 md:mt-0"
                        />
                    </Fade> */}
                </div>
                <div className="flex flex-col relative z-20 gap-32">
                    <div className="grid grid-cols-2 gap-16">
                        {advantages.map((item, index) => (
                            <Fade direction="up" key={index}>
                                <div className="flex flex-col justify-center items-center text-center">
                                    <div className="text-center text-sky-400 text-opacity-80 text-[48px] font-semibold ">
                                        {item.number}
                                    </div>
                                    <h3 className="text-center text-neutral-50  text-lg font-semibold">
                                        {item.title}
                                    </h3>
                                    {/* <div className="w-[276px] text-center text-neutral-50 text-opacity-50 text-base font-normal">
                                    {item.desc}
                                </div> */}
                                </div>
                            </Fade>
                        ))}
                    </div>{" "}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-2 container mt-24 pb-[137px] px-3">
                {places.map((place, index) => (
                    <Fade direction="up" key={index}>
                        <div className="flex flex-col">
                            <h3 className=" text-sky-400 text-opacity-80 text-[16px] font-semibold ">
                                {place.title}
                            </h3>
                            <div className="text-neutral-50  text-xs mt-4 ">
                                {Array.isArray(place.desc) ? (
                                    <div className="flex gap-6">
                                        {place.desc.map((item) => (
                                            <div
                                                className="flex gap-4 items-center"
                                                key={item.number}
                                            >
                                                {" "}
                                                <div>{item.icon}</div>
                                                <div>{item.number}хв</div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    place.desc
                                )}
                            </div>
                            {/* <div className="w-[276px] text-center text-neutral-50 text-opacity-50 text-base font-normal">
                                    {item.desc}
                                </div> */}
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;

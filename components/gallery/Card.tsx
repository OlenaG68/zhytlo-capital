"use client";
import Image from "next/image";
import React from "react";
import BathRoom from "../Icons/BathRoom";
import BedRoom from "../Icons/BedRoom";
import { Fade } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWindowSize from "@/helpers/useWindowSize";

interface ICard {
    card: {
        price: string;
        images: string[] | null;
        id: number;
        room: { title: string; slug: string; icon: string };
        bathRoom: { title: string; slug: string; icon: string };
        sq: { number: number; icon: string };
    };
}

const Card = ({ card }: ICard) => {
    const windowSize = useWindowSize();
    const settings = {
        className: "slick-track",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        centerMode: true, // Add this line
        centerPadding: "0px",
        arrows: windowSize.width! > 1023 ? true : false,
    };
    return (
        <Fade duration={700} cascade damping={0.1}>
            <div className="gallery-card max-w-[577px] pb-3  bg-neutral-900  rounded-lg ">
                <div className="relative z-10 h-fit">
                    <Slider {...settings}>
                        {card.images?.map((image, index) => (
                            <div
                                key={index}
                                className=" px-7 py-4 md:px-0 md:py-0"
                            >
                                <Image
                                    src={image}
                                    width={557}
                                    height={200}
                                    alt="image"
                                    className=" rounded-lg overflow-hidden"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Slider>

                    <div className="hidden lg:block w-[60px] h-full left-0 top-0 absolute bg-black bg-opacity-30 rounded-tr-lg rounded-br-lg" />

                    <div className="hidden lg:block w-[60px] h-full right-0 top-0 absolute bg-black bg-opacity-30 rounded-tl-lg rounded-bl-lg" />
                </div>

                <div className="flex justify-between px-[15px] mt-4 items-center">
                    <div className="text-neutral-50 text-2xl font-semibold ">
                        {card.price}
                    </div>
                    <div className=" cursor-pointer text-white hover:from-orange-400 hover:to-purple-600 hover:scale-110 transition ease-in-out px-6 py-3 bg-gradient-to-r from-orange-300 to-purple-500 rounded-lg shadow justify-center items-center gap-2.5 inline-flex">
                        View Details
                    </div>
                </div>
                <div className="mx-[15px] grid grid-cols-3 text-white divide-x rounded-lg border border-neutral-50 border-opacity-30 my-4">
                    <div className="flex justify-center items-center gap-2 py-3">
                        <div>
                            <BedRoom />
                        </div>
                        <div>{card.room.title}</div>
                    </div>
                    <div className=" flex justify-center items-center gap-2 py-3">
                        <div>
                            <BathRoom />
                        </div>
                        <div>{card.bathRoom.title}</div>
                    </div>
                    <div className="flex justify-center items-center gap-2 py-3">
                        <div>{card.sq.number} м2</div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Card;

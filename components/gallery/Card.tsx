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
import { IPopupProps } from "@/store/popup/popup.props";
import { ConnectedProps, connect } from "react-redux";
interface ICard extends PropsFromRedux {
    card: {
        price: string;
        images: string[] | null;
        id: number;
        room: { title: string; slug: string; icon: string };
        bathRoom: { title: string; slug: string; icon: string };
        sq: { number: number; icon: string };
    };
}

const Card = ({ card, openPopup, setApartId }: ICard) => {
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
        // arrows: windowSize.width! > 1023 ? true : false,
    };

    const openDetailsPopup = (id: number) => {
        setApartId(id);
        openPopup("details");
    };
    return (
        <Fade duration={700} cascade damping={0.1}>
            <div className="gallery-card max-w-[577px] pb-3  bg-neutral-900  rounded-lg ">
                <div className="relative z-10 h-fit">
                    <Slider {...settings}>
                        {card.images?.map((image, index) => (
                            <div
                                key={index}
                                className=" px-7 py-4  lg:px-10 lg:py-8 "
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

                    <div className="hidden lg:block w-[60px] h-[98%] left-0 top-0 absolute bg-black bg-opacity-30 rounded-tr-lg rounded-br-lg" />

                    <div className="hidden lg:block w-[60px] h-[98%] right-0 top-0 absolute bg-black bg-opacity-30 rounded-tl-lg rounded-bl-lg" />
                </div>

                <div className="flex justify-between px-[15px] mt-4 items-center">
                    <div className="text-neutral-50 text-2xl font-semibold ">
                        {card.price}
                    </div>
                    <div
                        onClick={() => openDetailsPopup(card.id)}
                        className=" cursor-pointer font-semibold text-white hover:from-orange-400 hover:to-purple-600 hover:scale-110 transition ease-in-out px-6 py-3 bg-gradient-to-r from-orange-300 to-purple-500 rounded-lg shadow justify-center items-center gap-2.5 inline-flex"
                    >
                        Деталі
                    </div>
                </div>
                <div className="mx-[15px] grid grid-cols-3 text-white divide-x rounded-lg border border-neutral-50 border-opacity-30 my-4">
                    <div className="flex justify-center items-center gap-2 py-3 px-1">
                        <div>
                            <BedRoom />
                        </div>
                        <div className="text-xs  md:text-base">
                            {card.room.title}
                        </div>
                    </div>
                    <div className=" flex justify-center items-center gap-2 py-3 px-1">
                        <div>
                            <BathRoom />
                        </div>
                        <div className="text-xs  md:text-base">
                            {card.bathRoom.title}
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 py-3 px-1">
                        <div className="text-xs  md:text-base">
                            {card.sq.number} м&sup2;
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

const mapState = ({ popup }: { popup: IPopupProps }) => {
    const { currentPopup, apartId } = popup;
    return { currentPopup, apartId };
};

const mapDispatch = {
    openPopup: (currentPopup: string) => ({
        type: "OPEN_POPUP",
        currentPopup,
    }),
    setApartId: (apartId: number) => ({
        type: "SET_APART_ID",
        apartId,
    }),
};

const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Card);

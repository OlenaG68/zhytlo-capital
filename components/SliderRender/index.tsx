"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import Slider from "react-slick";
import Image from "next/image";
import useWindowSize from "@/helpers/useWindowSize";

const SliderRender = () => {
    const windowSize = useWindowSize();

    const settings = {
        className: "slick-center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        variableWidth: windowSize.width! > 927 ? true : false,
        arrows: windowSize.width! > 1023 ? true : false,
    };
    return (
        <div className="w-[90%] m-auto  lg:pt-16 pb-28">
            <Slider {...settings}>
                {[1, 2, 4, 5].map((slideIndex) => (
                    <div key={slideIndex} className="py-24 px-4 lg:px-8">
                        <Image
                            src={`/images/renders/${slideIndex}.jpg`}
                            width={750}
                            height={200}
                            alt={`kids-${slideIndex}`}
                            loading="lazy"
                            className="border-[2px] lg:border-[4px] border-white rounded-xl"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderRender;

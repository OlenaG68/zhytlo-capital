"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

const VideoBlock = () => {
    const videoURL = `https://www.youtube.com/embed/1U5uUNcscrQ`;
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const defaultHeight = 495;
    const [videoHeight, setVideoHeight] = useState<number>(
        iframeRef.current
            ? iframeRef.current.offsetWidth * 0.5625
            : defaultHeight
    );

    const handleChangeVideoWidth = useCallback(() => {
        const ratio =
            window.innerWidth > 990
                ? 1.0
                : window.innerWidth > 522
                ? 1.2
                : window.innerWidth > 400
                ? 1.45
                : 1.85;
        const height = iframeRef.current
            ? iframeRef.current.offsetWidth * 0.5625
            : defaultHeight;
        return setVideoHeight(Math.floor(height * ratio));
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleChangeVideoWidth);
        const ratio =
            window.innerWidth > 990
                ? 1.0
                : window.innerWidth > 522
                ? 1.2
                : window.innerWidth > 400
                ? 1.45
                : 1.85;
        const height = iframeRef.current
            ? iframeRef.current.offsetWidth * 0.5625
            : defaultHeight;
        setVideoHeight(Math.floor(height * ratio));
        return function cleanup() {
            window.removeEventListener("resize", handleChangeVideoWidth);
        };
    }, [videoHeight, handleChangeVideoWidth]);
    return (
        <div className="container px-3 py-24 flex flex-col xl:flex-row gap-12 items-center justify-center relative">
            <div className="max-h-[320px] w-full h-full max-w-[640px]">
                <iframe
                    ref={iframeRef}
                    width="100%"
                    height={`${videoHeight}px`}
                    src={videoURL}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div>
                <div className="flex flex-col  justify-center pt-8 lg:pt-20 gap-4 items-center ">
                    <div className="text-white font-semibold text-xl text-center">
                        Повний ескіз планування будинків, поверхів та квартир
                    </div>

                    <Link
                        href="/plan.pdf"
                        download
                        className=" hover:bg-sky-600 cursor-pointer px-6 py-3 bg-sky-500 w-fit rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-sm font-semibold  leading-tight"
                        target="_blank"
                    >
                        Скачати файл
                    </Link>
                </div>
                <div className="flex flex-col  justify-center pt-8 lg:pt-20 gap-4 items-center ">
                    <div className="text-white font-semibold text-xl text-center">
                        Схема генплану житлового комплексу
                    </div>

                    <Link
                        href="/plan.pdf"
                        download
                        className=" hover:bg-sky-600 cursor-pointer px-6 py-3 bg-sky-500 w-fit rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-sm font-semibold  leading-tight"
                        target="_blank"
                    >
                        Скачати файл
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VideoBlock;

"use client";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";

const FirstBlock = () => {
    const [showTextOne, setShowTextOne] = useState(0);

    return (
        <section
            id="home"
            className="h-screen w-full bg-first-block bg-cover bg-no-repeat bg-center flex   pt-32  md:pt-0"
        >
            <div className="container px-3 md:pl-0">
                <h1 className=" text-3xl text-center m-auto mt-36 md:mt-40  md:text-[45px]  lg:text-[64px] max-w-[859px] font-bold leading-snug  text-neutral-50">
                    <TypeAnimation
                        sequence={[
                            "Знайди житло своєї мрії у",
                            300,
                            () => {
                                setShowTextOne(1);
                            },
                        ]}
                        wrapper="span"
                        cursor={false}
                        className=""
                    />
                    {showTextOne === 1 && (
                        <TypeAnimation
                            sequence={[
                                " SUMMERSTONE VILLAGE", // Types 'One'
                                300, // Waits 1s
                            ]}
                            wrapper="span"
                            cursor={false}
                            className="text-sky-500 ml-3 mr-3"
                        />
                    )}
                    {/* {showTextTwo === 2 && (
                        <TypeAnimation
                            sequence={[
                                " SUMMERSTONE VILLAGE", // Types 'One'
                                300, // Waits 1s
                            ]}
                            wrapper="span"
                            cursor={false}
                            className="text-sky-500 ml-3 mr-3"
                        />
                    )} */}
                    {/* Find Your <span className="text-sky-500">Dream Home</span>{" "}
                    with Crypto */}
                </h1>
            </div>
        </section>
    );
};

export default FirstBlock;

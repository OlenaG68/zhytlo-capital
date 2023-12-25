"use client";
import React from "react";
import Form from "./Form";
import { Fade } from "react-awesome-reveal";
const ContactForm = () => {
    return (
        <div
            id="contact"
            className="container px-3 flex flex-col lg:flex-row justify-between py-[80px] md:py-[150px] gap-20 lg:gap-7"
        >
            <Fade direction="down">
                <div className="max-w-[610px]">
                    <div className="text-neutral-50 text-[48px] lg:text-[64px] font-bold">
                        Did You Find Your
                        <span className="text-sky-500 ml-3">Dream Home?</span>
                    </div>
                    <div className="text-neutral-50 text-opacity-60 text-2xl lg:text-[32px] font-normal leading-9">
                        Thank you for getting in touch! if you find your dream
                        home connect with us
                    </div>
                </div>
            </Fade>

            <Form />
        </div>
    );
};

export default ContactForm;

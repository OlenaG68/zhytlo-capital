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
                <div className="max-w-[700px]">
                    <div className="text-neutral-50 text-[48px] lg:text-[55px] font-bold">
                        Знайшли житло своєї мрії в
                        <span className="text-sky-500 ml-3">
                            SUMMERSTONE VILLAGE?
                        </span>
                    </div>
                    <div className="text-neutral-50 text-opacity-60 text-2xl lg:text-[20px] font-normal leading-9">
                        Напишіть нам і наш менеджер зконтактує з вами найближчим
                        часом для відповіді на будь-які ваші запитання!
                    </div>
                </div>
            </Fade>

            <Form />
        </div>
    );
};

export default ContactForm;

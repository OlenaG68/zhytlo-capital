"use client";
import React from "react";
import Form from "./Form";
import { Fade } from "react-awesome-reveal";
const ContactForm = () => {
    return (
        <section
            id="contact"
            className="container px-3 flex flex-col lg:flex-row justify-between py-[80px] md:pb-[100px] md:pt-[160px] gap-20 lg:gap-7"
        >
            <Fade direction="down">
                <div className="max-w-[700px]">
                    <h1 className="text-neutral-50 text-[35px] lg:text-[55px] font-bold">
                        Знайшли житло своєї мрії в
                        <span className="text-sky-500 ml-3">
                            SUMMERSTONE VILLAGE?
                        </span>
                    </h1>
                    <div className="text-neutral-50 text-opacity-60 text-xl lg:text-[20px] font-normal leading-9">
                        Напишіть нам і наш менеджер зконтактує з вами найближчим
                        часом для відповіді на будь-які ваші запитання!
                    </div>
                </div>
            </Fade>

            <Form />
        </section>
    );
};

export default ContactForm;

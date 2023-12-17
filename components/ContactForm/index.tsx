import React from "react";
import Form from "./Form";

const ContactForm = () => {
    return (
        <div className="container flex justify-between py-[223px]">
            <div className="max-w-[610px]">
                <div className="text-neutral-50 text-[64px] font-bold">
                    Did You Find Your
                    <span className="text-sky-500 ml-3">Dream Home?</span>
                </div>
                <div className="text-neutral-50 text-opacity-60 text-[32px] font-normal leading-9">
                    Thank you for getting in touch! if you find your dream home
                    connect with us
                </div>
            </div>
            <div>
                <Form />
            </div>
        </div>
    );
};

export default ContactForm;

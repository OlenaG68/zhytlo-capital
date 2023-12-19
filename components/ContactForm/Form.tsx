import React from "react";

const Form = () => {
    return (
        <form className="flex flex-col gap-16">
            <div className="flex flex-col md:flex-row gap-16 md:gap-4 w-full">
                <input
                    type="text"
                    className="bg-transparent border-b w-full border-white outline-none"
                    placeholder="First name"
                />
                <input
                    type="text"
                    className="bg-transparent border-b w-full border-white outline-none"
                    placeholder="Last name"
                />
            </div>
            <input
                type="text"
                className="bg-transparent border-b border-white outline-none"
                placeholder="Number"
            />
            <input
                type="text"
                className="bg-transparent border-b border-white outline-none"
                placeholder="E-mail"
            />
            <input
                type="text"
                className="bg-transparent border-b border-white outline-none"
                placeholder="Message"
            />
        </form>
    );
};

export default Form;

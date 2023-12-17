import React from "react";

const Form = () => {
    return (
        <form className="flex flex-col gap-16">
            <div className="flex gap-4">
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
                    placeholder="First name"
                />
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
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
                placeholder="Mail"
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

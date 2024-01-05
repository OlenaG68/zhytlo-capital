import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../UI/Button";
const Form = () => {
    return (
        <Fade direction="down">
            <form className="flex flex-col gap-16 text-white ">
                <div className="flex text-white flex-col md:flex-row gap-16 md:gap-4 w-full">
                    <input
                        type="text"
                        className="bg-transparent border-b w-full border-white outline-none"
                        placeholder="Ім'я"
                    />
                    <input
                        type="text"
                        className="bg-transparent border-b w-full border-white outline-none"
                        placeholder="Прізвище"
                    />
                </div>
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
                    placeholder="Номер телефону"
                />
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
                    placeholder="E-mail"
                />
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
                    placeholder="Повідомлення"
                />
                <Button title="Надіслати" />
            </form>
        </Fade>
    );
};

export default Form;

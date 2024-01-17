"use client";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../UI/Button";
const Form = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleFormData = async (e: React.FormEvent<HTMLFormElement>) => {
        const data = {
            name: `${name} ${lastName}`,
            mail,
            phone,
            message,
        };
        e.preventDefault();

        const response = await fetch("/api/sendMail", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
        setName("");
        setLastName("");
        setMail("");
        setPhone("");
        setMessage("");
        setSuccess(true);
    };
    return (
        <Fade direction="down">
            <form
                className="flex flex-col gap-16 text-white "
                onSubmit={handleFormData}
            >
                <div className="flex text-white flex-col md:flex-row gap-16 md:gap-4 w-full">
                    <input
                        type="text"
                        className="bg-transparent border-b w-full border-white outline-none"
                        placeholder="Ім'я"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="bg-transparent border-b w-full border-white outline-none"
                        placeholder="Прізвище"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
                    placeholder="Номер телефону"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
                    placeholder="E-mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                <div className="w-full">
                    <input
                        type="text"
                        className="bg-transparent w-full border-b border-white outline-none"
                        placeholder="Повідомлення"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="text-neutral-50  text-xs mt-3">
                        {success && "Дякуємо, ваш запит надіслано"}
                    </div>
                </div>

                <Button title="Надіслати" type="submit" />
            </form>
        </Fade>
    );
};

export default Form;

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
    const [errorMessage, setErrorMessage] = useState("");

    function isValidEmail(email: string): boolean {
        return /\S+@\S+\.\S+/.test(email);
    }

    const phoneInputMask = (value: string) => {
        const input = value.replace(/\D/g, ""); // Видаляємо всі нецифрові символи
        let formattedInput = "";

        // Додаємо символи маски до введення
        if (input.length > 0) {
            formattedInput = "+38 ";
        }
        if (input.length > 2) {
            formattedInput += `(${input.substring(2, 5)}`;
        }
        if (input.length >= 5) {
            formattedInput += `) ${input.substring(5, 8)}`;
        }
        if (input.length >= 8) {
            formattedInput += `-${input.substring(8, 10)}`;
        }
        if (input.length >= 10) {
            formattedInput += `-${input.substring(10, 12)}`;
        }

        return formattedInput;
    };
    const handleFormData = async (e: React.FormEvent<HTMLFormElement>) => {
        const data = {
            name: `${name} ${lastName}`,
            mail,
            phone,
            message,
        };
        e.preventDefault();
        if (isValidEmail(mail)) {
            await fetch("/api/sendMail", {
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
            setErrorMessage("");
            setTimeout(() => setSuccess(false), 3000);
        } else {
            setErrorMessage("Введіть правильний формат електронної пошти");
            setSuccess(false);
        }
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
                        required
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
                    required
                    onChange={(e) => setPhone(phoneInputMask(e.target.value))}
                />
                <div className="w-full">
                    {" "}
                    <input
                        type="text"
                        className="bg-transparent w-full border-b border-white outline-none"
                        placeholder="E-mail"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                    <div className=" text-red-600  text-xs mt-2">
                        {errorMessage}
                    </div>
                </div>

                <div className="w-full">
                    <input
                        type="text"
                        className="bg-transparent w-full border-b border-white outline-none"
                        placeholder="Повідомлення"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
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

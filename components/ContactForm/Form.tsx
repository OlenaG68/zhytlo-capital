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
    const [success, setSuccess] = useState("");
    // const handleFormData = (e: React.FormEvent<HTMLFormElement>) => {
    //     console.log("1111");
    //     e.preventDefault();
    //     const data = {
    //         name: `${name} ${lastName}`,
    //         mail,
    //         phone,
    //         message,
    //     };
    //     // e.target.reset();

    //     try {
    //         sendContactForm(data);
    //         // setState(initState);
    //         // setSuccess(true);
    //         console.log("sdsdds");
    //     } catch (error) {
    //         // setState((prev) => ({
    //         //     ...prev,
    //         //     isLoading: false,
    //         //     error: error.message,
    //         // }));
    //     }
    //     console.log(data);
    // };
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
        console.log(await response.json());
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
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="bg-transparent border-b w-full border-white outline-none"
                        placeholder="Прізвище"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
                    placeholder="Номер телефону"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
                    placeholder="E-mail"
                    onChange={(e) => setMail(e.target.value)}
                />
                <input
                    type="text"
                    className="bg-transparent border-b border-white outline-none"
                    placeholder="Повідомлення"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button title="Надіслати" type="submit" />
            </form>
        </Fade>
    );
};

export default Form;

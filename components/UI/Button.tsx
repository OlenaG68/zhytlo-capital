import React from "react";
interface IButton {
    title: string;
}

const Button = ({ title }: IButton) => {
    return (
        <button className=" cursor-pointer px-6 py-3 bg-sky-500 w-fit rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-sm font-semibold  leading-tight">
            {title}
        </button>
    );
};

export default Button;

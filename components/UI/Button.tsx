import React from "react";
interface IButton {
    title: string;
    className?: string;
}

const Button = ({ title, className }: IButton) => {
    return (
        <button
            className={` ${className} hover:bg-sky-600 cursor-pointer px-6 py-3 bg-sky-500 w-fit rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-sm font-semibold  leading-tight`}
        >
            {title}
        </button>
    );
};

export default Button;

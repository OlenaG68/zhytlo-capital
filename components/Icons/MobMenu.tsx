import React from "react";

interface IIcon {
    onClick?: () => void;
}

const MobMenu = ({ onClick }: IIcon) => {
    return (
        <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M0.5 0.5H17.5V1.5H0.5V0.5ZM6.5 7.5H17.5V8.5H6.5V7.5ZM0.5 14.5H17.5V15.5H0.5V14.5Z"
                fill="#030303"
                stroke="white"
            />
        </svg>
    );
};

export default MobMenu;

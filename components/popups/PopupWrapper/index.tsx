"use client";
import Close from "@/components/Icons/Close";
import useClickOutside from "@/helpers/useClickOutside";
import { IPopupProps } from "@/store/popup/popup.props";
import React, { useEffect, useRef } from "react";
import { ConnectedProps, connect } from "react-redux";

interface IPopup extends PropsFromRedux {
    children: React.ReactNode;
}

const PopupWrapper = ({ children, closePopup, currentPopup }: IPopup) => {
    const popupRef = useRef(null);
    useClickOutside(popupRef, () => closePopup(""));
    return (
        <div className="fixed w-full h-full px-3 bg-black bg-opacity-50 flex items-center justify-center left-0 top-0 z-50">
            <div
                ref={popupRef}
                className=" relative rounded-xl p-5 bg-black max-w-[550px] w-full border-2 border-white"
            >
                <div className="absolute top-5 right-5 cursor-pointer">
                    <Close onClick={() => closePopup("")} />
                </div>
                {children}
            </div>
        </div>
    );
};

const mapState = ({ popup }: { popup: IPopupProps }) => {
    const { currentPopup } = popup;
    return { currentPopup };
};

const mapDispatch = {
    closePopup: (currentPopup: string) => ({
        type: "OPEN_POPUP",
        currentPopup,
    }),
};

const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(PopupWrapper);

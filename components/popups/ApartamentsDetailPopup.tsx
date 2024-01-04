"use client";
import React, { useEffect } from "react";
import PopupWrapper from "./PopupWrapper";
import { IPopupProps } from "@/store/popup/popup.props";
import { ConnectedProps, connect } from "react-redux";

const ApartamentsDetailPopup = ({ currentPopup }: PropsFromRedux) => {
    useEffect(() => {
        currentPopup
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [currentPopup]);
    if (currentPopup === "") {
        return null;
    }
    console.log(currentPopup);
    return (
        <>
            {currentPopup === "details" && (
                <PopupWrapper>
                    <div className="text-white text-2xl font-semibold">
                        Детальна інформація
                    </div>
                    <div className="text-white mt-6 text-lg">
                        Короткий опис квартири на декілька речень.Lorem ipsum is
                        placeholder text commonly used in the graphic, print,
                        and publishing industries for previewing layouts and
                        visual mockups.
                    </div>
                    <ul className="text-white mt-6 list-disc pl-4">
                        <li>Площа вітальні: 111</li>
                        <li>Площа кухні: 111</li>
                        <li>Площа спальні: 111</li>
                        <li>Площа ванної кімнати: 111</li>
                        <li>Загальна площа квартири: 111</li>
                    </ul>
                </PopupWrapper>
            )}
        </>
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
export default connector(ApartamentsDetailPopup);

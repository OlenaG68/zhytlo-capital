"use client";
import React, { useEffect, useState } from "react";
import PopupWrapper from "./PopupWrapper";
import { IPopupProps } from "@/store/popup/popup.props";
import { ConnectedProps, connect } from "react-redux";
import apartsData from "@/data/apartmentsData.json";
interface IData {
    id: number;
    description: string;
    rooms: number;
    square_of_rooms: { title: string; numbers: string }[];
}
const ApartamentsDetailPopup = ({ currentPopup, apartId }: PropsFromRedux) => {
    const [data, setData] = useState<IData>();
    useEffect(() => {
        currentPopup
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [currentPopup]);
    console.log(apartsData);
    useEffect(() => {
        const oneApartData = apartsData.find((data) => data.id === apartId);
        if (oneApartData) {
            setData(oneApartData);
        }
    }, [apartId]);

    if (currentPopup === "") {
        return null;
    }
    return (
        <>
            {currentPopup === "details" && (
                <PopupWrapper>
                    <div className="text-white text-2xl font-semibold">
                        Детальна інформація
                    </div>
                    <div className="text-white mt-6 text-lg">
                        {data?.description}
                    </div>
                    <ul className="text-white mt-6 list-disc pl-4">
                        {data?.square_of_rooms.map((room, index) => (
                            <li key={index}>
                                {`${room.title}: ${room.numbers}`}м&sup2;
                            </li>
                        ))}
                    </ul>
                </PopupWrapper>
            )}
        </>
    );
};

const mapState = ({ popup }: { popup: IPopupProps }) => {
    const { currentPopup, apartId } = popup;
    return { currentPopup, apartId };
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

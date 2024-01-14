import { AnyAction } from "redux";

import initStore from "./initStore";
import { IPopupProps } from "./popup.props";

const popupReducer = (state: IPopupProps = initStore, action: AnyAction) => {
    switch (action.type) {
        case "OPEN_POPUP": {
            return {
                ...state,
                currentPopup: action.currentPopup,
                detailsData: action.detailsData,
            };
        }
        case "SET_APART_ID": {
            return {
                ...state,
                apartId: action.apartId,
            };
        }

        default: {
            return state;
        }
    }
};

export default popupReducer;

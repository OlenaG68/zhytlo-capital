import { combineReducers, createStore } from "redux";

import popupReducer from "./popup";

const store = createStore(
    combineReducers({
        popup: popupReducer,
    })
);
export default store;

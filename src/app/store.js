import { configureStore } from "@reduxjs/toolkit";
// import rootSelectorReducer from "../features/rootSelector/rootSelectorSlice";
import groupSelectorReducer from "../features/groupSelector/groupSelectorSlice";
import noteSelectorSlice from "../features/noteSelector/noteSelectorSlice";

export default configureStore({
    reducer: {
        noteSelector : noteSelectorSlice,
        groupSelector : groupSelectorReducer
    }
})

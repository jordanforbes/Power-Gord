import { configureStore } from "@reduxjs/toolkit";
import rootSelectorReducer from "../features/rootSelector/rootSelectorSlice";
import statusSelectorReducer from "../features/statusSelector/statusSelectorSlice";
import groupSelectorReducer from "../features/groupSelector/groupSelectorSlice";
import noteSelectorSlice from "../features/noteSelector/noteSelectorSlice";

export default configureStore({
    reducer: {
        rootSelectorReducer : rootSelectorReducer,
        statusSelectorReducer : statusSelectorReducer,
        noteSelector : noteSelectorSlice,
        groupSelector : groupSelectorReducer
    }
})

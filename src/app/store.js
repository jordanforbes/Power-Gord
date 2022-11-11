import { configureStore } from "@reduxjs/toolkit";
import rootSelectorReducer from "../features/rootSelectorSlice";
import statusSelectorReducer from "../features/statusSelectorSlice";
import groupSelectorReducer from "../features/groupSelectorSlice";
import noteSelectorSlice from "../features/noteSelectorSlice";

export default configureStore({
    reducer: {
        rootSelectorReducer : rootSelectorReducer,
        noteSelector : noteSelectorSlice,
        statusSelector : statusSelectorReducer,
        groupSelector : groupSelectorReducer
    }
})

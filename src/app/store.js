import { configureStore } from "@reduxjs/toolkit";
import rootSelectorReducer from "../features/rootSelector/rootSelectorSlice";
import groupSelectorReducer from "../features/groupSelector/groupSelectorSlice";

export default configureStore({
    reducer: {
        rootSelector : rootSelectorReducer,
        groupSelector : groupSelectorReducer
    }
})

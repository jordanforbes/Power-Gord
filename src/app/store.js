import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rootSelectorReducer from "../features/rootSelector/rootSelectorSlice";
import groupSelectorReducer from "../features/groupSelector/groupSelectorSlice";
import noteSelectorSlice from "../features/noteSelector/noteSelectorSlice";

const rootReducer = combineReducers({
    groupSelector: groupSelectorReducer
})

export default configureStore({
    reducer: {
        rootSelectorReducer : rootSelectorReducer,
        noteSelector : noteSelectorSlice,
        groupSelector : groupSelectorReducer
    }
})

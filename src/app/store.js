import { configureStore } from "@reduxjs/toolkit";
import rootSelectorReducer from "../features/rootSelector/rootSelectorSlice";

export default configureStore({
    reducer: {
        rootSelector : rootSelectorReducer,
    }
})

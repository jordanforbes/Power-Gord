import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import rootSelectorReducer from "../features/rootSelector/rootSelectorSlice";

export default configureStore({
    reducer: {
        counter : counterReducer,
        rootSelector : rootSelectorReducer,
    }
})

import { createSlice } from "@reduxjs/toolkit"

const initialState={
    currentRoot:'',
}

export const rootSelectorSlice = createSlice({
    name: 'rootSelector',
    initialState,
    reducers:{
        clearRoot: (state)=>{
            state.currentRoot = ''
        },
        changeRoot: (state, action)=>{
            state.currentRoot = action.payload
        }
    }
})

export const { changeRoot, clearRoot } = rootSelectorSlice.actions

export default rootSelectorSlice.reducer

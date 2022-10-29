import { createSlice } from "@reduxjs/toolkit"

const initialState={
    root:'',
}

export const rootSelectorSlice = createSlice({
    name: 'rootSelector',
    initialState,
    reducers:{
        selectRoot: (state, action)=>{
            let thisRoot = action.payload
            thisRoot = thisRoot.slice(0,thisRoot.length-1)
            state.root = thisRoot
        },
        clearRoot: (state)=>{
            state.root = ''
        },
    }
})

export const { selectRoot, clearRoot } = rootSelectorSlice.actions

export default rootSelectorSlice.reducer

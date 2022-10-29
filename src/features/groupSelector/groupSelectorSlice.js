import { createSlice } from "@reduxjs/toolkit"

const initialState={
    root:'',
    rawRoot:'',
    areScales: true,
    chord:'',
    scale:''
}

export const groupSelectorSlice = createSlice({
    name: 'groupSelector',
    initialState,
    reducers:{
        clearRoot: (state)=>{
            state.root = ''
        },
        clearChord: (state)=>{
            state.chord = ''
        },
        clearScale: (state)=>{
            state.scale = ''
        },
        selectRoot: (state, action)=>{
            let thisRoot = action.payload
            state.rawRoot = thisRoot
            state.root = thisRoot.slice(0,thisRoot.length-1)
        },
        selectChord: (state, action)=>{
            state.chord = action.payload
        },
        selectScale: (state, action)=>{
            state.scale = action.payload
        },
        swapGrouping: (state)=>{
            state.areScales = !state.areScales
        }
    }
})

export const { selectRoot, clearRoot, selectChord, clearChord, select, clearScale, swapGrouping } = groupSelectorSlice.actions

export default groupSelectorSlice.reducer

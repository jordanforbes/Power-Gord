import { createSlice } from "@reduxjs/toolkit"

const initialState={
    root:'E',
    chord:'Major',
    scale:'Minor Pentatonic'
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
        changeRoot: (state, action)=>{
            state.root = action.payload
        },
        changeChord: (state, action)=>{
            state.chord = action.payload
        },
        changeScale: (state, action)=>{
            state.scale = action.payload
        }
    }
})

export const { changeRoot, clearRoot, changeChord, clearChord, changeScale, clearScale } = groupSelectorSlice.actions

export default groupSelectorSlice.reducer

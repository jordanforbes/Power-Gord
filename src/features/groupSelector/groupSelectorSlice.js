import { createSlice } from "@reduxjs/toolkit"

const initialState={
    root:'',
    rawRoot:'',
    areScales: true,
    selectedChord:'',
    selectedScale:''
}

export const groupSelectorSlice = createSlice({
    name: 'groupSelector',
    initialState,
    reducers:{

        selectRoot: (state, action)=>{
            let thisRoot = action.payload
            state.rawRoot = thisRoot
            state.root = thisRoot.slice(0,thisRoot.length-1)
        },
        clearRoot: (state)=>{
            state.root = ''
            state.rawRoot=''
        },
        selectChord: (state, action)=>{
            state.selectedChord = action.payload
        },
        clearChord: (state)=>{
            state.selectedChord = ''
        },
        selectScale: (state, action)=>{
            state.selectedScale = action.payload
        },
        clearScale: (state)=>{
            state.selectedScale = ''
        },
        swapGrouping: (state)=>{
            state.areScales = !state.areScales
        },
        reset: (state)=>{
            state.root=''
            state.rawRoot=''
            state.chord=''
            state.scale=''
        }
    }
})

export const { selectRoot, clearRoot, selectChord, selectScale, clearChord, select, clearScale, swapGrouping, reset } = groupSelectorSlice.actions

export default groupSelectorSlice.reducer

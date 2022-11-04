import { createSlice } from "@reduxjs/toolkit"

const initialState={
    root:'',
    rawRoot:'',
    thisNote:'',
    thisRawNote:'',
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
        selectNote: (state, action)=>{
            let thisNote = action.payload
            state.thisRawNote = thisNote
            state.thisNote = thisNote.slice(0,thisNote.length-1)
        },
        clearNote: (state)=>{
            state.thisNote = ''
            state.thisRawNote=''
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
            state.thisNote=''
            state.thisRawNote=''
            state.chord=''
            state.scale=''
        }
    }
})

export const { selectRoot, clearRoot, selectNote, clearNote, selectChord, selectScale, clearChord, select, clearScale, swapGrouping, reset } = groupSelectorSlice.actions

export default groupSelectorSlice.reducer

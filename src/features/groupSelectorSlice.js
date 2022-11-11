import { createSlice } from "@reduxjs/toolkit"
import {Note, Scale, Chord} from '@tonaljs/tonal'

const initialState={
    root:'',
    rawRoot:'',
    areScales: true,
    isReverse: false,
    selectedChord:'',

    selectedScale:'',

    selectedGroup:'',
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
        selectGroup: (state, action)=>{
            state.selectedGroup = action.payload
        },
        clearGroup: (state)=>{
            state.selectedGroup = ''
        },
        swapGrouping: (state)=>{
            state.areScales = !state.areScales
        },
        toggleReverse: (state)=>{
            state.isReverse = !state.isReverse
        },
        reset: (state)=>{
            state.root=''
            state.rawRoot=''
            state.selectedChord=''
            state.selectedScale=''
            state.selectedGroup=''
        }
    }
})

export const { selectRoot, clearRoot, selectChord, selectScale, clearChord, selectGroup, clearGroup, clearScale, swapGrouping, toggleReverse, reset } = groupSelectorSlice.actions

export default groupSelectorSlice.reducer

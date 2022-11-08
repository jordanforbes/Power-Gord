import { createSlice } from "@reduxjs/toolkit"
import {Note, Scale, Chord} from '@tonaljs/tonal'

const initialState={
    root:'',
    rawRoot:'',
    areScales: true,
    selectedChord:'',
    selectedChordNotes:[],
    selectedChordChroma:[],
    selectedScale:'',
    selectedScaleNotes:[],
    selectedScaleChroma:[]
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
            console.log(state.selectedChord)
            console.log(state.root)
            // state.selectedChordNotes = Chord.notes(`${state.rawRoot}${state.selectedChord}`)
            // console.log(state.selectedChordNotes)
            let chordObject = Chord.get(`${state.root} ${state.selectedChord}`)
            state.selectedChordNotes = chordObject.notes
            console.log(state.selectedChordNotes)
            console.log(chordObject.chroma)
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

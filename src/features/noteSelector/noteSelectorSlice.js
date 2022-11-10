import { createSlice } from "@reduxjs/toolkit"
import { Note } from '@tonaljs/tonal'

const initialState={
    //holds the chroma of selectedNotes
    selectedNotes:[],
    selectedChroma:[]
}

export const noteSelectorSlice = createSlice({
    name: 'noteSelector',
    initialState,
    reducers:{
        addNote: (state, action)=>{
            if(action.payload){
                state.selectedNotes.push(action.payload)

            }
            state.selectedNotes.map(n=>console.log(n))
        },
        removeNote: (state,action)=>{
            //will remove individual notes from the list
        },
        clearNotes: (state)=>{
            state.selectedNotes = []
        },
    }
})

export const { addNote, clearNotes, removeNote } = noteSelectorSlice.actions

export default noteSelectorSlice.reducer

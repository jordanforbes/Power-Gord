import { ScaleType, Scale, ChordType, Chord } from "@tonaljs/tonal"
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    root:'',
    rawRoot:'',
    areScales: true,
    selectedGroup:'',
    groupInterval: ''
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

        selectGroup: (state, action)=>{
            state.selectedGroup = action.payload

            if(state.root){
                if(state.areScales){
                    state.groupInterval =  ScaleType.get(state.selectedGroup).intervals
                }else{
                    state.groupInterval =  ChordType.get(state.selectedGroup).intervals
                }
            }else{
                state.groupInterval = ['']
            }
            // console.log('group interval DEBUG', state.root)
            // console.log(state.groupInterval)
            // console.log('chords')
            // console.log(Chord.get(state.selectedGroup).intervals)
            // console.log(ChordType.get(state.selectedGroup).intervals)
            // console.log('scales')
            // console.log(Scale.get(state.selectedGroup).intervals)
            // console.log(ScaleType.get(state.selectedGroup).intervals)
        },
        clearGroup: (state)=>{
            state.selectedGroup = ''
        },
        swapGrouping: (state)=>{
            state.areScales = !state.areScales
        },
        setGroupMode:(state,action)=>{
            state.areScales = action.payload
        },
        reset: (state)=>{
            state.root=''
            state.rawRoot=''
            state.selectedGroup=''
        }
    }
})

export const { getGrouping, setGroupMode, selectRoot, clearRoot,  selectGroup, clearGroup, swapGrouping, reset } = groupSelectorSlice.actions

export default groupSelectorSlice.reducer

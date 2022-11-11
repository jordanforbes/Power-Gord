import { createSlice } from "@reduxjs/toolkit"

const initialState={
    areScales: true,
    isReverse: false
}

export const statusSelectorSlice = createSlice({
    name: 'statusSelector',
    initialState,
    reducers:{
        setGrouping: (state, action)=>{
            state.areScales = action.payload
        },
        toggleGrouping: (state)=>{
            state.areScales = !state.areScales
        },
        setIsReverse: (state, action)=>{
            state.isReverse = action.payload
        },
        toggleReverse: (state)=>{
            state.isReverse = !state.isReverse
        },
        statusReset: (state)=>{
            state.areScales = true
            state.isReverse = false
        }
    }
})

export const { setGrouping, toggleGrouping, setIsReverse, toggleReverse, statusReset } = statusSelectorSlice.actions

export default statusSelectorSlice.reducer

import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeRoot, clearRoot, changeChord, clearChord, changeScale, clearScale } from './groupSelectorSlice'

export const GroupSelector=()=>{
    const root = useSelector((state)=> state.groupSelector.root)
    const chord = useSelector((state)=> state.groupSelector.chord)
    const scale = useSelector((state)=> state.groupSelector.scale)
    const dispatch = useDispatch()

    return(
        <div>
            <span>Root: {root} </span>
            <button
                aria-label="E"
                onClick = {()=> dispatch(changeRoot('E'))}
            >E</button>
        </div>
    )
}

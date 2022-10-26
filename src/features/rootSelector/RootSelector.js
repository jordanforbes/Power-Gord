import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeRoot, clearRoot } from './rootSelectorSlice'

export const RootSelector=()=>{
    const currentRoot = useSelector((state)=> state.rootSelector.currentRoot)
    const dispatch = useDispatch()

    return(
        <div>
            <span>Root: {currentRoot} </span>
            <button
                aria-label="E"
                onClick = {()=> dispatch(changeRoot('E'))}
            >E</button>
        </div>
    )
}

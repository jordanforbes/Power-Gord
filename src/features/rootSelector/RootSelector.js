import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectRoot, clearRoot } from './rootSelectorSlice'

export const RootSelector=()=>{
    const currentRoot = useSelector((state)=> state.rootSelector.root)
    const dispatch = useDispatch()

    return(
        <div>
            <span>Root: {currentRoot} </span>
            <button
                aria-label="E"
                onClick = {()=> dispatch(selectRoot('E'))}
            >E</button>
        </div>
    )
}

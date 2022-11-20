////////////////////////////////////////////////////////////////
//component which defines the individual note buttons on the fretboard.
////////////////////////////////////////////////////////////////

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { octaveRemove } from '../../utilities/utils';
import { selectRoot } from '../../features/groupSelector/groupSelectorSlice';
import NoteString from './NoteString';

const NoteButton=(props)=>{
    const [isRoot, setIsRoot] = useState(false)
    const [inRange, setInRange] = useState(true)
    const [isEnharmonic, setIsEnharmonic] = useState(false)

    const dispatch = useDispatch();
    const root = useSelector(state => state.groupSelector.root)
    const areScales = useSelector(state => state.groupSelector.areScales)

    //sets the default color value for the group based on if it's scales or chords.
    var rangeColor = areScales ? 'isInRangeScales':'isInRangeChords'

    //adds root and group together to plug back into the tonaljs library
    useEffect(()=>{
        if(root === octaveRemove(props.thisNote)){
            setIsRoot(true)
        }else{
            setIsRoot(false)
        }
    },[root])

    //sets the root for the chord/scale on button press
    const activate=(note)=>{
        setIsRoot(current => !current);
        dispatch(selectRoot(note))
    }

    const handleClick=()=>{
        isRoot ? activate(""):
        activate(props.thisNote)

    }
    return(
        <button
            type="button"
            className={`noteButton ${isRoot ? 'isRoot' : inRange? rangeColor :'isNotInRange'} btn`}
            onClick={handleClick}
        >
            <NoteString
                isEnharmonic = {isEnharmonic}
                setIsEnharmonic = {setIsEnharmonic}
                thisNote = {props.thisNote}
                inRange = {inRange}
                isRoot = {isRoot}
                grouping = {props.grouping}
                setInRange = {setInRange}
            />
        </button>
    )
  }

export default NoteButton;

import React from 'react';
import { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Note } from '@tonaljs/tonal'

import { selectRoot } from '../../features/groupSelector/groupSelectorSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

import NoteString from './NoteString';

const NoteButton=(props)=>{
    const dispatch = useDispatch();
    const root = useSelector(state => state.groupSelector.root)
    const areScales = useSelector(state => state.groupSelector.areScales)

    const [isRoot, setIsRoot] = useState(false)
    const [inRange, setInRange] = useState(true)
    const [isEnharmonic, setIsEnharmonic] = useState(false)

    //sets the default color value for the group based on if it's scales or chords.

    var rangeColor = areScales ? 'isInRangeScales':'isInRangeChords'

    const octaveRemove =(note)=>{
        return note.slice(0, note.length-1)
    }

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
        // console.log('redux state change '+root)
        // console.log('inRange DEBUG')
        // console.log(inRange)
    }

    const handleClick=()=>{
        isRoot ? activate(""):
        console.log('enharmonic',Note.chroma(props.thisNote))

        activate(props.thisNote)

    }
    return(
        <button
            type="button"
            className={`
                noteButton
                ${isRoot ?
                    'isRoot'
                : inRange?
                    rangeColor
                :'isNotInRange'
            }
                btn
                `}
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

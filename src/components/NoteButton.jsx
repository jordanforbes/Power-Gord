import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoot } from '../features/groupSelector/groupSelectorSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

import NoteString from './NoteString';

const NoteButton=(props)=>{
    const root = useSelector(state => state.groupSelector.root)
    const areScales = useSelector(state => state.groupSelector.areScales)

    const dispatch = useDispatch();


    const [isRoot, setIsRoot] = useState(false)
    const [inRange, setInRange] = useState(true)
    const [isEnharmonic, setIsEnharmonic] = useState(false)

    //sets the default color value for the group based on if it's scales or chords.

    var groupColor = areScales ? 'red':'blue'

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
        // props.setNotes(note)
        dispatch(selectRoot(note))
        console.log('redux state change '+root)
        // props.setSelectedRoot(note)
    }

    const handleClick=()=>{
        isRoot ? activate(""):
        activate(props.thisNote)

    }
    return(
        <Button
            type="button"
            className={`btn btn-outline-light noteButton
                ${inRange? 'isInRange':'isNotInRange'}`}
            onClick={handleClick}
            style={{
                width:'50px',
                display:'block',
                backgroundColor: isRoot? "#ffff80" : inRange? groupColor: "gray",
                "color": isRoot? 'black':'white'
            }}
        >
            <NoteString
                isEnharmonic = {isEnharmonic}
                setIsEnharmonic = {setIsEnharmonic}
                thisNote = {props.thisNote}
                isRoot = {props.isRoot}
                inRange = {props.inRange}
                setInRange = {setInRange}
                selectedGroup = {props.selectedGroup}
                selectedRoot = {props.selectedRoot}
            />
        </Button>
    )
  }

export default NoteButton;

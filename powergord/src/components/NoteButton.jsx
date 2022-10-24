import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NoteString from './NoteString';

const NoteButton=(props)=>{

    const [isRoot, setIsRoot] = useState(false)
    const [inRange, setInRange] = useState(true)
    const [isEnharmonic, setIsEnharmonic] = useState(false)

    //sets the default color value for the group based on if it's scales or chords.

    var groupColor = props.areScales ? 'red':'blue'

    //adds root and group together to plug back into the tonaljs library

    useEffect(()=>{
        if(props.selectedRoot === props.thisNote){
            setIsRoot(true)
        }else{
            setIsRoot(false)
        }
    },[props.selectedRoot])


    //sets the root for the chord/scale on button press
    const activate=(note)=>{
        setIsRoot(current => !current);
        props.setNotes(note)
        props.setSelectedRoot(note)
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
                setIsRoot = {props.setIsRoot}
                inRange = {props.inRange}
                setInRange = {setInRange}
                selectedGroup = {props.selectedGroup}
                selectedRoot = {props.selectedRoot}
                grouping = {props.grouping}
            />
            {/* {noteString()} */}
        </Button>
    )
  }

export default NoteButton;

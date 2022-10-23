import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Note } from '@tonaljs/tonal'


import NoteString from './NoteString';

const NoteButton=(props)=>{

    //ist there a way to check each note and see if the active prop is on?

    //TODO: make the displayed note change if the enharmonic value is in the grouping

    const [isRoot, setIsRoot] = useState(false)
    const [inRange, setInRange] = useState(true)
    const [isEnharmonic, setIsEnharmonic] = useState(false)

    var groupColor = props.chordsOrScales ? 'red':'blue'

    //adds root and group together


    useEffect(()=>{
        if(props.selectedRoot === props.thisNote){
            setIsRoot(true)
        }else{
            setIsRoot(false)
        }
    },[props.selectedRoot])


    const activate=(note)=>{
        setIsRoot(current => !current);
        props.setNotes(note)
        props.setSelectedRoot(note)
    }

    // let nString = noteString()

    const handleClick=()=>{
        isRoot ? activate(""):
        activate(props.thisNote)
        // setIsEnharmonic(!isEnharmonic)
        // nString ='y'
    }
    return(
        <Button
            type="button"
            className={`btn btn-outline-light noteButton
                ${inRange? 'isInRange':'isNotInRange'}`}
            onClick={handleClick}
            style={{

                display:'block',
                backgroundColor: isRoot? "#ffff80" : inRange? groupColor: "gray"
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

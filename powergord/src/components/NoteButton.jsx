import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NoteButton=(props)=>{

    //ist there a way to check each note and see if the active prop is on?
    const [isActive, setIsActive] = useState(false)

    // console.log('noteButton load')

    const handleClick=()=>{
        activate(props.thisNote)
    }

    const activate=(note)=>{
        setIsActive(current => !current);
        props.setNotes(note)
        console.log(`activate: ${props.thisNote}`)
    }

    const noteString=()=>{
        let note = props.thisNote.substr(0,props.thisNote.length-1)
        let octave = props.thisNote.substr(props.thisNote.length-1)
        return (
            <>
            <span className="btnNote">{note}</span>
            <span className="btnOctave topright">{octave}</span>
            </>)
    }

    return(
        <Button
            type="button"
            className="btn btn-outline-light"
            onClick={handleClick}
            style={{
                display:'block',
                color: isActive? 'gray':'white',
                backgroundColor: isActive? "#ffff80" : "gray"
            }}
        >
            {noteString()}
        </Button>
    )
  }

export default NoteButton;

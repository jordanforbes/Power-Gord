import React from 'react';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

const NoteButton=(props)=>{
    const [isActive, setIsActive] = useState(false)

    const sendNote =()=>{
        console.log(props.note)
    };

    const handleClick=()=>{
        setIsActive(current => !current);
        props.setNotes(props.interval)
        console.log(props.interval)
        // {props.setSelectedNotes(props.pos)}
    }

    return(
        <Button
            type="button"
            className="button btn-primary"
            onClick={handleClick}
            style={{
                display:'block',
                color:'black',
                backgroundColor: isActive? "yellow" : "white"
            }}
        >
            {props.thisNote}-{props.position}
        </Button>
    )
  }

export default NoteButton;

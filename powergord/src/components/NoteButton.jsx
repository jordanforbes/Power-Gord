import React from 'react';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

const NoteButton=(props)=>{
    const [isActive, setIsActive] = useState(false)

    const handleClick=()=>{
        props.setNotes(props.thisNote)
        console.log(`handle click noteButton.js ${props.notes}`)
        // console.log(`handle click noteButton.js ${props.selectedNotes}`)
        // setIsActive(current => !current);
        // console.log(props.notes)
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

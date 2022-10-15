import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const NoteButton=(props)=>{
    const [isActive, setIsActive] = useState(false)

    // console.log('noteButton load')

    const handleClick=()=>{
        props.setSelectedNotes(props.thisNote)
        console.log(`handle click noteButton.js ${props.notes}`)

        setIsActive(current => !current);
        console.log(props.notes)
    }


    return(
        <Button
            type="button"
            className="button"
            onClick={handleClick}
            style={{
                display:'block',
                color:'black',
                backgroundColor: isActive? "yellow" : "white"
            }}
        >
            {props.thisNote}
        </Button>
    )
  }

export default NoteButton;

import React from 'react';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

const NoteButton=(props)=>{
    const [isActive, setIsActive] = useState(false)

    const sendNote =()=>{
        console.log(props.pos)
    };

    const handleClick=()=>{
        setIsActive(current => !current);
        sendNote();
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
            {props.pos}
        </Button>
    )
}

export default NoteButton;

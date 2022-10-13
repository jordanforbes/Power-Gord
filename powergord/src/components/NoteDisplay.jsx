import React from 'react';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

const NoteDisplay=(props)=>{
    return (
        <div>
            <p>notes</p>
            <p>{props.selectedNotes}</p>
        </div>
    )
}

export default NoteDisplay;

// import React, { useState, useEffect } from 'react';
// import {useState} from 'react';
// import {Button} from 'react-bootstrap';

const NoteDisplay=(props)=>{


    const showNotes =()=>{
        console.log('showNotes')
        let selNotes = props.selectedNotes;

        return selNotes.map(n => (
            <span
                className='badge'
            >{n}</span>
        ))
    }


    return (
        <div>
            {showNotes}
        </div>
    )
}

export default NoteDisplay;

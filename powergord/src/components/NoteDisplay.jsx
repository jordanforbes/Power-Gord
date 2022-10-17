// import React, { useState, useEffect } from 'react';
// import {useState} from 'react';
// import {Button} from 'react-bootstrap';

const NoteDisplay=(props)=>{


    const showNotes =()=>{
        console.log('NoteDisplay.jsx showNotes')
        let selNotes = props.selectedNotes;
        console.log(selNotes)
        return selNotes.map(n => (
            <span
                className='badge'
            >{n}</span>
        ))
    }


    return (
        <div className="outline">
            {showNotes}
        </div>
    )
}

export default NoteDisplay;

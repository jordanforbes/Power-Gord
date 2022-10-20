// import React, { useState, useEffect } from 'react';
// import {useState} from 'react';
// import {Button} from 'react-bootstrap';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'

const NoteDisplay=(props)=>{
    const formatter=(note) =>{
        return note.slice(0,note.length-1)
    }

    const showNotes =()=>{
        let groupArr
        if(props.groupType === 'scales'){
            groupArr = Scale.get(props.selectedRoot+' '+props.selectedScale).notes

        }

        if(props.groupType === 'chords'){
            groupArr = Chord.get(props.selectedRoot+' '+props.selectedChord).notes

        }
        return groupArr.map(n => (
            <span>{formatter(n)} </span>
        ))

    }


    return (
        <div className="outline">
            {showNotes()}
        </div>
    )
}

export default NoteDisplay;

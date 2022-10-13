import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

//components
import NoteButton from './NoteButton';

const NoteBar=(props)=>{
    const intervals= ['R','m2','M2','m3','M3','P4','A4','P5','m6','M6','m7','M7']

    // const fretboardBuilder =()=>{
    //     for(let i in intervals){
    //         return <NoteButton pos={intervals[i]} setNotes={props.setNotes}/>
    //     }
    // }

    return(
        <div className="note-bar">

            <ButtonGroup vertical>
                {/* {fretboardBuilder()}*/}
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={0} thisNote="E" interval="R" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={1} thisNote="F" interval="m2" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={2} thisNote="F#" interval="M2" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={3} thisNote="G" interval="m3" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={4} thisNote="G#" interval="M3" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={5} thisNote="A" interval="P4" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={6} thisNote="A#" interval="A4" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={7} thisNote="B" interval="P5" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={8} thisNote="C" interval="m6" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={9} thisNote="C#" interval="M6" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={10} thisNote="D" interval="m7" />
                <NoteButton setNotes={props.setNotes} notes={props.notes} position={11} thisNote="D#" interval="M7" />
            </ButtonGroup>

    </div>
    )

  }

export default NoteBar;

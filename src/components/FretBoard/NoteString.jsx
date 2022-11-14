import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Note } from '@tonaljs/tonal'


const NoteString=(props)=>{
    const rawRoot = useSelector(state => state.groupSelector.rawRoot)
    var selectedGroup = useSelector(state => state.groupSelector.selectedGroup)


    //separate note from octave
    let note = props.thisNote.substr(0,props.thisNote.length-1)
    let octave = props.thisNote.substr(props.thisNote.length-1)


    //gets notes from grouping
    const findGroup =(group)=>{
        let groupArr = props.grouping.get(rawRoot+' '+group).notes
        groupArr = groupArr.map(n =>(
            n.slice(0,n.length-1)
        ))
        return groupArr
    }

    const checkInRange =()=>{
        let currentGroup = findGroup(selectedGroup)
        let currentNote = props.thisNote.slice(0,props.thisNote.length-1)

        let noteChroma = Note.chroma(currentNote)
        let chromaGroup = currentGroup.map(Note.chroma)

        chromaGroup.includes(noteChroma) ? props.setInRange(true): props.setInRange(false)
    }

    //checks if note is in range of group
    useEffect(()=>{
        checkInRange()
    },[selectedGroup,rawRoot])

    const getEnharmonic=(n)=>{
        return Note.enharmonic(n)
    }



    note = props.isEnharmonic ?getEnharmonic(note) : note

    return (
        <>
        <span
            className={`btnNote
            `}
        >{note}</span>
        <span className="btnOctave topright">{octave}</span>
        </>)
}

export default NoteString

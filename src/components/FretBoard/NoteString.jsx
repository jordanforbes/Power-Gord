import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Note } from '@tonaljs/tonal'


const NoteString=(props)=>{
    const rawRoot = useSelector(state => state.groupSelector.rawRoot)
    var selectedGroup = useSelector(state => state.groupSelector.selectedGroup)
    var groupInterval = useSelector(state => state.groupSelector.groupInterval)

    // const focusInterval = ''

    const [thisInterval, setThisInterval] = useState('')

    //separate note from octave
    let note = props.thisNote.substr(0,props.thisNote.length-1)
    // let octave = props.thisNote.substr(props.thisNote.length-1)


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
        // console.log('GROUPDEBUG',currentGroup)
        let currentNote = props.thisNote.slice(0,props.thisNote.length-1)

        let noteChroma = Note.chroma(currentNote)
        let chromaGroup = currentGroup.map(Note.chroma)
        let intIndex

        if(chromaGroup.includes(noteChroma)){
            props.setInRange(true)
            intIndex = chromaGroup.indexOf(noteChroma)
            setThisInterval(groupInterval[intIndex])
        }else{
            props.setInRange(false)
            setThisInterval('')
        }

    }


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
        <span className={`${props.isRoot ? 'rootInterval' : 'btnOctave'} topright`}>{thisInterval}</span>
        </>)
}

export default NoteString

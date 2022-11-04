import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Note } from '@tonaljs/tonal'


const NoteString=(props)=>{
    const rawRoot = useSelector(state => state.groupSelector.rawRoot)
    const areScales = useSelector(state => state.groupSelector.areScales)

    const selectedChord = useSelector(state => state.groupSelector.selectedChord)
    const selectedScale = useSelector(state => state.groupSelector.selectedScale)
    var thisGroup = areScales? selectedScale : selectedChord


    //separate note from octave
    let note = props.thisNote.substr(0,props.thisNote.length-1)
    let octave = props.thisNote.substr(props.thisNote.length-1)


    //gets notes from grouping
    const findGroup =(selectedGroup)=>{
        let groupArr = props.grouping.get(rawRoot+' '+selectedGroup).notes
        groupArr = groupArr.map(n =>(
            n.slice(0,n.length-1)
        ))
        return groupArr
    }

    const checkInRange =()=>{
        let currentGroup = findGroup(thisGroup)
        let currentNote = props.thisNote.slice(0,props.thisNote.length-1)


        currentGroup.includes(currentNote) ? checkEnharmonic(currentNote,false) : currentGroup.includes(getEnharmonic(currentNote)) ? checkEnharmonic(currentNote,true) : props.setInRange(false)
    }

    //checks if note is in range of group
    useEffect(()=>{
        checkInRange()
    },[thisGroup]) //FIXME: SELECTED GROUP

    const getEnharmonic=(n)=>{
        return Note.enharmonic(n)
    }

    const checkEnharmonic = (n,bool)=>{
        props.setInRange(true)
        props.setIsEnharmonic(bool)
    }
    // console.log('getenharmonic '+getEnharmonic(note))

    note = props.isEnharmonic ?getEnharmonic(note) : note

    return (
        <>
        <span
            className={`btnNote
                ${props.isRoot? 'isRoot':'isNotRoot'}
            `}
        >{note}</span>
        <span className="btnOctave topright">{octave}</span>
        </>)
}

export default NoteString

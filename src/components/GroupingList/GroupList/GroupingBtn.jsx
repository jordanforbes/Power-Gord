import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizer } from '../../../utilities/capitalizer';

import { selectGroup, clearGroup } from '../../../features/groupSelector/groupSelectorSlice';

import 'bootstrap/dist/css/bootstrap.min.css';


const GroupingBtn=(props)=>{
    const [active, setActive] = useState(false)

    const areScales = useSelector(state => state.groupSelector.areScales)
    const rawRoot = useSelector(state => state.groupSelector.rawRoot)
    const dispatch = useDispatch();

    var selectedGroup = useSelector(state => state.groupSelector.selectedGroup)


    const selectGrouping =(group)=> {
        dispatch(selectGroup(group))
        console.log(selectedGroup)
    }

    const checkActive =()=>{
        if(selectedGroup === props.name){
            setActive(true)
        }else{
            setActive(false)
        }
    }

    useEffect(()=>{
        checkActive()
    },[selectedGroup]) //FIXME: SELECTED GROUP

    const handleClick=()=>{
        if(rawRoot){
            selectGrouping(props.name)
            checkActive()
        }
        if(active){
            setActive(false)
            dispatch(clearGroup())
        }
    }

    const formatter = (entry)=>{
        let entryArr = entry.split(" ");
        let fString = ''
        for(let i= 0; i< entryArr.length; i++){
            fString += capitalizer(entryArr[i])+" "
        }
        return(<span>{fString}</span>)
    }

    const noteFormatter=(note) =>{
        return note.slice(0,note.length-1)
    }

    const showNotes =()=>{
        let groupArr = rawRoot ? props.grouping.get(rawRoot+' '+props.name).notes : props.grouping.get(props.name).intervals

        return groupArr.map(n => (
            <span>{rawRoot ? noteFormatter(n):n} </span>
        ))
    }
    const showIntervals =()=>{
        let intArr = props.grouping.get(props.name).intervals

        return (
            <>
            <br />
            <span className='groupSpacing selectedGroupNoteList'>
                {intArr.map(n => (
                <span>{n} </span>
                ))}
            </span>
            </>
        )
    }

    const changeBgColor = () =>{
        return areScales ? 'selectedScaleRow':'selectedChordRow'
    }
    const changeHoverColor = () =>{
        return areScales ? 'scaleRow':'chordRow'
    }


    return(
        <tr className={`${changeHoverColor()} ${active? changeBgColor():''}`}
            onClick={handleClick}

        >
            <span
                className={`groupSpacing ${active? 'selectedScaleName':''}`}
            >
                <span className={`groupSpacing ${active? 'selectedGroupName selectedScale':''}`}>
                {formatter(props.name)}
                </span>
                <br />
                <span className={`groupSpacing ${active? 'selectedGroupNoteList': 'groupNoteList' }`}>
                    {showNotes()}
                </span>
                {active ?
                    showIntervals()
                    : ''
                }
            </span>
        </tr>
    )
}

export default GroupingBtn

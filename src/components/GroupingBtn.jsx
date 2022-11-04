import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizer } from '../utilities/capitalizer';

import { selectChord, selectScale } from './../features/groupSelector/groupSelectorSlice';

import 'bootstrap/dist/css/bootstrap.min.css';


const GroupingBtn=(props)=>{
    const [active, setActive] = useState(false)
    // const groupSelector = useSelector(state => state.groupSelector)
    const areScales = useSelector(state => state.groupSelector.areScales)
    const dispatch = useDispatch();

    const selectedChord = useSelector(state => state.groupSelector.selectedChord)
    const selectedScale = useSelector(state => state.groupSelector.selectedScale)
    var thisGroup = areScales? selectedScale : selectedChord

    const selectGroup =(group)=> {
        console.log('selectedGroups')
        console.log(group)
        areScales ? dispatch(selectScale(group)) :
        dispatch(selectChord(group))
        console.log('selChord',selectedChord)
        console.log('selScale',selectedScale)
    }

    const checkActive =()=>{
        if(thisGroup === props.name){
            setActive(true)
        }else{
            setActive(false)
        }
    }

    useEffect(()=>{
        checkActive()
    },[thisGroup]) //FIXME: SELECTED GROUP

    const handleClick=()=>{
            // props.setSelectedGroup(props.name) //FIXME: SELECTED GROUP
            selectGroup(props.name)
            console.log('thisgroup '+thisGroup)
            checkActive()
    }

    const formatter = (entry)=>{
        let entryArr = entry.split(" ");
        let fString = ''
        for(let i= 0; i< entryArr.length; i++){
            fString += capitalizer(entryArr[i])+" "
        }
        return(<span>{fString}</span>)
    }
    return(
        <span
            style={{
                    padding:'1px',
                    backgroundColor: active? 'yellow': 'white'
                }}onClick={handleClick}>
            {formatter(props.name)}
        </span>
    )
}

export default GroupingBtn

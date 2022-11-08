import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizer } from '../utilities/capitalizer';

import { selectChord, selectScale, selectGroup } from './../features/groupSelector/groupSelectorSlice';

import 'bootstrap/dist/css/bootstrap.min.css';


const GroupingBtn=(props)=>{
    const [active, setActive] = useState(false)

    const areScales = useSelector(state => state.groupSelector.areScales)
    const dispatch = useDispatch();

    var selectedChord = useSelector(state => state.groupSelector.selectedChord)
    var selectedScale = useSelector(state => state.groupSelector.selectedScale)
    var selectedGroup = useSelector(state => state.groupSelector.selectedGroup)

    var thisGroup = areScales? selectedScale : selectedChord

    const selectGrouping =(group)=> {
        dispatch(selectGroup(group))
        areScales ? dispatch(selectScale(group)) :
        dispatch(selectChord(group))

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
    },[thisGroup, selectedGroup]) //FIXME: SELECTED GROUP

    const handleClick=()=>{
            selectGrouping(props.name)
            // console.log('thisgroup '+thisGroup)
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

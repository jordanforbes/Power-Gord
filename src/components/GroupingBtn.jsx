import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectChord, selectScale } from './../features/groupSelector/groupSelectorSlice';

import 'bootstrap/dist/css/bootstrap.min.css';


const GroupingBtn=(props)=>{
    const [active, setActive] = useState(false)
    // const groupSelector = useSelector(state => state.groupSelector)
    const areScales = useSelector(state => state.groupSelector.areScales)
    const dispatch = useDispatch();
    var thisGroup = useSelector(state => areScales? state.groupSelector.selectedScale : state.groupSelector.selectedChord)

    const selectGroup =(group)=> {
        areScales ? dispatch(selectScale(group)) :
        dispatch(selectChord(group))
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
    },[props.selectedGroup]) //FIXME: SELECTED GROUP

    const handleClick=()=>{
            props.setSelectedGroup(props.name) //FIXME: SELECTED GROUP
            selectGroup(props.name)
            console.log('thisgroup '+thisGroup)
            checkActive()
    }

    //capitalize first letter in each word
    const capitalizer = (entry)=>{
        return entry.charAt(0).toUpperCase() + entry.slice(1).toLowerCase()
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

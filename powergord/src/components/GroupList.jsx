import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import GroupingBtn from './GroupingBtn';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'

import 'bootstrap/dist/css/bootstrap.min.css';


const GroupList =(props)=>{
    // const [selected,setSelected] = useState('Egyptian')

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

    //Loops through all props.group lists
    const allGroupings =()=>{
        let groupArr
        if(props.groupType === 'scales'){
            groupArr = Scale.names()
        }
        if(props.groupType === 'chords'){
            groupArr = ChordType.names()
        }
        return groupArr.map(s =>(
            <>
                <tr
                    className="scaleRow"
                  >
                    <GroupingBtn
                        groupType={props.groupType}
                        selectedScale={props.selectedScale}
                        selectedChord={props.selectedChord}
                        setSelectedScale={props.setSelectedScale}
                        setSelectedChord={props.setSelectedChord}
                        name={s}
                    />
                </tr>
            </>
            )
        )
    }
    return(
        <>
            <div className="overflow-auto scaleContainer text-left text-justify">

                <Table bordered>
                    <tbody>
                        {allGroupings()}
                    </tbody>
                </Table>
            </div>
        </>
        )
}

export default GroupList

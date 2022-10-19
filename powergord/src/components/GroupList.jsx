import React from 'react';
import Table from 'react-bootstrap/Table';
import GroupingBtn from './GroupingBtn';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'

import 'bootstrap/dist/css/bootstrap.min.css';


const GroupList =(props)=>{


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
                <tr className="scaleRow">
                    <GroupingBtn
                        name={s}
                        groupType={props.groupType}
                        setSelectedScale={props.setSelectedScale}
                        setSelectedChord={props.setSelectedChord}
                    />
                </tr>
            </>
            )
        )
    }
    return(
        <>
            <div className="overflow-auto scaleContainer text-left text-justify">

                <Table striped bordered hover>
                    <tbody>
                        {allGroupings()}
                    </tbody>
                </Table>
            </div>
        </>
        )
}

export default GroupList

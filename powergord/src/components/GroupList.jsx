import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import GroupingBtn from './GroupingBtn';
import { Scale, ChordType, ScaleType } from '@tonaljs/tonal'

import 'bootstrap/dist/css/bootstrap.min.css';


const GroupList =(props)=>{

    const allGroupings =()=>{
        let groupArr
        if(props.chordsOrScales === true){
            groupArr = Scale.names()
        }
        if(props.chordsOrScales === false){
            groupArr = ChordType.names()
        }
        return groupArr.map(name =>(
            <>
                <tr
                    className="scaleRow"
                  >
                    <GroupingBtn
                        chordsOrScales={props.chordsOrScales}
                        selectedRoot={props.selectedRoot}
                        selectedGroup={props.selectedGroup}
                        setSelectedGroup={props.setSelectedGroup}
                        grouping={props.grouping}
                        name={name}
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

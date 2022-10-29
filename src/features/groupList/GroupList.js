import React from 'react';
import Table from 'react-bootstrap/Table';
import GroupingBtn from './GroupingBtn';
import { Scale, ChordType } from '@tonaljs/tonal'

import 'bootstrap/dist/css/bootstrap.min.css';


const GroupList =(props)=>{

    const allGroupings =()=>{

        //finds all of the names of scales and chords
        let groupArr = props.areScales ? Scale.names() : ChordType.names()

        return groupArr.map(name =>(
            <>
                <tr
                    className="scaleRow"
                  >
                    <GroupingBtn
                        areScales={props.areScales}
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

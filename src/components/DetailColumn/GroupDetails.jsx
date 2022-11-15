import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'



const GroupDetails=(props)=>{
    var selectedGroup =  useSelector(state => state.groupSelector.selectedGroup)
    const root = useSelector(state => state.groupSelector.root)


    // useEffect(()=>{
    //     console.log(props.groupType.get(selectedGroup))
    // },[selectedGroup])

    const showIntervals=()=>{
        let intArr = props.groupType.get(selectedGroup).intervals

        return intArr.map(i =>(
            <>
                {i+' '}
            </>
        ))
    }
    const showNotes=()=>{
        let thisGroup = root+' '+selectedGroup
        let noteArr = props.areScales? Scale.get(thisGroup).notes : Chord.get(thisGroup).notes

        console.log(noteArr)
        return noteArr.map(i =>(
            <>
                {i+' '}
            </>
        ))
    }

    return(
        <div>
            <p>Group Details</p>
            <p>
            <b>Name:</b><span> {selectedGroup}</span>
            </p>
            <p>
            <b>intervals:</b><span> {showIntervals()}</span>
            </p>

            <p>
            <b>notes:</b><span> {root ? showNotes(): 'select root'}</span>
            </p>
        </div>
    )
}

export default GroupDetails

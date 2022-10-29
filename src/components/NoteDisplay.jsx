import { useDispatch, useSelector } from 'react-redux';
import { selectRoot } from '../features/groupSelector/groupSelectorSlice';
import { Chord, Scale } from '@tonaljs/tonal'

const NoteDisplay=(props)=>{
    const root = useSelector(state => state.groupSelector.root)
    const rawRoot = useSelector(state => state.groupSelector.rawRoot)
    const areScales = useSelector(state => state.groupSelector.areScales)
    const grouping = areScales ? Scale : Chord


    const formatter=(note) =>{
        return note.slice(0,note.length-1)
    }

    const showNotes =()=>{
        let groupArr = grouping.get(rawRoot+' '+props.selectedGroup).notes
        return groupArr.map(n => (
            <span>{formatter(n)} </span>
        ))

    }

    return (
        <div className="outline">
            {showNotes()}
        </div>
    )
}

export default NoteDisplay;

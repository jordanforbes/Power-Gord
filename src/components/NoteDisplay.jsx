import { useDispatch, useSelector } from 'react-redux';
import { selectNote, clearNotes } from './../features/noteSelector/noteSelectorSlice'

const NoteDisplay=(props)=>{

    const rawRoot = useSelector(state => state.groupSelector.rawRoot)
    const selectedGroup = useSelector(state => state.groupSelector.selectedGroup)


    const formatter=(note) =>{
        return note.slice(0,note.length-1)
    }

    const showNotes =()=>{
        let groupArr = props.grouping.get(rawRoot+' '+selectedGroup).notes
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

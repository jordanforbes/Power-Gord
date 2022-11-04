import { useSelector } from 'react-redux';

const NoteDisplay=(props)=>{

    const rawRoot = useSelector(state => state.groupSelector.rawRoot)


    const formatter=(note) =>{
        return note.slice(0,note.length-1)
    }

    const showNotes =()=>{
        let groupArr = props.grouping.get(rawRoot+' '+props.selectedGroup).notes //FIXME: SELECTED GROUP
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

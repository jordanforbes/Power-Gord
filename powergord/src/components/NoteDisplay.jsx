const NoteDisplay=(props)=>{
    const formatter=(note) =>{
        return note.slice(0,note.length-1)
    }

    const showNotes =()=>{
        let groupArr
        console.log('selected Group: '+props.selectedGroup)
        groupArr = props.grouping.get(props.selectedRoot+' '+props.selectedGroup).notes
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

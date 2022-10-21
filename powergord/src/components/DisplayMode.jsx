import NoteDisplay from "./NoteDisplay"
import GroupList from "./GroupList"

const DisplayMode = (props)=>{
    return(
      <div className="col-md-10">
        <h2>{props.groupType.toUpperCase()}</h2>
        <div className="row">
            <NoteDisplay
            groupType={props.groupType}
            selectedRoot = {props.selectedRoot}
            selectedScale={props.selectedScale}
            selectedChord={props.selectedChord}
            selectedNotes = {props.selectedNotes}
            />
        </div>
            <GroupList
            groupType={props.groupType}
            selectedRoot = {props.selectedRoot}
            selectedScale={props.selectedScale}
            selectedChord={props.selectedChord}
            setSelectedScale={props.setSelectedScale}
            setSelectedChord={props.setSelectedChord}
            group={props.group}
            />
        </div>
    )
  }

export default DisplayMode

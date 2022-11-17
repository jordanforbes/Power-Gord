import GroupList from "./GroupList/GroupList"
import ClearBtn from './DisplayButtons/ClearBtn'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { setGroupMode, reset, clearGroup, clearChord, clearScale} from '../../features/groupSelector/groupSelectorSlice';


//contains the note list and the group list
const DisplayMode = (props)=>{
  const dispatch = useDispatch();
  const areScales = useSelector(state => state.groupSelector.areScales)

  const root = useSelector(state => state.groupSelector.root)


  const scaleMode =()=>{
    dispatch(clearGroup())
    dispatch(setGroupMode(true))
  }

  const chordMode =()=>{
    dispatch(clearGroup())
    dispatch(setGroupMode(false))
  }

    return(
      <div className="col-md-8">
        <ClearBtn root = {root} />
        <div
          className="row"
          style={{'display':'block','float':'left'}}
        >
        </div>

        <Button
          style={{'display':'block','float':'right','backgroundColor':'rgba(0,0,0,0)'}}
          className={
            `btn modeBtn ${areScales ? 'activeModeScales':'inactiveMode btn-outline-danger'}`
          }
          type="button"
          onClick={scaleMode}
          >
          <h2>Scales</h2>
        </Button>

        <Button
          style={{'display':'block','float':'right','backgroundColor':'rgba(0,0,0,0)', }}
          className={
            `btn modeBtn ${areScales ? 'inactiveMode btn-outline-primary':'activeModeChords'}`
          }
          type="button"
          onClick={chordMode}
        >
          <h2>Chords</h2>
        </Button>

        <div className="row">
        </div>
            <GroupList
              areScales={props.areScales}
              grouping={props.grouping}
              groupType = {props.groupType}
            />
        </div>
    )
  }

export default DisplayMode

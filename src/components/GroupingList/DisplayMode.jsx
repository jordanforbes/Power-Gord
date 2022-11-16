import GroupList from "./GroupList/GroupList"
import ClearBtn from './DisplayButtons/ClearBtn'
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
        <ClearBtn />
        <div
          className="row"
          style={{'display':'block','float':'left'}}
        >
          <h3>Root: {`${root? root: 'none'}`}</h3>
        </div>

        <button
          style={{'display':'block','float':'right'}}
          className={
            `modeBtn ${areScales ? 'activeMode':'inactiveMode'}`
          }
          type="button"
          onClick={scaleMode}
          >
          <h2>Scales</h2>
        </button>

        <button
          style={{'display':'block','float':'right'}}
          className={
            `modeBtn ${areScales ? 'inactiveMode':'activeMode'}`
          }
          type="button"
          onClick={chordMode}
        >
          <h2>Chords</h2>
        </button>

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
import { useDispatch, useSelector } from 'react-redux';
import { setGroupMode, reset, clearGroup, clearChord, clearScale} from '../../../features/groupSelector/groupSelectorSlice';


const ClearBtn =(props)=>{
    const dispatch = useDispatch()

    const clearBoard=()=>{
        dispatch(reset())
      }

    return(
        <button
          style={{'display':'block','float':'left'}}
          className=' clearBtn'
          onClick={clearBoard}
          >
          clear
        </button>
    )

}

export default ClearBtn

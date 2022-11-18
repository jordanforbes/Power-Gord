import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { reset} from '../../../features/groupSelector/groupSelectorSlice';


const ClearBtn =(props)=>{
    const dispatch = useDispatch()

    const clearBoard=()=>{
        dispatch(reset())
      }

    return(
      <>
        <Button
          style={{
            'display':'block',
            'float':'left',
            // 'backgroundColor':'rgba(0,0,0,0)'
          }}
          type="button"
          className={` btn btn-outline-dark ${props.root ? 'clearBtn': 'disabled'}`}
          onClick={clearBoard}
        >
          <div
            style={{
              'display':'block',
              'float':'left'
            }}
            >
            <h3>{props.root ? 'Root: '+props.root : 'Select Root'}</h3>
          </div>
          <div
            className={``}
            style={{
              'margin-left':'20px',
              'margin-top':'-10px',
              'margin-right':'-5px',
              'display':'block',
              'float':'left'
            }}
          >
            <span className="xClear">
              {props.root ? 'x': ''}
            </span>
          </div>
        </Button>
      </>
    )

}

export default ClearBtn

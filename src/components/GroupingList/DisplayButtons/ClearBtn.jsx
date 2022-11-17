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
            'backgroundColor':'rgba(0,0,0,0)'
          }}
          type="button"
          className={`clearBtn btn btn-outline-dark ${props.root ? '': 'disabled'}`}
          onClick={clearBoard}
        >
          <div
            style={{
              'display':'block',
              'float':'left'
            }}
            >
            <h3>Root: {props.root ? props.root : 'none'}</h3>
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
            {props.root ? 'x': ''}
          </div>
        </Button>
      </>
    )

}

export default ClearBtn

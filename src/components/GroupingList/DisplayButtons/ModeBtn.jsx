import { Button } from "react-bootstrap";

const ModeBtn=(props)=>{
    const groupClasses = ()=>{
        if(props.root){
        return props.scaleMode ?
            `${props.areScales ? 'activeModeScales':'inactiveModeScales btn-outline-danger'}`
        :
            `${props.areScales ? 'inactiveModeChords btn-outline-primary':'activeModeChords'}`
        }else{
            return 'noRootMode'
        }
    }

    return(
        <>
            <Button
                style={{
                    'display':'block',
                    'float':'right',
                    'backgroundColor':'rgba(0,0,0,0)',
                    'margin-right':'5px',
                    'margin-bottom':'5px'
                }}
                className={
                    "btn modeBtn "+groupClasses()
                }
                type="button"
                onClick={props.groupMode}
                >
                <h2>{props.scaleMode ? 'Scales' : 'Chords'}</h2>
            </Button>
        </>
    )
}

export default ModeBtn

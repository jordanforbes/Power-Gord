import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Scale } from '@tonaljs/tonal'

const Tuning=(props)=>{
    const scaleRange = Scale.rangeOf('E chromatic')
    const getTuning =(guitString)=>{
        let stringName = guitString.toUpperCase()
        let startNote = stringName.slice(0,stringName.length-1)
        let octave = parseInt(stringName.slice(stringName.length-1,stringName.length))+1
        octave = startNote+octave
        return scaleRange(stringName,octave)
    }

    console.log(getTuning('e2'))

    const e2 = scaleRange('E2','E3')
    const a2 = scaleRange('A2','A3')
    const d2 = scaleRange('D2','D3')
    const g3 = scaleRange('G3','G4')
    const b4 = scaleRange('B4','B5')
    const e4 = scaleRange('E4','E5')
}

export default Tuning

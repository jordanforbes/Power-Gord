//notes finder. Gets called for each note
////////////////////////////////////////////////////////////////
sp = require('./scaleParse')
gl = require('./groupList')
const scaleDict = gl.scale
const noteArr = require('./groupList').notes
const chordDict = require('./groupList').chord

// const chordDict={
//     "pow":["ionian","pow"],
//     "maj":["ionian","tri"],
//     "min":["aeolian","tri"],
//     "augTri":["lydian","augTri"],
//     "dimTri":["locrian","tri"],
//     "maj7":["ionian","sev"]
// }

const getKeyByValue=(object, value)=>{
    return Object.keys(object).find(key => object[key] === value);
  }

console.log(Object.keys())
const noteFinder=(root,mode,chord)=>{
    // let mode = scale["ionian"]
    let scaleArr=[]
    let rootNote = noteArr.indexOf(root)

    //mode notes finder
    scale[mode].forEach((e) => {
        e += rootNote;

        if(e <12){
            scaleArr.push(noteArr[e ]);
            e=e - rootNote

        }else{
            e-=12;
            scaleArr.push(notes[e]);
            element+=rootNote+12

        }

    });
    //chord notes finder
    if(chord != undefined){
        chordArr=[]
        chord.forEach(function(e){
            chordArr.push(scaleArr[e]);
        })
            return chordArr
    }else{
        console.log(root.toUpperCase() + " "+ mode + " scale")
        console.log(scaleArr)
    }

}

console.log(`noteFinder test ${noteFinder("c","ionian","tri")}`)

module.exports = {noteFinder, chordDict}

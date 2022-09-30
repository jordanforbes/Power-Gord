//notes finder. Gets called for each note
////////////////////////////////////////////////////////////////
sp = require('./scaleParse')
gl = require('./groupList')
const scale = gl.scale
notes = require('./groupList').notes
chord = require('./groupList').chord

const noteFinder=(root,modeName,chord)=>{
    let mode = scale["ionian"]
    let scaleArr=[]
    let rootNote = notes.indexOf(root)

    //mode notes finder
    mode.forEach((element) => {
        element += rootNote;

        if(element<12){
            scaleArr.push(notes[element]);
            element=element - rootNote

        }else{
            element-=12;
            scaleArr.push(notes[element]);
            element+=rootNote+12

        }

    });
    //chord notes finder
    if(chord != undefined){
        chordArr=[]
        chord.forEach(function(element){
            chordArr.push(scaleArr[element]);
        })
            return chordArr
    }else{
        console.log(root.toUpperCase() + " "+ modeName + " scale")
        console.log(scaleArr)
    }

}

module.exports = {noteFinder}

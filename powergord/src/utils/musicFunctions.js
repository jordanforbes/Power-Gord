gl = require('./groupList')
sp = require('./scaleParse')

const scale = gl.scale
const chord = gl.chord
const notes = gl.notes

noteFinder = require('./noteFinder').noteFinder

//chord list
////////////////////////////////////////////////////////////////
const Maj7=(root)=>{
    return noteFinder(root,scale["ionian"],chord["sev"])
}

const Maj=(root)=>{
    return noteFinder(root,scale["ionian"],chord["tri"])
}

const Min=(root)=>{
    return noteFinder(root,scale["aeolian"],chord["tri"])
}

const AugTri=(root)=>{
    return noteFinder(root,scale["lydian"],chord["augTri"])
}

const DimTri=(root)=>{
    return noteFinder(root,scale["locrian"],chord["tri"])
}

const fiveDyad=(root)=>{
//   console.log(n.toUpperCase() + " Power Chord")
    return noteFinder(root,scale["ionian"],chord["pow"])
}


////////////////////////////////////////////////////////////////
noteFinder("e", "ionian")
Maj7("c")
Maj("c")
Min("f")
console.log(
    "c augtri: "+AugTri("c"),
    "/c dimtri: "+DimTri("c")
)

fiveDyad("c")


//var majorTri= [scale([0][0]), scale([0][2]), scale([0][4]),]
//var majorSev= majorTri + scale([0][6])
//modes
// var ionian= scale[0];
// var dorian= scale[1];
// var phrygian= scale[2];
// var lydian= scale[3];
// var mixolydian= scale[4];
// var aeolian= scale[5];
// var locrian= scale[6];


//chord list
// var chord= [
//             [0,2,4], //major/minor triad
//             [0,2,5], //autmented triad
//             [0,2,4,6], //seventh quadrad
//             [0,4]   //power chord (5 chord)
//         ]

    //chord types
// var tri = chord[0]
// var augTri= chord[1]
// var sev = chord[2]
// var fi = chord[3]

// function findModeIndex(n){
//   findNoteIndex(n)
//   console.log(thisChord)
//   console.log(scale[0])
//   for(i=0; i<8; i++){

//   }

// }

//findModeIndex(["c","e","g"])

// function chordFinder(n){
//   findNoteIndex(n)
// }

// function findNoteIndex(n){
//     //console.log(n)
//     thisChord= []

//     for(i=0;i<n.length;i++){
//       d= notes.indexOf(n[i])
//       thisChord.push(d)
//     }

//     //console.log(thisChord)
//     return thisChord

//   }

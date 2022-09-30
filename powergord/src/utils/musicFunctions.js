

//notes
var notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]

var notesForLookup = ["C", "CD", "D", "DE", "E", "F", "FG", "G", "GA", "A", "AB", "B"]

gl = require('./groupList')
const scale = gl.scale
const chord = gl.chord

//converts the number strings to int
const scaleParse=(modeName)=>{
    numScale= []
    for (i in scale[modeName]){
        step = parseInt(i)
        numScale.push(step)
    }
    return numScale
}

//notes finder. Gets called for each note
const noteFinder=(root,modeName,chord)=>{

    let mode = scaleParse("ionian")
    let scaleArr=[]

    let rootNote = notes.indexOf(root)

    //mode notes finder
    mode.forEach((element) => {

        element += rootNote;

        if(element<12){
        scaleArr.push(notes[element]);
        element=element - rootNote

    }else if(element>=12){
        element=element-12;
        scaleArr.push(notes[element]);
        element=element+rootNote+12

    }

  });
    //chord notes finder
  if(chord != undefined){
    var chordArr=[]


    chord.forEach(function(element){

      chordArr.push(scaleArr[element]);
    })
      finArr= chordArr
    }else{
      console.log(root.toUpperCase() + " "+ modeName + " scale")
      console.log(scaleArr)
    }

}

//chord list


function Maj7(n){
  finArr=[]
  noteFinder(n,scale["ionian"],chord["sev"])
  console.log(finArr)
  return finArr
}

function Maj(n){
  finArr=[]
  //return n.toUpperCase() + " Major"
  noteFinder(n,scale["ionian"],chord["tri"])
  console.log(finArr)
  return finArr
}

function Min(n){
  finArr=[]
  noteFinder(n,scale["aeolian"],chord["tri"])
  console.log(finArr)
  return finArr
}

function AugTri(n){
  finArr=[]
  noteFinder(n,scale["lydian"],chord["augTri"])
  console.log(finArr)
  return finArr
}

function DimTri(n){
  finArr=[]
  noteFinder(n,scale["locrian"],chord["tri"])
  console.log(finArr)
  return finArr
}

function fiveDyad(n){
  console.log(n.toUpperCase() + " Power Chord")
  noteFinder(n,scale["ionian"],chord["pow"])
}

function findNoteIndex(n){
  //console.log(n)
  thisChord= []

  for(i=0;i<n.length;i++){
    d= notes.indexOf(n[i])
    thisChord.push(d)
  }

  //console.log(thisChord)
  return thisChord

}

function findModeIndex(n){
  findNoteIndex(n)
  console.log(thisChord)
  console.log(scale[0])
  for(i=0; i<8; i++){

  }

}

//findModeIndex(["c","e","g"])

function chordFinder(n){
  findNoteIndex(n)
}

noteFinder("e", "ionian")
Maj7("c")
Maj("c")
AugTri("c")
DimTri("c")
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

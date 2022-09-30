

//notes
var notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]

var notesForLookup = ["C", "CD", "D", "DE", "E", "F", "FG", "G", "GA", "A", "AB", "B"]


//scale list
const scale= {
        "ionian":[0,2,4,5,7,9,11],
        "dorian":[0,2,3,5,7,9,10],
        "phrygian":[0,1,3,5,7,8,10],
        "lydian":[0,2,4,6,7,9,11],
        "mixolydian":[0,2,4,5,7,9,10],
        "aeolian":[0,2,3,5,7,9,10],
        "locrian":[0,1,3,5,6,8,10]
    }

const chord= {
    0:[0,2,4], //major/minor triad
    1:[0,2,5], //autmented triad
    2:[0,2,4,6], //seventh quadrad
    3:[0,4]   //power chord (5 chord)
}
console.log("io test")
// console.log(typeof scale["ionian"])


testArr = []
for (i in scale["ionian"]){
    step = parseInt(i)
    testArr.push(step)
}
console.log(testArr)



//major/minor scales
var majorScales = ["ionian", "lydian", "mixolydian"];
var minorScales = ["dorian", "phrygian", "aeolian", "locrian"];

//notes finder. Gets called for each note
function noteFinder(n,modeName,chord){

    // console.log(modeName)
    brokenMode = scale["ionian"]
    // var mode = scale[modeName]
    mode = [0,2,4,5,7,9,11,"Ionian"]
    // console.log("broken mode "+brokenMode.type)
  var scaleArr=[]

  var x = notes.indexOf(n)

    //mode notes finder
  mode.forEach(function(element) {

    element=element + x;

    if(element<12){
    scaleArr.push(notes[element]);
    element=element - x

  }else if(element>=12){
    element=element-12;
    scaleArr.push(notes[element]);
    element=element+x+12

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
      console.log(n.toUpperCase() + " "+ modeName + " scale")
      console.log(scaleArr)
    }

}

//chord list


function Maj7(n){
  finArr=[]
  noteFinder(n,scale["ionian"],chord[2])
  console.log(finArr)
  return finArr
}

function Maj(n){
  finArr=[]
  //return n.toUpperCase() + " Major"
  noteFinder(n,scale["ionian"],chord[0])
  console.log(finArr)
  return finArr
}

function Min(n){
  finArr=[]
  noteFinder(n,scale["aeolian"],chord[0])
  console.log(finArr)
  return finArr
}

function AugTri(n){
  finArr=[]
  noteFinder(n,scale["lydian"],chord[1])
  console.log(finArr)
  return finArr
}

function DimTri(n){
  finArr=[]
  noteFinder(n,scale["locrian"],chord[0])
  console.log(finArr)
  return finArr
}

function fiveDyad(n){
  console.log(n.toUpperCase() + " Power Chord")
  noteFinder(n,majorScales[0],chord[3])
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

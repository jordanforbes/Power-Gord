nf = require('./noteFinder')
const noteFinder = nf.noteFinder

const chordDict={
    "pow":["ionian","pow"],
    "maj":["ionian","tri"],
    "min":["aeolian","tri"],
    "augTri":["lydian","augTri"],
    "dimTri":["locrian","tri"],
    "maj7":["ionian","sev"]
}

//why isn't this working
chordBuild = (root,chord)=>{
    let chordType = chordDict[chord]
    // console.log("foo "+chordType)
    let mode = chordType[0]
    // console.log(mode)
    let type = chordType[1]
    // console.log(type)
    let finChord= noteFinder(root,scale[mode],chord[type])
    // console.log(finChord)
    return finChord
}

console.log("chordBuild test",chordBuild("c","maj"))
//chord list
////////////////////////////////////////////////////////////////
const maj7=(root)=>{
    return noteFinder(root,scale["ionian"],chord["sev"])
}
// console.log(maj7("c"))


const min=(root)=>{
    return noteFinder(root,scale["aeolian"],chord["tri"])
}
// console.log(min("g"))


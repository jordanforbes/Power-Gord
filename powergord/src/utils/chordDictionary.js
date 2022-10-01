nf = require('./noteFinder')
const noteFinder = nf.noteFinder

chordDict={
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
    console.log("foo "+chordType)
    let mode = chordDict[chord][0]
    console.log(mode)
    let type = chordDict[chord][1]
    console.log(type)
    let finChord= noteFinder(root,scale[mode],chord[type])
    console.log(finChord)
    return finChord
}

console.log("test",chordBuild("g","min"))
//chord list
////////////////////////////////////////////////////////////////
const maj7=(root)=>{
    return noteFinder(root,scale["ionian"],chord["sev"])
}
console.log(maj7("c"))
// const maj=(root)=>{
//     return noteFinder(root,scale["ionian"],chord["tri"])
// }

const min=(root)=>{
    return noteFinder(root,scale["aeolian"],chord["tri"])
}
console.log(min("g"))
// const augTri=(root)=>{
//     return noteFinder(root,scale["lydian"],chord["augTri"])
// }

// const dimTri=(root)=>{
//     return noteFinder(root,scale["locrian"],chord["tri"])
// }

// const pow=(root)=>{
// //   console.log(n.toUpperCase() + " Power Chord")
//     return noteFinder(root,scale["ionian"],chord["pow"])
// }

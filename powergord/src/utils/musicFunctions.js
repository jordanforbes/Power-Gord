gl = require('./groupList')
sp = require('./scaleParse')

const scale = gl.scale
const chord = gl.chord

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

//testing
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

//goal: triadFind=([c,e,g])=> "c major triad"
    //major: start at root, go over 4, then go over 3
//goal: triadFind=([c,e,g])=>
const { Chord } = require("@tonaljs/tonal");

const notes= ["C", "CD", "D", "DE", "E", "F", "FG", "G", "GA", "A", "AB", "B"]
console.log(Chord.detect(["C","E","G"]))

// const triadFind = (chordArr)=>{

//     console.log(ChordDetect(chordArr))

//     return 'C Major Triad'
// }

// triadFind(["C","E","G"])

// module.exports = {triadFind}

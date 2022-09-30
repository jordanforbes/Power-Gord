//////////////////////////////////////////////////////////////
// returns array with the notes in order starting from the key's root note
//////////////////////////////////////////////////////////////

const nl = require('./noteLists')

let rootSelect=(root="C")=>{
    let chroma = nl.noteDict["notes"] //secondary initial array
    let noteBundle = [chroma,root]
    let rootIndex = chroma.indexOf(root) //find root
    if (chroma[0] == root){ //if key is A, nothing has to be done
        return noteBundle
    }else{
        for(i = 0; i < rootIndex; i++){
            chroma.push(chroma.shift());
        }
    }
    return noteBundle
}

module.exports = {rootSelect}

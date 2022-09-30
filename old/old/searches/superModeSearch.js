const ms = require('./modeSearch')

// const superModeSearch = (mode)

// does either a modeSearch or reverseModeSearch based on whether notes or intervals are inserted
const superModeSearch = (modeInts) => {
    if (areNotes(modeInts) === true){
        // console.log('super reverse modesearch')
        let m = ms.reverseModeSearch(modeInts)
        return m
    } else{
        // console.log("mode "+modeInts)
        let m = ms.modeSearch(modeInts)
        console.log('super modesearch '+m)
        return m
    }
}


//boolean checking if array has intervals or notes
const areNotes = (modeArray) =>{
    return modeArray.every(element =>{
        return typeof element === 'string';
    })
}

module.exports = {areNotes, superModeSearch }

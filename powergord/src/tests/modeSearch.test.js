// const reverseChordSearch = require('../noteLists');
const ms = require('../scripts/searches/modeSearch')
const nl = require('../scripts/noteLists')

//
// const notes = ["A", "A#", "B", "C","C#", "D","D#", "E", "F","F#", "G", "G#"]


test('inserting intervals returns the notes of the aeolian mode in the key of A',
    () => {
        expect(ms.modeSearch(nl.modes["aeolian"])).toEqual(["A","B","C","D","E","F","G"])
    });

test('inserting notes returns the intervals of the aeolian mode',()=>{
    expect(ms.reverseModeSearch(["A","B","C","D","E","F","G"])).toEqual(nl.modes["aeolian"])
})

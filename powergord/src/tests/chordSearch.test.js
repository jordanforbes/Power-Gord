// const reverseChordSearch = require('../noteLists');
const cs = require('../scripts/searches/chordSearch')
const nl = require('../scripts/searches/noteLists')

//
// const notes = ["A", "A#", "B", "C","C#", "D","D#", "E", "F","F#", "G", "G#"]

test('inserting intervals return the notes of a power chord',()=>{
    expect(cs.chordSearch([0,7])).toEqual(['A','E'])
});

test('inserting notes returns the intervals',()=>{
    expect(cs.reverseChordSearch(['A','E'])).toEqual([0,7])
});

// test('inserting intervals returns the notes of the aeolian mode in the key of A',
//     () => {
//         expect(cs.modeSearch(nl.modes["aeolian"])).toEqual(["A","B","C","D","E","F","G"])
//     });

// const reverseChordSearch = require('../noteLists');
const cs = require('../chordSearch')

//
// const notes = ["A", "A#", "B", "C","C#", "D","D#", "E", "F","F#", "G", "G#"]

test('inserting intervals return the notes of a power chord',()=>{
    expect(cs.chordSearch([0,7])).toEqual(['A','E'])
});

test('inserting notes returns the intervals',()=>{
    expect(cs.reverseChordSearch(['A','E'])).toEqual([0,7])
});

const ks = require('../scripts/keySelect')

test('inserting the root note D should return an array with the notes starting from D',()=>{
    expect(ks.keySelect("D")).toEqual(['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'])
});

const ks = require('../scripts/keySelect')

//A
test('inserting the root note A should return an array with the notes starting from A',()=>{
    expect(ks.keySelect("A")).toEqual(['A', 'A#', 'B', 'C', 'C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#'])
});

//A#
test('inserting the root note A# should return an array with the notes starting from A#',()=>{
    expect(ks.keySelect("A#")).toEqual(['A#','B', 'C', 'C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'])
});

//B
test('inserting the root note B should return an array with the notes starting from B',()=>{
    expect(ks.keySelect("B")).toEqual(['B', 'C', 'C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'])
});

//C
test('inserting the root note C should return an array with the notes starting from C',()=>{
    expect(ks.keySelect("C")).toEqual(['C', 'C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#','B'])
});

//C#
test('inserting the root note C should return an array with the notes starting from C#',()=>{
    expect(ks.keySelect("C#")).toEqual(['C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#','B','C'])
});

//D
test('inserting the root note D should return an array with the notes starting from D',()=>{
    expect(ks.keySelect("D")).toEqual(['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'])
});

//D#
test('inserting the root note D should return an array with the notes starting from D#',()=>{
    expect(ks.keySelect("D#")).toEqual(['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#','D'])
});

//E
test('inserting the root note E should return an array with the notes starting from E',()=>{
    expect(ks.keySelect("E")).toEqual(['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#','D','D#'])
});

//F
test('inserting the root note F should return an array with the notes starting from F',()=>{
    expect(ks.keySelect("F")).toEqual(['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#','D','D#','E'])
});

//F#
test('inserting the root note F# should return an array with the notes starting from F#',()=>{
    expect(ks.keySelect("F#")).toEqual(['F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#','D','D#','E','F'])
});

//G
test('inserting the root note G should return an array with the notes starting from G',()=>{
    expect(ks.keySelect("G")).toEqual(['G', 'G#', 'A', 'A#', 'B', 'C', 'C#','D','D#','E','F','F#'])
});

//G#
test('inserting the root note G# should return an array with the notes starting from G#',()=>{
    expect(ks.keySelect("G#")).toEqual(['G#', 'A', 'A#', 'B', 'C', 'C#','D','D#','E','F','F#','G'])
});

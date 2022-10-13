const triadFind = require('../utils/chordLookup').triadFind;

test('take in notes, return chords', ()=>{
    expect(triadFind('C','E','G')).toBe('C Major Triad')
})

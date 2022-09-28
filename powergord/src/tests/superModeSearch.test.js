const sms = require('../scripts/searches/superModeSearch')
const nl = require('../scripts/noteLists')


//areNotes function
test('inserting intervals should return false',()=>{
    expect(sms.areNotes(nl.modes["aeolian"])).toBeFalse
});

test('inserting notes should return true',()=>{
    expect(sms.areNotes(["A","B"])).toBeTrue
});


//superModeSearch function distinguishes between notes and intervals
test('superModeSearch takes in intervals and returns notes',()=>{
    // console.log("sms test "+nl.modes["aeolian"])
    expect(sms.superModeSearch(nl.modes["aeolian"])).toEqual(["A","B","C","D","E","F","G"])
});

// test('superModeSearch takes in notes and returns intervals',()=>{
//     expect(sms.superModeSearch(["A","B","C","D","E","F","G"])).toEqual(nl.modes["aeolian"])
// })

// test('superModeSearch takes in notes and returns true',()=>{
//     expect(sms.superModeSearch(["A","B"])).toBeTrue
// })

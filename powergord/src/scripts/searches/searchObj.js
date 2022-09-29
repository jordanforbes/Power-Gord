ms = require('./modeSearch')
cs = require('./chordSearch')
sms = require('./superModeSearch')
ks = require('./keySelect')
nl = require('./noteLists')

const groupingSearch =(groupArray)=> {
    this.group = groupArray;
    this.mode = sms.superModeSearch(this.group)
}


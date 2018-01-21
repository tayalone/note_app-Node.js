//console.log(`Starting app.js`)

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')



const argv = yargs.argv
const cmd =  argv._[0]


if (cmd === 'add') {
    notes.addNotes(argv.title, argv.body)
}

else if (cmd === 'list') {
    notes.getAll()
}

else if (cmd == 'read') {
    notes.raedNotes(argv.title)
}
else if (cmd == 'remove') {
    notes.removeNotes(argv.title)
} 
else {
    console.log('Wrong Command')
}
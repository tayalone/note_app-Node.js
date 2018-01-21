//console.log(`Starting app.js`)

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')



const argv = yargs.argv
const cmd =  argv._[0]


if (cmd === 'add') {
   const note = notes.addNotes(argv.title, argv.body)
   if (note) {
       console.log ("Note is created")
       console.log("-------------------")
       console.log(`title: ${note.title} body: ${note.body}`)
   } 
   else {
    console.log ("Note is not created")
   }
}

else if (cmd === 'list') {
    notes.getAll()
}

else if (cmd == 'read') {
    notes.raedNotes(argv.title)
}
else if (cmd == 'remove') {
    const result = notes.removeNotes(argv.title)
    const mssg = result ? 'Remove Complete' : "Don't Remove Anything"
    console.log(mssg)
} 
else {
    console.log('Wrong Command')
}
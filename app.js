//console.log(`Starting app.js`)

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const titleOption = {
    description: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOption = {
    description: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
            .command('add', 'Add a new notes', {
                title: titleOption,
                body: bodyOption
            })
            .command('list', 'List of all Notes')
            .command('read', 'Read a note', {
                title: titleOption
            })
            .command('remove', 'Remove a note', {
                title: titleOption
            })
            .help()
            .argv

const cmd =  argv._[0]


if (cmd === 'add') {
   const note = notes.addNotes(argv.title, argv.body)
   if (note) {
       console.log ("Note is created")
       notes.logNote(note)
   } 
   else {
    console.log ("Note is not created")
   }
}

else if (cmd === 'list') {
   const allNotes = notes.getAll()
   allNotes.map( note => notes.logNote(note) )
}

else if (cmd == 'read') {
    const note = notes.raedNotes(argv.title)
    if (note) {
        console.log('I Found It')
         notes.logNote(note[0])
    }else {
        console.log ("can't not Find this title")
    }
}
else if (cmd == 'remove') {
    const result = notes.removeNotes(argv.title)
    const mssg = result ? 'Remove Complete' : "Don't Remove Anything"
    console.log(mssg)
} 
else {
    console.log('Wrong Command')
}
//console.log('Start note.js')
const fs = require('fs')
const _ = require('lodash')

const addNotes = (title, body) => {
    let notes = []
    let note = {
        title,
        body
    }
    try {
        let notesString = fs.readFileSync('notes-data.json')
        let notes = JSON.parse(notesString)
    }
    catch (e) {

    }

    let duplicateNotes =
    
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}
const getAll = () => {
    console.log("Get all Notes")
}
const raedNotes = (title) => {
    console.log(title)
}
const removeNotes = (title) => {
    console.log(title)
}

module.exports = {
    addNotes,
    getAll,
    raedNotes,
    removeNotes
}
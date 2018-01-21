//console.log('Start note.js')
const fs = require('fs')

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json')
        let notes = JSON.parse(notesString)
        return notes
    }
    catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNotes = (title, body) => {
    let notes = fetchNotes()
    let note = {
        title,
        body
    }
    
    let duplicateNotes =notes.filter((note) => note.title === title )
    
    if (duplicateNotes.length === 0){
        notes.push(note)
        saveNotes(notes)
        return note
    } else {

    }
    
}
const getAll = () => {
    return fetchNotes()
}
const raedNotes = (title) => {
    let notes = fetchNotes()
    let filterNotes = notes.filter( note => note.title === title)
    if (filterNotes.length === 1){
        return filterNotes
    }
}
const removeNotes = (title) => {
    let notes = fetchNotes()
    let filterNotes = notes.filter( note => note.title !== title)
    saveNotes(filterNotes)
    return notes.length !== filterNotes.length
}
const logNote = (note) => {
    //console.log(note)
    console.log(`----------------------`)
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}

module.exports = {
    addNotes,
    getAll,
    raedNotes,
    removeNotes,
    logNote
}
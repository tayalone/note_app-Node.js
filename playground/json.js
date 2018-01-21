
const fs = require('fs')

let originalNote = {
    title: 'some title',
    body: 'some body'
}

fs.writeFileSync('notes.json', JSON.stringify(originalNote))

let noteString = fs.readFileSync('notes.json')
let notes = JSON.parse(noteString)
console.log(notes)
console.log(`Starting app.js`)

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

const res = notes.add(1, 2)
console.log(res)

// let user = os.userInfo()
// fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.age}`)

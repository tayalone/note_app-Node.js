console.log(`Starting app.js`)

const fs = require('fs')
const os = require('os')
const _ = require('lodash')

const notes = require('./notes')

console.log(_.isString(true))
console.log(_.isString('Panupong'))

let uniqeArray = _.uniq([1,2,2,3,3])
console.log(uniqeArray)

// let user = os.userInfo()
// fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.age}`)

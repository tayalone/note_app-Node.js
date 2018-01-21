console.log(`Starting app.js`)

const fs = require('fs')
const os = require('os')

let user = os.userInfo()

fs.appendFile('greetings.txt', `Hello ${user.username} !`)

// //Option one
// fs.appendFile('greetings.txt', 'hello world!!',  (err) =>  {
//     if (err) {
//         console.log('Unable to write to file')
//     }
// })

// //Option two
// fs.appendFileSync('greetings.txt', 'Hello world!')
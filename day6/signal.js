const express = require('express')
const fs = require('fs')

const app = express()

let signal = fs.readFileSync('signalInput.txt').toString();

console.log(signal)

let count = 4

for (let i = 0; i < signal.length; i++) {
    let check = [...signal.slice(i, i + 4)]
    if (check.every(char => check.filter(thing => thing === char).length === 1)) {
        console.log(check)
        break
    }
    count++
}

console.log(count)

let message = 14

for (let i = 0; i < signal.length; i++) {
    let check = [...signal.slice(i, i + 14)]
    if (check.every(char => check.filter(thing => thing === char).length === 1)) {
        console.log(check)
        break
    }
    message++
}

console.log(message)

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
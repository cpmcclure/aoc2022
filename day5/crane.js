const express = require('express')
const fs = require('fs')

const app = express()

let array = fs.readFileSync('craneInput.txt').toString().split('\n');
let commands = array.map(line => [+line.split(' ')[1], +line.split(' ')[3] - 1, + line.split(' ')[5] - 1])
console.log(commands)

let crates1 = [['W','D','G','B','H','R','V'], ['J','N','G','C','R','F'], ['L','S','F','H','D','N','J'], ['J','D','S','V'], ['S','H','D','R','Q','W','N','V'], ['P','G','H','C','M'], ['F','J','B','G','L','Z','H','C'], ['S','J','R'], ['L','G','S','R','B','N','V','M']]
let crates2 = [['W','D','G','B','H','R','V'], ['J','N','G','C','R','F'], ['L','S','F','H','D','N','J'], ['J','D','S','V'], ['S','H','D','R','Q','W','N','V'], ['P','G','H','C','M'], ['F','J','B','G','L','Z','H','C'], ['S','J','R'], ['L','G','S','R','B','N','V','M']]

commands.forEach(command => {
    for(let i = 0; i < command[0]; i++){
        crates1[command[2]].push(crates1[command[1]].pop())
    }
})
console.log(crates1.map(crate => crate[crate.length - 1]).join(''))

commands.forEach(command => {
   [amount, start, destination] = command
    let stack = []
    for(let i = 0; i < amount; i++) {
        // crates2[start]
        stack.unshift(crates2[start].pop())
    }
    // console.log(`Stack: ${stack}`)
    crates2[destination].push(...stack)
    // console.log(`Destination crate: ${crates2[destination]}`)
})
// console.log(crates2)
console.log(crates2.map(crate => crate[crate.length - 1]).join(''))

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
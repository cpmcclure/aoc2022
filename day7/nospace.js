const express = require('express')
const fs = require('fs')

const app = express()

let commands = fs.readFileSync('nospaceInput.txt').toString().split('$').map(command => command.split('\n'));

let currentDir = ''
let lastDir = []

const directories = {}

for (let i = 0; i < commands.length; i++){
    let path = ''
    if (commands[i].some(command => command.includes('cd'))) {
        if (commands[i][0].includes('..')) {
            currentDir = lastDir.pop()
        }
        else if (commands[i].every(command => !command.includes('ls'))) {
            lastDir.push(currentDir)
            currentDir = commands[i][0].trim().split(' ')[1]
            path = lastDir.concat(currentDir).join('/')
            // console.log(path)
            // SOOOOO, it looks like there may be directories that have the same name that aren't the same directories
            // To fix this, directory names must include their entire filepath, starting here, but must be updated below.
            directories[path] = directories[path] || 0
            // console.log(directories[path])
        }
    }
    console.log(directories[path])
    if (commands[i].some(command => command.includes('ls'))) {
        commands[i].forEach(command => {
            let arr = command.split(' ')
            if (arr[0] == Number(arr[0])) {
                // console.log(arr[0])
                directories[path] += Number(arr[0])
                // console.log(path)
                lastDir.forEach((dir, i, a) => directories[a.slice(0, i).join('/')] += Number(arr[0]))
            }
        })
    }
    // console.log(dirTotal)
    // if (thisDir <= 100000) dirTotal += thisDir
    // console.log(thisDir, dirTotal)
}
// console.log(directories)
console.log(Object.values(directories).filter(val => val <= 100000).reduce((a, c) => a + c))
// console.log(commands)
// console.log(dirTotal)
// WRONG: 871756
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
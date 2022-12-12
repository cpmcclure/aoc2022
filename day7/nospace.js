const express = require('express')
const fs = require('fs')

const app = express()

let commands = fs.readFileSync('nospaceInput.txt').toString().split('\n');
let numbers = fs.readFileSync('ughInput.txt').toString().split('\n');
let total = commands.map(line => {
    let num = line.split(' ')[0]
    if (num !== 'dir' && num !== '$') {
        console.log(num)
        return +num
    }
}).filter(num => num).reduce((a, c) => +a + +c)

console.log(commands)
let dirPath = []
const directories = {}

for (let i = 0; i < commands.length; i++) {
    if (commands[i].includes('$')) {
        if (commands[i].includes('cd')){
            if (!commands[i].includes('..')) {
                dirPath.push(commands[i].split(' ')[2])
                directories[dirPath.join('/')] = directories[dirPath.join('/')] || 0
            }
            else if (commands[i].split(' ')[2] === '/') {
                dirPath = ['/']
            }
            else dirPath.pop()
        }
    }
    let num = commands[i].split(' ')[0]
    if (num !== 'dir' && num !== '$') {
        dirPath.forEach((path, j, a) => {
            // console.log(`Before: ${directories[a.slice(0, j + 1).join('/')]}`)
            // console.log(`add: ${Number(commands[i].split(' ')[0])}`)
            // console.log(path, a, a.slice(0, j+1))
            directories[a.slice(0, j + 1).join('/')] += Number(commands[i].split(' ')[0])
            // console.log(`After: ${directories[a.slice(0, j + 1).join('/')]}`)
        })
    }
}

// console.log(directories)
console.log(total)
console.log(Object.values(directories).reduce((a, c) => a + c))
// answer: 1182909
const totalSize = 70000000
const updateSize = 30000000
const spaceAvail = totalSize - directories['/']
const mustDelete = updateSize - spaceAvail
// console.log(directories['/'])
// console.log(`Does it exist? ${directories['//vglf/htqzfcc/wrbwbdt/brzwbmc']}`)

console.log(Object.values(directories).filter(dir => dir >= mustDelete).sort((a, b) => a - b))

// console.log(Object.values(directories).sort((a, b) => b - a))

// console.log(numbers.map(line => line.split(' ')[0]).reduce((a, c) => +a + +c))

// for (let i = 0; i < commands.length; i++){
//     let path = ''
//     // console.log(commands[i])
//     if (commands[i][0].includes('cd')) {
//         if (commands[i][0].includes('..')) {
//             currentDir = lastDir.pop()
//             path = lastDir.concat(currentDir).join('/')
//         }
//         else {
//             lastDir.push(currentDir)
//             currentDir = commands[i][0].trim().split(' ')[1]
//             // console.log(currentDir)
//             path = lastDir.concat(currentDir).join('/')
//             // console.log(path)
//             // SOOOOO, it looks like there may be directories that have the same name that aren't the same directories
//             // To fix this, directory names must include their entire filepath, starting here, but must be updated below.
//             directories[path] = 0
//             // console.log(directories[path])
//             // console.log(directories[path])
//         }
//     }
//     if (commands[i].some(command => command.includes('ls'))) {
//         commands[i].forEach(command => {
//             let arr = command.split(' ')
//             if (arr[0] == Number(arr[0])) {
//                 // console.log(`before: num: ${arr[0]}, dir ${directories[path]}`)
//                 directories[path] += Number(arr[0])
//                 // console.log(`after: dir: ${directories[path]}`)
//                 lastDir.forEach((dir, i, a) => directories[a.slice(0, i).join('/')] += Number(arr[0]))
//             }
//         })
//     }
//     // console.log(dirTotal)
//     // if (thisDir <= 100000) dirTotal += thisDir
//     // console.log(thisDir, dirTotal)
// }
// // console.log(directories)
// // console.log(commands)
// // console.log(dirTotal)
// // WRONG: 871756
// 42677139
// 42491321
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
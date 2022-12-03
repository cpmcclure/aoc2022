const express = require('express')
const fs = require('fs')

const app = express()

let array = fs.readFileSync('caloriesInput.txt').toString().split('\n');
console.log(array)
let elves = []
let sum = 0
for(let i = 0; i < array.length; i++){
    if (array[i]) sum += +array[i]
    else {
        elves.push(sum)
        sum = 0
    }
}
console.log(`Answer one is: ${Math.max(...elves)}`)
console.log(`Answer two is ${elves.sort((a, b) => b - a).slice(0, 3).reduce((a, c) => a + c)}`)

  app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
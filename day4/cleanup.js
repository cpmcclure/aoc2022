const express = require('express')
const fs = require('fs')

const app = express()

let array = fs.readFileSync('cleanupInput.txt').toString().split('\n');
let pairs = array.map(line => line.split(',').map(pair => pair.split('-')))
console.log(pairs)

let totalOverlap = 0
pairs.forEach(pair => {
    if (+pair[0][0] <= +pair[1][0] && +pair[0][1] >= +pair[1][1]) totalOverlap++
    else if (+pair[1][0] <= +pair[0][0] && +pair[1][1] >= +pair[0][1]) totalOverlap++
})
console.log(totalOverlap)

let anyOverlap = 0
pairs.forEach(pair => {
    if (+pair[0][0] <= +pair[1][0] && +pair[0][1] >= +pair[1][0]) anyOverlap++
    else if (+pair[1][0] <= +pair[0][0] && +pair[1][1] >= +pair[0][0]) anyOverlap++
})
console.log(anyOverlap)

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
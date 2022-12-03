const express = require('express')
const fs = require('fs')

const app = express()

let array = fs.readFileSync('rucksackInput.txt').toString().split('\n');
console.log(array)

let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

let sum = 0

array.forEach(sack => {
    let firstCompartment = sack.slice(0, sack.length / 2);
    let secondCompartment = sack.slice(sack.length / 2);
    let repeatedItem = [...firstCompartment].filter(item => secondCompartment.includes(item))[0]
    sum += alpha.indexOf(repeatedItem) + 1
})

console.log(sum)

let badgeSum = 0

for (let i = 0; i < array.length; i += 3){
    let badge = [...array[i]].filter(item => array[i + 1].includes(item) && array[i + 2].includes(item))[0]
    badgeSum += alpha.indexOf(badge) + 1
}

console.log(badgeSum)

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
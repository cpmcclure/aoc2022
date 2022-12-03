const express = require('express')
const fs = require('fs')

const app = express()

let array = fs.readFileSync('roshamboInput.txt').toString().split('\n');
console.log(array)

let key = {
    A: {
        X: 4,
        Y: 8,
        Z: 3
    },
    B: {
        X: 1,
        Y: 5,
        Z: 9
    },
    C: {
        X: 7,
        Y: 2,
        Z: 6
    }
}

let correctKey = {
    X: {
        A: 'Z',
        B: 'X',
        C: 'Y'
    },
    Y: {
        A: 'X',
        B: 'Y',
        C: 'Z'
    },
    Z: {
        A: 'Y',
        B: 'Z',
        C: 'X'
    }
}

let sum = 0
array.forEach(round => sum += key[round[0]][round[2]])
console.log(`Answer one is: ${sum}`)
let realSum = 0
array.forEach(round => realSum += key[round[0]][correctKey[round[2]][round[0]]])
console.log(`Answer two is: ${realSum}`)

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
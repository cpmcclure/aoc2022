const express = require('express')
const fs = require('fs')

const app = express()

let testForest = fs.readFileSync('treehouseTest.txt').toString().split('\n');
let largeForest = fs.readFileSync('treehouseInput.txt').toString().split('\n');
console.log (testForest)

function isVisible(forest) {
    let visible = 0
    let finalScore = 0
    for(let i = 0; i < forest.length; i++) {
        let row = forest[i].split('')
        // console.log(row)
        // console.log(`i1:${i}`)
        for(let j = 0; j < row.length; j++) {
            let tree = +row[j]
            let vertRow = []
            for (let k = 0; k < forest.length; k++) {
                vertRow.push(forest[k].split('')[j])
            }
            // console.log(`i2:${i}`)
            // console.log(`Row max: ${Math.max(...row)}`)
            // console.log(j)

            // Visible incrementors
            // if (i === 0 || i === forest.length - 1 || +Math.max(...vertRow.slice(0, i)) < tree || +Math.max(...vertRow.slice(i + 1)) < tree) {
            //     visible++
            // }
            // else if (j === 0 || j === row.length - 1 || +Math.max(...row.slice(0, j)) < tree || +Math.max(...row.slice(j + 1)) < tree) {
            //     visible++
            // }

            //calc scenic store
            let scenicScore = 1
            // console.log(Math.abs(i - [...vertRow.slice(0, i)].findIndex(num => +num <= tree) || 1))
            // console.log(Math.abs(i - [...vertRow.slice(i)].findIndex(num => +num <= tree) || 1))
            // WHY IS THERE ALWAYS AT LEAST ONE ZERO?
            console.log(vertRow)
            let left = 0
            let right = row.length - 1
            let up = 0
            let down = vertRow.length - 1
            for (let l = j - 1; l >= 0; l--) {
                if (row[l] >= row[j]) {
                    left = l
                    break
                }
            }
            for (let m = j + 1; m < row.length; m++) {
                if (row[m] >= row[j]) {
                    right = m
                    break
                }
            }
            for (let n = i - 1; n >= 0; n--) {
                if (vertRow[n] >= vertRow[i]) {
                    up = n
                    break
                }
            }
            for (let o = i + 1; o < vertRow.length; o++) {
                if (vertRow[o] >= vertRow[i]) {
                    down = o
                    break
                }
            }
            console.log(left, right, up, down)
            console.log((j - left), (right - j), (i - up), (down - i))
            scenicScore = (j - left) * (right - j) * (i - up) * (down - i)
            // scenicScore *= row.slice([...row.slice(0, j)].findIndex(num => +num <= tree), j + 1).length - 1
            // scenicScore *= row.slice(j, [...row.slice(j)].findIndex(num => +num <= tree) + 1).length - 1
            // scenicScore *= row.slice([...vertRow.slice(0, i)].findIndex(num => +num <= tree), i + 1).length - 1
            // scenicScore *= row.slice(i, [...vertRow.slice(i)].findIndex(num => +num <= tree) + 1).length - 1
            console.log(`indices:${i}, ${j} scenicScore:${scenicScore}`)
            if (scenicScore >= finalScore) {
                finalScore = scenicScore
            }
        }
    }
    return [visible, finalScore]
}

console.log(isVisible(testForest))
console.log(isVisible(largeForest))

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
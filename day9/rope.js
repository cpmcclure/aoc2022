const express = require('express')
const fs = require('fs')

const app = express()

let commands = fs.readFileSync('nospaceInput.txt').toString().split('\n');

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
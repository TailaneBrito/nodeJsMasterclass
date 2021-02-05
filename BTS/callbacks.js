//reading a file

let fs = require('fs')

// let data = fs.readFileSync('example.txt');

// console.log(data.toString())
// console.log('Program ended')

//the callback system is the error and data functions.
fs.readFile('exampl.txt', (error, data) => {
    if (error) return console.log(error);
    console.log(data.toString())
})

console.log('Program ended')

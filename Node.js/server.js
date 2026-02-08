console.log("Hello World!");

const os = require('os');    //import .mjs and require .js - for import .js need to add "type": "module" in package.json

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

const path = require('path');
console.log(path.dirname(__filename));
console.log(path.parse(__filename));

const math = require('./math');
// a.const {add,sub,mul,div} = require('./math');

console.log(math.add(4,2)); //a.console.log(add(4,2));
console.log(math.sub(4,2));
console.log(math.mul(4,2));
console.log(math.div(4,2));

const fs = require('fs');

//Read File

fs.readFile(path.join(__dirname,'files','start.txt') ,'utf8', (err , data) => {   
    if (err) throw err;
    console.log(data);
});

//Write File

fs.writeFile(path.join(__dirname,'files','second.txt') ,'Process.on uncaughtException is a global error handler in Node.js that catches errors which are not handled anywhere in the application.', (err ) => {   
    if (err) throw err;
    console.log('Write Completed')

    //Append File
    fs.appendFile(path.join(__dirname,'files','second.txt') ,'\n This is newly added line', (err ) => {   
    if (err) throw err;
    console.log('Update Completed')

    //Rename File

    fs.rename(path.join(__dirname,'files','second.txt') ,path.join(__dirname,'files','second2.txt'), (err ) => {   
    if (err) throw err;
    console.log('Rename Completed')
    })
})
});


process.on('uncaughtException',err => {
    console.error(`There was an uncaugth error : ${err}`)
    process.exit(1)
})




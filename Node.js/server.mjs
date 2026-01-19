                    // F I L E  S Y S T E M

import { readFile } from "node:fs";

readFile('./files/start.txtt' ,'utf8', (err , data) => {     //utf8 no need to mention data.toString() in console
    if (err) throw err;
    console.log(data);
});

process.on('uncaughtException',err => {
    console.error(`There was an uncaugth error : ${err}`)
    process.exit(1)
})


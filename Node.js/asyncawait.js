const path = require('path')
const fsPromises = require('fs').promises

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8');
        console.log(data);
    } catch(err){
        console.error(err);
    }
}
fileOps()
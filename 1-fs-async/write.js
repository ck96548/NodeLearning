const fs = require('fs');
fs.writeFile('f1.txt','In Node.js, you can use the fs (File System) module to write data to a file' ,'utf-8',(err)=>{
    if(err){
        console.log(err);
    }
})
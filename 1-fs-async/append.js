const fs = require('fs');

fs.appendFile('record.txt', '\nRahul Kumar' ,'utf-8',(err)=>{
    if(err){
        console.log(err);
    }
})
const fs = require('fs');

fs.mkdir("Newfolder",(err)=>{
      if(err){
        console.log(err);
      }
})
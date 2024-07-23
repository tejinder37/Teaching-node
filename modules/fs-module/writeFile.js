// writeFile is used to write on file .It takes filename ,data, options & callback as its paramters
const { writeFile } = require("node:fs");

const data = "My name is harjeet singh";
writeFile('test.txt', data, (err)=>{
   if(err) console.log(err);
   console.log("Data added successfully!");
})

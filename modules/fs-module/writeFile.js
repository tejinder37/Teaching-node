// writeFile is used to write on file
//.It takes filename ,data, options & callback as its paramters
const { writeFile } = require("node:fs");

let data =
  "I'm learning about writeFile method of node js file sysytem module.";
writeFile("writeTest.txt", data, (err) => {
  if (err) console.log(err);
  console.log("success!");
});

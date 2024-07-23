// rm()=> Asynchronously deletes files & directorires. It takes three args i.e. path, options(recursive, retryDelay , maxRetries)
// (recursive is to set to true when we have to create nested directories,) , callback fn .

const fs = require("node:fs");

fs.rm("lib", {recursive:true},(err) => {
  if (err) {
    console.error("Error removing directory:", err.message);
    return;
  }
  console.log("Directory removed successfully");
});


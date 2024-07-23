// rmdir()=> Asynchronously deletes a directory. It takes three args i.e. path, options(recursive, retryDelay , maxRetries)
// (recursive is to set to true when we have to delete nested directories,) , callback fn .

const { rmdir } = require("node:fs");

rmdir("lib/harjeet",  (err) => {
  if (err) console.log(err);
  console.log("deleted successfully!");
});

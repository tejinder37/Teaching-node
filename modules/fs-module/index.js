const { unlink } = require("node:fs"); // unlink for remove any file from code.

unlink("test.txt", (err) => {
  if (err) console.log(err);
  console.log("File deleted successfully");
});

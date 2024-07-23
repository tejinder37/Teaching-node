const { unlink } = require("node:fs");

unlink("harjeet.txt", (err) => {
  if (err) console.log(err);
  console.log("file unlinked successfully!");
});

// path.join() is used to join path segements & provides us a single path using a
// platform specific path seperator.// Zero length path segments are ignored. if the joined path is zero length string "." will be returned,
// representing the current working directory.

const path = require("node:path");
const { readFile } = require("node:fs");
const filePath = path.join(__dirname, "test.txt");
const basename = path.basename(filePath, ".txt"); // used to get last name of the path(basename)

// when we have to know detailed info about the path then we will use path.parse(). it provides us an object.
console.log(path.parse(filePath));
console.log(basename);
readFile(filePath, { encoding: "utf-8" }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

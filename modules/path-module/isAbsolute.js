// The path.isAbsolute() method determines if path is an absolute. returns true if path is absolute.
const path = require("node:path");
console.log(path.isAbsolute("/test"));
console.log(path.resolve("test"));
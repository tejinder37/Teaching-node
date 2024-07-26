// The path.extname() method returns the extension of the path, from the last occurrence of 
// the . (period) character to end of string in the last portion of the path. If there is no . in the last 
// portion of the path, or if there are no . characters other than the first character of the basename of path 
//  an empty string is returned.

const path = require("path");

console.log(path.extname("hello.text.html")); // last occurance of the .
console.log(path.extname("hello.")); // returns . in this case
console.log(path.extname("hello")); // returns empty string in this case

// const greetingFn = require("./testing.js");
// const greetingFnPath = require.resolve("./testing.js");// resolve for resolving path.
// console.log(greetingFnPath);
// console.log(greetingFn("Harjeet"));
// console.log(greetingFn("Meenaskhi"));

// console.log(require.main == module); // require.main  is used to check whether the file run directly or not.
// // console.log(require.cache);

// console.log(__dirname); // provides us the directory name
// console.log(__filename);

const { sayHello, sayHi } = require("./learningCommonJsModules.js");
sayHello("Chetan");
sayHi("Meenakshi");

const path = require.resolve("./learningCommonJsModules.js");
console.log(path);

console.log(__dirname);
console.log(__filename);

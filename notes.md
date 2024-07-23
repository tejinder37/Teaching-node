                                   **NODE JS**

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! With node js we build servers.

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.It is single threaded & has only one thread thorughout the process.

process => It is the current excection(running) context of our application that has some threads allocated to it.

Thread => Thread is part of the process. Thread is responsible for the executing statements.

diff b/w node js & browser =>

1. Node js does not have browser api's like localstorage & UI api's like dom & window.
2. Node js support two types of imports using (require() & import ) while browser is limited to support only import type.
3. Node js provides various modules that are not included in the browser like to access file system.

node js => It is js runtime that runs js outside the browser or runs js on the server.


// module => It is a block of code (package) & resuable inside the another files.

we have two types of modules es6(ecma script) modules & commonjs modules.

by default node js uses common js modules.


The Module wrapper => Before the module's code is executed node js will wrap it in a function wrapper.
By doing this, Node.js achieves a few things:

It keeps top-level variables (defined with var, const, or let) scoped to the module rather than the global object.
It helps to provide some global-looking variables that are actually specific to the module, such as:
The module and exports objects that the implementor can use to export values from the module.
The convenience variables **filename and **dirname, containing the module's absolute filename and directory path.

\_\_dirname => It returns name of the directory of the current module.This is same as path.dirname().




// File System module (fs) => It enables us interacting with the file system in a modeled way
// on standard POSIX functions.

It is of two types promise based & callback based.
Promise based returns a promise that is fullfilled when asynchronous operation completes.
All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).

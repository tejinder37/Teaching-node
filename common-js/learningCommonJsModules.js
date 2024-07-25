function sayHello(name) {
  console.log(`Hello ${name}`);
}
function sayHi(name) {
  console.log(`Hello ${name}`);
}

module.exports = { sayHello, sayHi }; // default

// module.exports is a property i.e. used to export some data.

// we have two types of exports

// 1. named exports. => we have to use same name for import that we  have used for exporting &
// import inside the {}.
// 2. default exports => we can import it with any name as we want. we don't need {} in this for import.


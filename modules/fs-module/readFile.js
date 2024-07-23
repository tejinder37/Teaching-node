// fs module's readFile method is used to read file from file system. It takes three args that are
//path, options (encoding, flag, signal) & third one is callback fn(err, data).

const { readFile, writeFile, appendFile } = require("node:fs");

const data = "My name is Meenakshi";
writeFile("meenakshi.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Data added successfully!");
});

readFile("meenakshi.txt", { encoding: "utf-8", flag: "a+" }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

appendFile("meenakshi.txt", data + "sdkjfhajksdghjkasgjkasdgjk", (err) => {
  if (err) console.log(err);
  console.log("Data added successfully!");
});
readFile("meenakshi.txt", { encoding: "utf-8", flag: "a+" }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

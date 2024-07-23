// readdir() => It reads the content of a directory.It takes path, options, callback(err, files)
// as its arguments.It has files as a second argument of an array  & files is an array of the names of
// the files in that directory.

const { readdir } = require("node:fs");

readdir("modules", { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  console.log(files);
});

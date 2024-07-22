const { createServer } = require("node:http");

const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  let sayMyName = "Rohit";
  res.end(`Hello node js , This is my first time . ${sayMyName}`);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

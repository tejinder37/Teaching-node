//The createServer() method of http creates a new HTTP server and returns it.

const { createServer } = require("node:http"); 
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200; //statusCode property to 200, to indicate a successful response
  res.setHeader("Content-Type", "text/plain");//We set the Content-Type header: denoting type of response.
  let sayMyName = "Rohit";
  res.end(`Hello node js , This is my first time . ${sayMyName}`);//adding the content as an argument to end():
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

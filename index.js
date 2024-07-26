//The createServer() method of http creates a new HTTP server and returns it.

const { createServer } = require("node:http");
const port = 3000;
const server = createServer(async (req, res) => {
  const request = await fetch("https://dummyjson.com/products");
  const data = await request.json();
  console.log(data);
  // res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

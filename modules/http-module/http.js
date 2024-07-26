const http = require("node:http");
const port = 3000;
const server = http.createServer((req, res) => {
  console.log(req.headers); // shows all headers.
  //   res.writeHead(200, { "Content-Type": "application/json" });  // Sending JSON data
  //   res.end(
  //     JSON.stringify({
  //       data: "Hello world",
  //     })
  //   );

  res.setHeader("name", "rohit"); // used to set response headers
  res.writeHead(200, { "Content-Type": "text/plain" }); // sending plain text
  res.end("Hello world");
});

server.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});


// create server method takes two thing as argument ie. options & requestListner(callback(req,res))
// res.writeHead()  // this method sends a response header to the request. (status , headers) when you
// use both setHeader() & writeHead() values of both will merge.
// res.setHeader() => sets header only
// res.statusCode = 200; // used to set status code.
// "Content-Type": "application/json"  => for transfering json data.
// "Content-Type":"text/plain" => for transering plain text.

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Sirajuddin Khan");
  // res.end("Hello, I am Siraj");
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Listening to the requests on port 4000");
});

// hello-server.js
const http = require("http");
const myName = "sami";

const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response
  res.end(`Hello, I'm ${"sami"}! Saying Hi from my first Node.js server!\n`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log("Press Ctrl+C to stop the server");
});
const http = require("http");
const fs = require("fs");
const path = require("path");

const scriptPath = path.join(__dirname, "cdn-script.js");

if (!fs.existsSync(scriptPath)) {
  fs.copyFileSync(path.join(__dirname, "scripts", "safe.js"), scriptPath);
}

const server = http.createServer((req, res) => {
  if (req.url === "/cdn-script.js") {
    const script = fs.readFileSync(scriptPath, "utf8");

    res.writeHead(200, {
      "Content-Type": "application/javascript",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store"
    });

    res.end(script);
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(4000, () => {
  console.log("Fake CDN running on http://localhost:4000");
  console.log("Open ../app/index.html in your browser.");
});

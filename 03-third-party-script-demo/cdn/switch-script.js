const fs = require("fs");
const path = require("path");

const mode = process.argv[2];

if (!["safe", "scary"].includes(mode)) {
  console.error("Usage: node switch-script.js safe|scary");
  process.exit(1);
}

const source = path.join(__dirname, "scripts", `${mode}.js`);
const target = path.join(__dirname, "cdn-script.js");

fs.copyFileSync(source, target);

console.log(`CDN script switched to: ${mode}`);

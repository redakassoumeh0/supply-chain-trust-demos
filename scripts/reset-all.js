const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const targets = [
  "01-postinstall-demo/victim-app/DEMO_PROOF.txt",
  "01-postinstall-demo/victim-app/YOU_HAVE_BEEN_DEMOED",
  "01-postinstall-demo/victim-app/node_modules",
  "01-postinstall-demo/victim-app/package-lock.json",
  "03-third-party-script-demo/cdn/cdn-script.js"
];

for (const rel of targets) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) continue;

  const stat = fs.statSync(full);
  if (stat.isDirectory()) {
    fs.rmSync(full, { recursive: true, force: true });
  } else {
    fs.rmSync(full, { force: true });
  }
}

fs.copyFileSync(
  path.join(root, "03-third-party-script-demo/cdn/scripts/safe.js"),
  path.join(root, "03-third-party-script-demo/cdn/cdn-script.js")
);

console.log("Reset complete.");

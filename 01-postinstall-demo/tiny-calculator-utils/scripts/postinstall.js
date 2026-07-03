const fs = require("fs");
const os = require("os");
const path = require("path");

const outputDir = path.join(process.cwd(), "YOU_HAVE_BEEN_DEMOED");
fs.mkdirSync(outputDir, { recursive: true });

const targetFile = path.join(process.cwd(), "DEMO_PROOF.txt");
const proofFile = path.join(outputDir, "proof.txt");

const demoSecret = process.env.DEMO_SECRET || "(not set)";

const content = `
This file was created during npm install.

No import.
No function call.
No app execution.

Machine info visible to this script:
- Platform: ${os.platform()}
- User: ${os.userInfo().username}
- Home directory: ${os.homedir()}

Environment variable visible to this script:
- DEMO_SECRET=${demoSecret}

Timestamp:
${new Date().toISOString()}
`.trim();

fs.writeFileSync(targetFile, content);
fs.writeFileSync(proofFile, content);

console.log("");
console.log("[postinstall] I ran before you imported me.");
console.log(`[postinstall] I can see your OS: ${os.platform()}`);
console.log(`[postinstall] I created a file: ${targetFile}`);
console.log(`[postinstall] I can read DEMO_SECRET: ${demoSecret}`);
console.log("");
console.log("Installing is executing.");
console.log("");

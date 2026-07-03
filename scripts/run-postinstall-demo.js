const { spawnSync } = require("child_process");
const path = require("path");

const victimApp = path.join(__dirname, "..", "01-postinstall-demo", "victim-app");

console.log("Running postinstall demo...");
console.log("Working directory:", victimApp);
console.log("");

const result = spawnSync("npm", ["install", "../tiny-calculator-utils"], {
  cwd: victimApp,
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    DEMO_SECRET: process.env.DEMO_SECRET || "fake_token_for_demo_123"
  }
});

process.exit(result.status ?? 0);

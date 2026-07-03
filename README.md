# Supply Chain Trust Demos

Safe, controlled demos for the talk:

## Why Do You Trust This?
### A Frontend Story About npm, Dependencies, and Broken Trust

This repository contains three small demos designed for a frontend security talk about trust, npm, dependencies, and frontend supply chain risks.

The goal is not to teach offensive techniques.  
The goal is to make one idea visible:

> Every dependency is a trust relationship.

---

## Demos

### 01 — postinstall demo

Principle:

> Installing is Executing.

This demo shows that `npm install` can execute code through npm lifecycle scripts before you import or use the package.

What it does safely:

- Prints a message during install.
- Reads a fake demo environment variable.
- Creates a harmless proof file.
- Does not make external network requests.
- Does not delete or modify system files.

---

### 02 — dependency tree demo

Principle:

> Trust is Transitive.

This demo shows that a normal frontend project has more dependencies than the direct dependencies visible in `package.json`.

It uses a small Vite + React project and shows:

- Direct dependencies.
- Full dependency tree size.
- Why hidden/transitive packages exist.
- Examples using `npm explain`.

---

### 03 — third-party script demo

Principle:

> Third-party scripts are dependencies too.

This demo shows that a page can change behavior when a third-party script changes, even when the app HTML itself does not change.

It uses:

- A local HTML page.
- A fake local CDN server.
- A safe script.
- A visually scary but harmless script.

---

## Safety Notes

These demos are intentionally safe.

They do **not**:

- Exfiltrate data.
- Connect to external servers.
- Read real secrets.
- Delete files.
- Modify shell configuration.
- Install malware.
- Persist anything outside the demo folders.

Use only fake demo values such as:

```bash
export DEMO_SECRET="fake_token_for_demo_123"
```

Never run these demos with real production secrets in your shell.

---

## Requirements

Recommended:

- Node.js 18+
- npm 9+
- macOS, Linux, or Windows with PowerShell

For best presentation experience:

- Terminal font size: 18–22px
- Browser zoom: 125%–150%
- Dark terminal theme
- Repo cloned locally before the talk
- All installs prepared before the talk

---

## Setup Before the Talk

From repo root:

```bash
npm install
```

Prepare Demo 2:

```bash
cd 02-dependency-tree-demo/trust-tree-demo
npm install
cd ../..
```

Reset everything before rehearsal or before going on stage:

```bash
npm run reset
```

---

## Demo 1 — postinstall

Go to the victim app:

```bash
cd 01-postinstall-demo/victim-app
```

Set a fake environment variable:

```bash
export DEMO_SECRET="fake_token_for_demo_123"
```

Install the local package:

```bash
npm install ../tiny-calculator-utils
```

Show the proof:

```bash
cat DEMO_PROOF.txt
```

Windows PowerShell:

```powershell
cd 01-postinstall-demo/victim-app
$env:DEMO_SECRET="fake_token_for_demo_123"
npm install ../tiny-calculator-utils
Get-Content DEMO_PROOF.txt
```

Expected message:

```text
[postinstall] I ran before you imported me.
Installing is executing.
```

Reset:

```bash
cd ../..
npm run reset
```

---

## Demo 2 — Dependency Tree

Go to the demo app:

```bash
cd 02-dependency-tree-demo/trust-tree-demo
```

Show direct dependencies:

```bash
npm ls --depth=0
```

Show approximate dependency tree size:

```bash
npm ls --all | wc -l
```

Windows PowerShell:

```powershell
npm ls --all | Measure-Object -Line
```

Explain why a transitive dependency exists:

```bash
npm explain esbuild
npm explain rc-util
```

Backup output is available here:

```text
02-dependency-tree-demo/backup-output/sample-output.txt
```

---

## Demo 3 — Third-party Script

Start the fake CDN:

```bash
cd 03-third-party-script-demo/cdn
node server.js
```

Open this file in the browser:

```text
03-third-party-script-demo/app/index.html
```

In another terminal, switch the CDN script to the visually scary version:

```bash
node 03-third-party-script-demo/cdn/switch-script.js scary
```

Refresh the browser.

Switch back to the safe version:

```bash
node 03-third-party-script-demo/cdn/switch-script.js safe
```

---

## Reset All Demos

From repo root:

```bash
npm run reset
```

This removes generated demo files and restores the third-party script demo to the safe version.

---

## Troubleshooting

### `npm explain rc-util` does not show anything

Run:

```bash
npm install
```

inside:

```text
02-dependency-tree-demo/trust-tree-demo
```

If it still does not show, use another transitive package from:

```bash
npm ls --all
```

### `wc -l` does not work on Windows

Use:

```powershell
npm ls --all | Measure-Object -Line
```

### Browser does not update Demo 3

The fake CDN sends `Cache-Control: no-store`, but browsers can still be weird during live demos.

Try:

- Hard refresh.
- Open DevTools and disable cache.
- Restart `node server.js`.
- Use an incognito window.

### Demo 1 already installed and does not rerun

Reset first:

```bash
npm run reset
```

Then rerun the install.

---

## Talk Principles

Each demo maps to one principle:

```text
Demo 1 → Installing is Executing
Demo 2 → Trust is Transitive
Demo 3 → Third-party scripts are dependencies too
```

The final message of the talk:

> Trust is not the problem. Blind trust is.

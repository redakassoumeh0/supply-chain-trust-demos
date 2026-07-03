# Talk Commands

## Demo 1 — postinstall

```bash
cd 01-postinstall-demo/victim-app
export DEMO_SECRET="fake_token_for_demo_123"
npm install ../tiny-calculator-utils
cat DEMO_PROOF.txt
```

Reset:

```bash
cd ../..
npm run reset
```

## Demo 2 — dependency tree

Prepare before the talk:

```bash
cd 02-dependency-tree-demo/trust-tree-demo
npm install
```

Run during the talk:

```bash
npm ls --depth=0
npm ls --all | wc -l
npm explain esbuild
npm explain rc-util
```

## Demo 3 — third-party script

Terminal 1:

```bash
cd 03-third-party-script-demo/cdn
node server.js
```

Open:

```text
03-third-party-script-demo/app/index.html
```

Terminal 2:

```bash
node 03-third-party-script-demo/cdn/switch-script.js scary
```

Refresh browser.

Switch back:

```bash
node 03-third-party-script-demo/cdn/switch-script.js safe
```

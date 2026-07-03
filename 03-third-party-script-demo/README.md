# Demo 3 — Third-party Script

Principle:

> Third-party scripts are dependencies too.

## Run

Terminal 1:

```bash
cd 03-third-party-script-demo/cdn
node server.js
```

Then open:

```text
03-third-party-script-demo/app/index.html
```

## Switch script behavior

In another terminal from repo root:

```bash
node 03-third-party-script-demo/cdn/switch-script.js scary
```

Refresh the browser.

To switch back:

```bash
node 03-third-party-script-demo/cdn/switch-script.js safe
```

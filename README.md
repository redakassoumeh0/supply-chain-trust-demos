# Supply Chain Trust Demos

Safe, controlled demos for the talk:

**Why Do You Trust This?**

## Demos

1. `01-postinstall-demo`  
   Shows that `npm install` can execute code through lifecycle scripts.

2. `02-dependency-tree-demo`  
   Shows that a normal frontend project has a dependency tree much larger than direct dependencies.

3. `03-third-party-script-demo`  
   Shows that a third-party script can change your page without changing your app code.

## Safety

These demos are intentionally safe:

- No external network exfiltration.
- No deletion of files.
- No reading real secrets.
- No shell modification.
- No malware behavior.

Use only fake demo values such as:

```bash
export DEMO_SECRET="fake_token_for_demo_123"
```

## Requirements

- Node.js 18+
- npm 9+

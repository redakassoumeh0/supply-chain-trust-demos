# Demo 1 — postinstall

Principle:

> Installing is Executing.

## Run

```bash
cd 01-postinstall-demo/victim-app
export DEMO_SECRET="fake_token_for_demo_123"
npm install ../tiny-calculator-utils
cat DEMO_PROOF.txt
```

On Windows PowerShell:

```powershell
cd 01-postinstall-demo/victim-app
$env:DEMO_SECRET="fake_token_for_demo_123"
npm install ../tiny-calculator-utils
Get-Content DEMO_PROOF.txt
```

## Reset

From repo root:

```bash
npm run reset
```

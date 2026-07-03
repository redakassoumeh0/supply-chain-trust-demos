# Demo 2 — Dependency Tree

Principle:

> Trust is Transitive.

This demo uses a normal Vite + React project and a UI package to show direct vs transitive dependencies.

## Prepare before the talk

```bash
cd 02-dependency-tree-demo/trust-tree-demo
npm install
npm install antd
```

## Run during the talk

```bash
cd 02-dependency-tree-demo/trust-tree-demo

npm ls --depth=0

npm ls --all | wc -l

npm explain esbuild

npm explain rc-util
```

On Windows PowerShell:

```powershell
npm ls --all | Measure-Object -Line
```

## Backup

If the live demo fails, use:

```text
02-dependency-tree-demo/backup-output/sample-output.txt
```

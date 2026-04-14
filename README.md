# QryptAir

> **Offline blockchain voucher signing PWA** — sign transactions with zero internet. MetaMask signs locally on your device; share the QR code for anyone online to broadcast.

Live: https://qryptumorg.github.io/qryptair

---

## Features

- Sign ERC-20 transfers offline with MetaMask
- QR voucher codes redeemable by anyone with internet
- Shared origin with [Qryptum dashboard](https://qryptumorg.github.io/app) — localStorage synced automatically
- Installable PWA (iOS Safari · Android Chrome · Desktop)
- Same Railway API + Neon PostgreSQL backend

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19 + Vite 6 + wagmi v2 |
| Wallet | Reown AppKit (WalletConnect v3) |
| Chain | EVM (Ethereum, Polygon, BSC, Arbitrum) |
| API | Railway (Express + Neon PostgreSQL) |
| Hosting | GitHub Pages (`/qryptair/`) |

## Development

```bash
pnpm install
pnpm dev
```

Requires `VITE_API_BASE=https://qryptum-api.up.railway.app` (already set in CI workflow).

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-white.svg)](LICENSE)

Copyright (c) 2026 [wei-zuan](https://github.com/wei-zuan). See [LICENSE](LICENSE) for full terms.
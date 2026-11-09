# Yaseeni WiFi Manager

A starter project for managing authorized Wi-Fi users across multiple rooms.

## Architecture
- Frontend: static HTML/CSS/JavaScript (Cloudflare Pages)
- API: Cloudflare Worker
- Database: Cloudflare D1
- Enforcement: a compatible network gateway / captive-portal system (for example MikroTik HotSpot with RADIUS or a supported controller)

> Important: This repository's web portal and database do **not** block network traffic by themselves. Real access control must be enforced by the gateway. Existing TP-Link Archer access points in AP mode do not automatically become captive-portal controllers.

## Current status
Starter UI and database schema only. No live authentication, payment processing, gateway integration, or production security is enabled yet.

## Before deployment
1. Keep this repository **private** if it will contain operational configuration or private project details. It is currently public.
2. Never commit passwords, API tokens, router credentials, RADIUS secrets, or Cloudflare secrets.
3. Confirm your Etisalat plan and applicable UAE requirements permit the intended sharing arrangement.
4. Identify the exact Etisalat router model, TP-Link models, and gateway before changing the network.
5. Deploy the frontend to Cloudflare Pages and the API to Workers only after configuring secrets and gateway-side enforcement.

## Planned features
- Admin-managed users and room assignment
- Active / expired / disabled account status
- Monthly expiry dates
- Audit log
- Gateway integration for actual allow/deny decisions

## Local preview
Open `index.html` in a browser. The sample data is demonstration-only.

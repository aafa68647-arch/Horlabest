# Horlabest website starter

A responsive front-end starter for a virtual-number marketplace.

## Run locally
1. Install Node.js.
2. In this folder run `npm install`.
3. Run `npm start`.
4. Open http://localhost:3000

## Deploy on Render
- Create a GitHub repository and upload the contents of this folder (not the ZIP itself).
- In Render, create a Web Service and connect the repository.
- Build command: `npm install`
- Start command: `npm start`

## Important production work still required
This is a prototype, not a live money-handling service. It has no production user authentication, database, payment gateway, number-provider integration, verified profit ledger, or bank payout integration. Demo price and withdrawal history are stored only in this browser. The API routes for deposits, purchases and withdrawals are disabled (HTTP 501). Do not accept customer funds until secure integrations, provider resale permissions, compliance checks, and end-to-end testing are complete.

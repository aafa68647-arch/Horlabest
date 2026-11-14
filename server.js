const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (_req, res) => res.json({ ok: true, app: 'Horlabest' }));
// Payments, number-provider purchases, authentication and withdrawals are intentionally
// disabled until secure production integrations and a database are configured.
app.post('/api/deposits', (_req, res) => res.status(501).json({ error: 'Payment integration not configured.' }));
app.post('/api/purchases', (_req, res) => res.status(501).json({ error: 'Number provider integration not configured.' }));
app.post('/api/admin/withdrawals', (_req, res) => res.status(501).json({ error: 'Secure payout integration not configured.' }));
app.listen(PORT, () => console.log(`Horlabest running on port ${PORT}`));

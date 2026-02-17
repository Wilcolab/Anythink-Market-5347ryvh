const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;
const HOST = '0.0.0.0';

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

const server = app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

server.on('error', (err) => {
    console.error(`Failed to start server on port ${PORT}:`, err.message || err);
    process.exit(1);
});
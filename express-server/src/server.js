const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
    console.error(`Failed to start server on port ${PORT}:`, err.message || err);
    process.exit(1);
});
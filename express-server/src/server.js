const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
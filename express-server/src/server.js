const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Express server is running' });
});

app.get('/tasks', (req, res) => {
    const tasks = [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false },
    ];
    res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
    res.status(201).json({ message: 'Task created successfully' });
});

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
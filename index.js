const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (parse JSON)
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example API route
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ]);
});

// POST example
app.post('/api/users', (req, res) => {
    const user = req.body;
    res.json({
        message: 'User created',
        data: user
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
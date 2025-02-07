const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});
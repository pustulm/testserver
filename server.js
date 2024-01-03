const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, '')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
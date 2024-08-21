const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const problemsRoutes = require('./routes/problems');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Static file serving
app.use(express.static(path.join(__dirname, '../frontend')));

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Problem Finder and Solver API!');
});

// Problems API route
app.use('/api/problems', problemsRoutes);

// Start the server
mongoose.connect('mongodb://localhost/problem-finder-solver')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Failed to connect to MongoDB', err));

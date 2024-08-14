const express = require('express');
const router = express.Router();

//Home route
router.get('/', (req, res) => {
    res.send('Welcome to LHI AFIENYA CITY, STATE OF THE FLOCK Home')
});

// Admin Dashboard route (example)
router.get('/admin', (req, res) => {
    res.send('Admin Dashboard');
});

module.exports = router;
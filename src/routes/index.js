const express = require('express');
const router = express.Router();

//Home route
router.get('/', (req, res) => {
    res.render('index')
});

// Admin Dashboard route (example)
router.get('/admin', (req, res) => {
    res.send('Admin Dashboard');
});

module.exports = router;
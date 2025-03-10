const express = require('express');
const router = express.Router();
const session = require('express-session');

// Ensure session middleware is applied
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Handle form submission from details.html (store Full Name & Address)
router.post('/destination', (req, res) => {
    req.session.enterFullName = req.body.enterFullName;
    req.session.enterAddress = req.body['enter-address']; // Ensure correct input name

    res.redirect('/destination'); // Redirect to the destination page
});

// Handle GET request for destination.html (retrieve stored session data)
router.get('/destination', (req, res) => {
    res.render('destination', {
        enterFullName: req.session.enterFullName,
        enterAddress: req.session.enterAddress
    });
});

// Handle form submission from destination.html (store Destination choice)
router.post('/check-answers', (req, res) => {
    req.session.destination = req.body.destination; // Store destination in session
    res.redirect('/check-answers'); // Redirect to check-answers page
});

// Handle GET request for check-answers.html (retrieve and pass stored session data)
router.get('/check-answers', (req, res) => {
    res.render('check-answers', {
        data: {
            'enter-full-name': req.session.enterFullName || '',
            'enter-address': req.session.enterAddress || '',
            'destination': req.session.destination || ''
        }
    });
});

module.exports = router;

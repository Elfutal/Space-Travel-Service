const express = require('express');
const router = express.Router();
const govukPrototypeKit = require('govuk-prototype-kit');

// Route for details page
router.post('/destination', (req, res) => {
    const { enterFullName, enterAddress } = req.body;
    res.render('destination', {
        enterFullName,
        enterAddress
    });
});

// Route for check-answers page
router.post('/check-answers', (req, res) => {
    const { enterFullName, enterAddress, destination } = req.body;
    res.render('check-answers', {
        enterFullName,
        enterAddress,
        destination
    });
});

module.exports = router;

// add path
const path = require('path');

// add router
const router = require('express').Router();

// root route
router.get( '/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// notes route
router.get( '/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// wildcard route
router.get( '*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// export
module.exports = router;
// add router
const router = require('express').Router();

// reference to database
const db = require('../../db/db.json')

// get route
router.get('/', (req, res) => {
    let results = db
    console.log( results)
    res.json(results)
});

// export
module.exports = router;
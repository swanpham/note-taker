const fs = require ('fs')
const path = require ('path')
const uniqid = require( 'uniqid' )

// add router
const router = require('express').Router();

// reference to database
const db = require('../../db/db.json')

// get route
router.get('/', (req, res) => {
    let results = db
    
    res.json(results)
});

router.post ('/', (req, res) => {
    const item = req.body 
    console.log(item);
    item.id = uniqid()
    db.push (item)
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db)
    )
    res.json(db)
});

router.delete ('/*', (req, res) => { 
    const item = Object.values(req.params)[0]
    db.splice (db.findIndex(note => note.id === item), 1)
    console.log(item)   
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db)
    )
    res.json(db)
});

// export
module.exports = router;
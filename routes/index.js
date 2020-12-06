var express = require('express');
var router = express.Router();
const db = require('../db/database')

/* GET home page. */
router.get('/', async function(req, res, next) {
    const result = await db.getAllCountry();
    console.log(result);
    res.render('index', { resultData: result.rows });
});

module.exports = router;
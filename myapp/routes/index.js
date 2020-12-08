var express = require('express');
var router = express.Router();
const db = require('../db/database')

/* GET home page. */
router.get('/', async function(req, res, next) {
    const result = await db.getAllCountry();
    console.log(result);
    res.render('index', { resultData: result.rows });
});
router.get('/map', async function(req, res, next) {
    const result = await db.getMap();
    console.log(result);
    res.render('map', { resultData: result.rows });
});
router.get('/confirm', async function(req, res, next) {
    const result = await db.getconf();
    console.log(result);
    res.render('confirm', { resultData: result.rows });
});
router.get('/death', async function(req, res, next) {
    const result = await db.getdead();
    console.log(result);
    res.render('death', { resultData: result.rows });
});
router.get('/recover', async function(req, res, next) {
    const result = await db.getrecover();
    console.log(result);
    res.render('recover', { resultData: result.rows });
});
router.get('/thailand', async function(req, res, next) {
    const result = await db.getthai();
    console.log(result);
    res.render('thailand', { resultData: result.rows });
});
router.get('/world', async function(req, res, next) {
    const result = await db.getworld();
    console.log(result);
    res.render('world', { resultData: result.rows });
});
router.get('/table', async function(req, res, next) {
    const result = await db.gettable();
    console.log(result);
    res.render('table', { resultData: result.rows });
});




module.exports = router;
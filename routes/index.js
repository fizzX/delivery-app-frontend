const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../app/models/config');

router.get('/', (req, res, next) => {
    return res.render('index');
});

router.get('/item', (req, res, next) => {
	return res.render('createItem');
})

router.post('/register', (req, res, next) => {
	request.post({
		url: config.apiUrl + '/users', 
		form: req.body
	}).pipe(res)
})

router.post('/createItem', (req, res, next) => {
	request.post({
		url: config.apiUrl + '/items', 
		form: req.body
	}).pipe(res)
})


module.exports = router;

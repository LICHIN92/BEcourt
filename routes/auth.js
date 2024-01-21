var express = require('express');
const { dosignup, dologin } = require('../controller/authcontroller');
var router = express.Router();

router.post('/dosignup', dosignup);
router.post('/dologin', dologin);

module.exports = router;

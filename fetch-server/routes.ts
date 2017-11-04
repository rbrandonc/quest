var express = require('express');
var stat = require('./routes/status.js');
var user = require('./routes/user.js');

var router = express.Router();

//add endpoints here
router.route('/status').get(stat.getStatus);
router.route('/user').get(user.getUser);
// router.route('/user').get(user.getUser);

module.exports = router;

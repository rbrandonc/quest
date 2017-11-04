var express = require('express');
var stat = require('./routes/status.js');
var user = require('./routes/user.js');

var router = express.Router();

//add endpoints here
router.route('/status').get(stat.getStatus);
router.route('/user').get(user.getUser);
router.route('/user').post(user.updateUser);
router.route('/user').put(user.createUser);
router.route('/user').delete(user.deleteUser);
// router.route('/user').get(user.getUser);

module.exports = router;

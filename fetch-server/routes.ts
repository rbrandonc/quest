var express = require('express');
var stat = require('./routes/status.js');
var user = require('./routes/user.js');
var request = require('./routes/request.js');

var router = express.Router();

//add endpoints here
router.route('/status').get(stat.getStatus);
router.route('/user').get(user.getUser);
router.route('/user').post(user.updateUser);
router.route('/user').put(user.createUser);
router.route('/user').delete(user.deleteUser);
router.route('/user/login').post(user.login);
router.route('/user/signup').put(user.signup);
router.route('/user/addReview').post(user.addReview);
router.route('/request').get(request.getRequest);
router.route('/request').post(request.addRequest);
router.route('/request').put(request.createRequest);
router.route('/request').delete(request.deleteRequest);
router.route('/request/fulfill').post(request.fulfill);
router.route('/request/getActive').get(request.getActive);
// router.route('/user').get(user.getUser);

module.exports = router;

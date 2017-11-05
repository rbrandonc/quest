var express = require('express');
var stat = require('./routes/status.js');
var user = require('./routes/user.js');
var quest = require('./routes/quest.js');
var chat = require('./routes/chat.js');
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
router.route('/quest').get(quest.getQuest);
router.route('/quest').post(quest.addQuest);
router.route('/quest').put(quest.createQuest);
router.route('/quest').delete(quest.deleteQuest);
router.route('/quest/fulfill').post(quest.fulfill);
router.route('/quest/getActive').get(quest.getActive);
router.route('/chat').get(chat.getChat);
router.route('/chat').post(chat.postChat);
router.route('/chat').put(chat.createChat);
router.route('/chat').delete(chat.deleteChat);
module.exports = router;
//# sourceMappingURL=routes.js.map
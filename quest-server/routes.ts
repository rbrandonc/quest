var express = require('express');
var stat = require('./routes/status.js');
var user = require('./routes/user.js');
var quest = require('./routes/quest.js');
var chat = require('./routes/chat.js');
var transaction = require('./routes/transaction.js');

var router = express.Router();

//add endpoints here
router.route('/status').get(stat.getStatus);
router.route('/user').get(user.getUser);
router.route('/user').post(user.updateUser);
router.route('/user').put(user.createUser);
router.route('/user').delete(user.deleteUser);
router.route('/user/addReview').put(user.addReview);
router.route('/quest').get(quest.getQuest);
router.route('/quest').post(quest.editQuest);
router.route('/quest').put(quest.createQuest);
router.route('/quest').delete(quest.deleteQuest);
router.route('/quest/getQuests').get(quest.getQuests);
router.route('/chat').get(chat.getChat);
router.route('/chat').put(chat.createChat);
router.route('/transaction').get(transaction.getTransactions);
router.route('/transaction/payTo').post(transaction.payTo);
router.route('/transaction/takeFrom').post(transaction.takeFrom);

module.exports = router;

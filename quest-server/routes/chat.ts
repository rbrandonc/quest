var db = require('../db');

module.exports = {
  getChat: (req, res) => {
    var query = "SELECT * FROM chats WHERE chats.qid=?";
    db.query (res, query, [req.body.qid]);
  },

  //PUT API
  createChat: (req, res) => {
    var query = "INSERT INTO users (sender,message,qid) VALUES (?,?,?)";
    db.query (res, query, [req.body.sender, req.body.message, req.body.qid]);
  }
}

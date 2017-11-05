var db = require('../db');

module.exports = {
  getTransactions: (req, res) => {
    var query = "SELECT * FROM transactions WHERE qid=?";
    db.query (res, query, [req.body.qid]);
  },

  payTo: (req, res) => {
    //CODE
  },

  takeFrom: (req, res) => {
    //CODE
  }

}

var db = require('../db');

module.exports = {
  getRequest: (req, res) => {
    var query = "select * from user";
    db.query (res, query);
  },

  //POST API
  addRequest: (req, res) => {
    var query = "INSERT INTO user (userid,text,category,cost,location,expiration) VALUES (req.userid.Name,req.body.text,req.body.category,req.body.cost,req.body.location,req.body.expiration)";
    db.query (res, query);
  },

  //PUT API
  createRequest: (req, res) => {
    var query = "select * from user";
    db.query (res, query);
  },

  //DELETE API
  deleteRequest: (req, res) => {
  var query = "DELETE FROM user WHERE Id=" + req.params.id;
  db.query (res, query);
  },

  fulfill: (req, res) => {
    //CODE
    res.send("Fulfilled!");
  },

  getActive: (req, res) => {
    //CODE
    res.send("Got active!");
  }
}

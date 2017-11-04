var db = require('../db');

module.exports = {
  getQuest: (req, res) => {
    var query = "select * from quests";
    db.query (res, query);
  },

  //POST API
  addQuest: (req, res) => {
    var query = "INSERT INTO quests (user_id,category,description,cost,long,lat,expiration) VALUES (req.body.user_id,req.body.category,req.body.description,req.body.cost,req.body.long,req.body.lat,req.body.expiration)";
    db.query (res, query);
  },

  //PUT API
  createQuest: (req, res) => {
    var query = "select * from quests";
    db.query (res, query);
  },

  //DELETE API
  deleteQuest: (req, res) => {
  var query = "DELETE FROM quests WHERE Id=" + req.params.id;
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

var db = require('../db');

module.exports = {
  getStatus: function(req , res){
    console.log('/status')
    db.query("SELECT * FROM users");
  }
}

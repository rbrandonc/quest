var db = require('../db');

module.exports = {
  getStatus: function(req , res){
    console.log('/status')
    res.send('Server Online!');
  }
}
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hacknc2017',
  database : 'f'
});


module.exports = {
  //Function to connect to database and execute query
  query: function(res, query){
    // connection.connect();

    connection.query(query, function (error, results, fields) {
      if (error) throw error;

      if(res.send) res.send(results);
    });

    // connection.end();
  }
}

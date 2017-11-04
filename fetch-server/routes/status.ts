module.exports = {
  getStatus: function(req , res){
    console.log('/status')
    var query = "select one";
    executeQuery(res, query);
    res.send('Server Online!');
  }
}

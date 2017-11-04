module.exports = {
  getUser: app.get("/api/user ", function(req , res){
    var query = "select * from [user]";
    executeQuery (res, query);
  }),

  //POST API
   updateUser: app.post("/api/user ", function(req , res){
    var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password)";
    executeQuery (res, query);
  }),

  //PUT API
   createUser: app.put("/api/user/:id", function(req , res){
    var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    executeQuery (res, query);
  }),

  // DELETE API
   deleteUser: app.delete("/api/user /:id", function(req , res){
    var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
    executeQuery (res, query);
  }),
}

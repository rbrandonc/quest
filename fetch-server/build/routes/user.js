var db = require('../db');
module.exports = {
    getUser: (req, res) => {
        var query = "select * from user";
        db.query(res, query);
    },
    //POST API
    updateUser: (req, res) => {
        var query = "INSERT INTO user (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password)";
        db.query(res, query);
    },
    //PUT API
    createUser: (req, res) => {
        var query = "select * from user";
        db.query(res, query);
    },
    //DELETE API
    deleteUser: (req, res) => {
        var query = "DELETE FROM user WHERE Id=" + req.params.id;
        db.query(res, query);
    },
    login: (req, res) => {
        //CODE
        res.send("Logged in!");
    },
    signup: (req, res) => {
        //CODE
        res.send("Signed up!");
    },
    addReview: (req, res) => {
        //CODE
        res.send("Added review!");
    }
};
//# sourceMappingURL=user.js.map
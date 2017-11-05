var db = require('../db');
module.exports = {
    getRequest: (req, res) => {
        var query = "select * from requests";
        db.query(res, query);
    },
    //POST API
    addRequest: (req, res) => {
        var query = "INSERT INTO requests (userid,description,category,cost,location,expiration) VALUES (req.userid.Name,req.body.description,req.body.category,req.body.cost,req.body.location,req.body.expiration)";
        db.query(res, query);
    },
    //PUT API
    createRequest: (req, res) => {
        var query = "select * from requests";
        db.query(res, query);
    },
    //DELETE API
    deleteRequest: (req, res) => {
        var query = "DELETE FROM requests WHERE Id=" + req.params.id;
        db.query(res, query);
    },
    fulfill: (req, res) => {
        //CODE
        res.send("Fulfilled!");
    },
    getActive: (req, res) => {
        //CODE
        res.send("Got active!");
    }
};
//# sourceMappingURL=request.js.map
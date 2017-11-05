var db = require('../db');
module.exports = {
    getUser: (req, res) => {
        var query = "SELECT * FROM users LEFT JOIN reviews WHERE users.id=?";
        db.query(res, query, [req.body.uid]);
    },
    //POST API
    updateUser: (req, res) => {
        var query = "UPDATE users SET lname=?,fname=?,email=?,rating=?,last4=?,hash=? WHERE uid=?";
        db.query(res, query, [req.body.lname, req.body.fname, req.body.email, req.body.rating, req.body.last4, req.body.hash, req.body.uid]);
    },
    //PUT API
    createUser: (req, res) => {
        var query = "INSERT INTO users (lname,fname,email,rating,last4,hash) VALUES (?,?,?,?,?,?)";
        db.query(res, query, [req.body.lname, req.body.fname, req.body.email, req.body.rating, req.body.last4, req.body.hash]);
    },
    //DELETE API
    deleteUser: (req, res) => {
        var query = "DELETE FROM users WHERE id=?";
        db.query(res, query, [req.body.uid]);
    },
    addReview: (req, res) => {
        var query = "INSERT INTO reviews (uid,review) VALUES (?,?)";
        db.query(res, query, [req.body.uid, req.body.review]);
    }
};
//# sourceMappingURL=user.js.map
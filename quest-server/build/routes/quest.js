var db = require('../db');
module.exports = {
    getQuest: (req, res) => {
        var query = "SELECT * FROM quests WHERE quests.id=?";
        db.query(res, query, [req.body.id]);
    },
    //POST API
    editQuest: (req, res) => {
        var query = "UPDATE quests SET uid=?,category=?,description=?,cost=?,longitude=?,latitude=?,expiration=? WHERE quests.id=?";
        db.query(res, query, [req.body.uid, req.body.category, req.body.description, req.body.cost, req.body.longitude, req.body.latitude, req.body.expiration, req.body.id]);
    },
    //PUT API
    createQuest: (req, res) => {
        var query = "INSERT INTO quests (uid,category,description,cost,longitude,latitude,expiration) VALUES (?,?,?,?,?,?,?)";
        db.query(res, query, [req.body.uid, req.body.category, req.body.description, req.body.cost, req.body.longitude, req.body.latitude, req.body.expiration]);
    },
    //DELETE API
    deleteQuest: (req, res) => {
        var query = "DELETE FROM quests WHERE quests.id=?";
        db.query(res, query, [req.body.id]);
    },
    getQuests: (req, res) => {
        var query = "SELECT * FROM quests WHERE active=true";
        db.query(res, query);
    },
};
//# sourceMappingURL=quest.js.map
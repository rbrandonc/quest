var db = require('../db');
module.exports = {
    getStatus: function (req, res) {
        console.log('/status');
        db.query(res, "SELECT * FROM users");
    }
};
//# sourceMappingURL=status.js.map
var db = require('../db');
module.exports = {
    getStatus: function (req, res) {
        console.log('/status');
        var query = "select 1;";
        db.query(res, query);
        //res.send('Server Online!');
    }
};
//# sourceMappingURL=status.js.map
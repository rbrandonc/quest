var db = require('../db');
module.exports = {
    getStatus: function (req, res) {
        console.log('/status');
<<<<<<< HEAD
        res.send('Server Online!');
=======
        var query = "select 1;";
        db.query(res, query);
        //res.send('Server Online!');
>>>>>>> 17b75e3637594c4f339956b4adf911b0ab2becd8
    }
};
//# sourceMappingURL=status.js.map
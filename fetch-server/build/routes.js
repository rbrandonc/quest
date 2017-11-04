var express = require('express');
var stat = require('./routes/status.js');
var user = require('./routes/user.js');
var router = express.Router();
router.route('/status').get(stat.getStatus);
module.exports = router;
//# sourceMappingURL=routes.js.map
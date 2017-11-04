var db = require('./build/db');
require('require-sql');

var q = require('./schema.sql');
var res = "";
db.query(res, q);

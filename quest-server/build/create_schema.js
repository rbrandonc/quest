var db = require('./build/db');
require('require-sql');
var queries = require('./schema.sql');
var res = '';
for (let query of queries.split(';')) {
    db.query(res, query);
    console.log(query);
}
//# sourceMappingURL=create_schema.js.map
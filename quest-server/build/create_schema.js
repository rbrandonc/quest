var db = require('./build/db');
require('require-sql');
var queries = require('./schema.sql');
var res = '';
var time = 0;
for (let query of queries.split(';')) {
    if (query.length > 4) {
        setTimeout(() => { db.query(() => { console.log("done"); }, query); }, time);
    }
    time += 300;
}
//# sourceMappingURL=create_schema.js.map
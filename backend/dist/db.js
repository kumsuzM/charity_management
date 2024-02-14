"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    host: "db",
    port: 5432,
    user: "user123",
    password: "password123",
    database: "charity_db",
});
exports.default = pool;
//# sourceMappingURL=db.js.map
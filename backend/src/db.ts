import { Pool } from "pg";

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "user123",
  password: "password123",
  database: "charity_db",
});

export default pool;

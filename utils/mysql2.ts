import { createPool } from "https://deno.land/x/mysql2/mod.ts";

export const pool = createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "123456",
  database: "auth_db",
  connectionLimit: 4,
});
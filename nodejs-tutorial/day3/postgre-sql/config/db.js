import Pool from "pg";

export const pool = new Pool.Pool({
  user: "postgres",
  host: "localhost",
  database: "app_db",
  password: "postgres",
  port: 5432,
});

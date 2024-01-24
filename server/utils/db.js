// Creating PostgreSQL Client here
// โค้ดนี้อยู่ในไฟล์ server/utils/db.js
import * as pg from "pg";
const { Pool } = pg.default;

const pool = new Pool({
  connectionString: "postgresql://postgres:314257@127.0.0.1:5432/posts",
});

export { pool };

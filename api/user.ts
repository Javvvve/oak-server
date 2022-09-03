import { Router } from "https://deno.land/x/oak/mod.ts";
import { pool } from '../utils/mysql2.ts'

export const User = new Router();

User.get('/user/info', async (ctx) => {
  const [user] = await pool.query('SELECT * FROM USER_INFO');
  ctx.response.body = { code: 0, data: user };
});

User.put('/user/set/:id', (ctx) => {
  console.log(ctx);
  ctx.response.body = { code: 0, data: '设置成功' };
})

import { Router } from "https://deno.land/x/oak/mod.ts";

export const User = new Router();

User.get('/user/info', (ctx) => {
  const user = {
    name: '李华',
    age: 17,
    gender: '女'
  }
  ctx.response.body = { code: 0, data: user };
});

User.put('/user/set/:id', (ctx) => {
  console.log(ctx);
  ctx.response.body = { code: 0, data: '设置成功' };
})

import { Router } from "https://deno.land/x/oak/mod.ts";
import { User } from './user.ts';

// 首页路由
const Home = new Router();
Home.get('/', (ctx) => {
  ctx.response.body = 'Welcome to oak-server'
})

export const Routes = [Home, User];

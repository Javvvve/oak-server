import { Application } from "https://deno.land/x/oak/mod.ts";
import { Logger } from "./middlewares/logger.ts";
import { Routes } from './api/index.ts';

interface nextFn<> {
	(arg?: string): void;
}

interface ContextResp {
    body: string | unknown
}

interface Context {
    response: ContextResp
}

const app = new Application();

// 使用引入的Middleware代替 any
app.use(Logger);

// 引入路由
Routes.forEach((router) => {
  app.use(router.routes());
})

await app.listen({ port: 3000 });
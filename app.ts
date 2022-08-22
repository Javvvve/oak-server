import { Application } from "https://deno.land/x/oak/mod.ts";
import * as Logger from "./middlewares/logger.ts";

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

// any 类型需要解决
app.use((Logger as any));

app.use((ctx: Context) => {
  ctx.response.body = "Hello Come oak-server!";
});

await app.listen({ port: 3000 });
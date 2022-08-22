import { Application } from "https://deno.land/x/oak/mod.ts";
interface ContextResp {
    body: string
}

interface Context {
    response: ContextResp
}

const app = new Application();

app.use((ctx: Context) => {
  ctx.response.body = "Hello Come oak-server!";
});

await app.listen({ port: 3000 });
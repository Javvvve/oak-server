import { Middleware } from "https://deno.land/x/oak/mod.ts";

export const Logger: Middleware = async (ctx, next) => {
	await next();
	const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
};

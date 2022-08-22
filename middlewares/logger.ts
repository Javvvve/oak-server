interface ReqFn<T> {
	(arg: T): T;
}

interface nextFn<> {
	(arg?: string): void;
}

interface Headers {
	get: ReqFn<string>
}

interface ContextReq {
		headers: Headers
    method: string
		url: string
}

interface ContextResp {
    body: string | unknown
		headers: Headers
}

interface Context {
    response: ContextResp
		request: ContextReq
}

const Logger = async (ctx: Context, next: nextFn) => {
	await next();
	const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
};

export default {
	Logger
};
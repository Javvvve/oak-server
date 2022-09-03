import { DEFAULT_CONFIG } from './default.ts';
import { PROD_CONFIG } from './prod.ts';

export const CONFIG = Deno.env.get('DENO_ENV') === 'prod' ? PROD_CONFIG : DEFAULT_CONFIG;
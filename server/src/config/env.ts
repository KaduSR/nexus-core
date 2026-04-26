import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    OLLAMA_BASE_URL: z.string().url().default('http://localhost:11434'),
    PORT: z.coerce.number().default(3333),
    NOTION_TOKEN: z.string().optional(),
    NOTION_DATABASE_ID: z.string().optional(),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});


const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    console.error('❌ Erro de configuração nas variáveis de ambiente:', _env.error.format());
    throw new Error('Variáveis de ambiente inválidas.');
}

export const env = _env.data;

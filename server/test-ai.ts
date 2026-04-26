import 'dotenv/config';
import { OllamaService } from './src/services/OllamaService';


const ollama = new OllamaService();

console.log('--- Testando Conexão com Ollama ---');

ollama.chatStream(
    'llama3.2',
    [{ role: 'user', content: 'Olá, quem é você?' }],
    (token) => process.stdout.write(token)
);
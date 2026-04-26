import axios from "axios";
import 'dotenv/config';
import { env } from "../config/env";

export interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export class OllamaService {
    private baseUrl = env.OLLAMA_BASE_URL;

    async chatStream(model: string, messages: ChatMessage[], onToken: (token: string) => void) {
        try {
            const response = await axios.post(
                `${this.baseUrl}/api/chat`,
                {
                    model,
                    messages,
                    stream: true,
                },
                { responseType: 'stream' }
            );
            response.data.on('data', (chunk: Buffer) => {
                const lines = chunk.toString().split('\n');

                for (const line of lines) {
                    if (!line.trim()) continue;
                    try {
                        const json = JSON.parse(line);
                        if (json.message?.content) {
                            onToken(json.message.content);
                        }
                        if (json.done) {
                            console.log('\n[Ollama] Geração finalizada.');
                        }
                    } catch (e) {

                    }

                }
            });
        } catch (error) {
            console.error('[Ollama Error]:', error);
            throw new Error('Falha ao se comunicar com o Ollama local.');
        }

    }
}

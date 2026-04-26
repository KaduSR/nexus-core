import { Request, Response } from 'express';
import { BaseRepository } from '../models/BaseRepository';
import { OllamaService } from '../services/OllamaService';

const ollama = new OllamaService();

export class ChatController {
    static async handleStream(req: Request, res: Response) {
        const { conversationId, message, modelName } = req.body;

        try {
            await BaseRepository.findOrCreateConversation(conversationId, 'Nova Conversa', modelName || 'llama3.2');
            await BaseRepository.saveMessage(conversationId, 'user', message);


            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache'),
                res.setHeader('Connection', 'keep-alive');

            let fullResponse = '';

            await ollama.chatStream(
                modelName || 'llama3.2',
                [{ role: 'user', content: message }],
                (token) => {
                    fullResponse += token;

                    res.write(`data: ${JSON.stringify({ token })}\n\n`);
                }

            );

            await BaseRepository.saveMessage(conversationId, 'assistant', fullResponse);

            res.write('data: [DONE]\n\n');
            res.end();
        } catch (error) {
            console.error('[Chat Error]:', error);
            res.status(500).write(`data: ${JSON.stringify({ error: 'Erro no processamento' })}`);
            res.end();
        }
    }
}

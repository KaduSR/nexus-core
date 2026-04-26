import { prisma } from '../config/database';

export class BaseRepository {
    static async findOrCreateConversation(id: string, title: string, modelName: string) {
        return await prisma.conversation.upsert({
            where: { id },
            update: {},
            create: {
                id,
                title,
                modelName,
            },
        });
    }

    static async saveMessage(conversationId: string, role: 'user' | 'assistant', content: string) {
        return await prisma.message.create({
            data: {
                conversationId,
                role,
                content,
            },
        });
    }

    static async getChatHistory(conversationId: string) {
        // Ao não tipar a variável manualmente aqui, deixamos o Prisma inferir o tipo do retorno
        const messages = await prisma.message.findMany({
            where: { conversationId },
            orderBy: { createdAt: 'asc' },
        });

        // Tipamos o retorno do map para satisfazer o noImplicitAny
        return messages.map((m: any) => ({
            role: m.role as 'user' | 'assistant',
            content: m.content
        }));
    }
}
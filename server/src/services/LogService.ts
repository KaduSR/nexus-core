import { notion, NOTION_DATABASE_ID } from '../config/notion';

export class LogService {
    static async task(title: string, phase: string, complexity: 'Baixa' | 'Média' | 'Alta') {
        if (!NOTION_DATABASE_ID) return;

        try {
            await notion.pages.create({
                parent: { database_id: NOTION_DATABASE_ID },
                properties: {
                    Nome: { title: [{ text: { content: title } }] },
                    Fase: { select: { name: phase } },
                    Complexidade: { select: { name: complexity } },
                    Status: { status: { name: 'Done' } },
                },
            });
            console.log(`[Notion] Tarefa "${title}" registrada com sucesso.`);
        } catch (error) {
            console.error('[Notion Error] Falha ao registrar tarefa:', error);
        }
    }
}
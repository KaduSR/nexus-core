import cors from 'cors';
import express from "express";
import { env } from './config/env';
import { ChatController } from "./controllers/ChatController";


const app = express();


app.use(cors());
app.use(express.json());

app.get('/helth', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/chat/stream', ChatController.handleStream);

const PORT = env.PORT || 3333;

app.listen(PORT, () => {
    console.log('--- Nexus Core Engine ---');
    console.log(`🚀 Servidor backend ativo na porta: ${PORT}`);
    console.log(`📡 Endpoint de Stream: http://localhost:${PORT}/api/chat/stream`);
    console.log('-------------------------');
});
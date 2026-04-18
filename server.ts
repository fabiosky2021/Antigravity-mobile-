import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { createServer as createViteServer } from "vite";
import path from "path";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // ROTEADOR DE ALMA (P2P + FALLBACK)
  app.post("/ask", async (req, res) => {
    const { prompt, context } = req.body;

    // 1. TENTATIVA LOCAL (OLLAMA + NCP)
    try {
      const localResponse = await axios.post(
        "http://localhost:11434/api/generate",
        {
          model: "qwen2.5:0.5b", // Otimizado para o CCE
          prompt: prompt,
          stream: false,
        }
      );
      return res.json({
        source: "LOCAL_NCP",
        response: localResponse.data.response,
      });
    } catch (err) {
      console.log("Local Offline ou Pesado. Acionando Roteador Global P2P...");
    }

    // 2. FALLBACK GLOBAL (GITHUB P2P / OPENROUTER)
    try {
      const globalResponse = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "google/gemini-pro-1.5",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: { Authorization: `Bearer ${process.env.GLOBAL_API_KEY}` },
        }
      );
      return res.json({
        source: "GLOBAL_P2P",
        response: globalResponse.data.choices[0].message.content,
      });
    } catch (error) {
      res.status(500).json({ error: "SISTEMA EM CRITICAL FAILURE. VERIFIQUE .ENV" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Antigravity Core] Server running on http://localhost:${PORT}`);
  });
}

startServer();

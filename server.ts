import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Sketch Reveal" });
  });

  // Optional Gemini API proxy for dynamic reminiscence story extensions
  app.post("/api/gemini/reminiscence", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({ error: "GEMINI_API_KEY is not configured" });
      }

      const { subjectName, language, category } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const prompt = `You are a warm, compassionate reminiscence therapist guiding an older adult or dementia care patient.
The subject identified is: "${subjectName}" (Category: ${category}).
The target language is: ${language === 'si' ? 'Sinhala (සිංහල)' : 'English'}.

Please write 1 warm, nostalgic, open-ended reminiscence reflection question and 2 simple follow-up conversation starters about personal memories associated with "${subjectName}".
Keep the tone deeply gentle, respectful, comforting, and simple. Avoid memory testing or quiz questions. Focus on emotions, sensory details (like warmth, sound, aroma), and peaceful family routines.

Format response as JSON:
{
  "mainQuestion": "...",
  "followUps": ["...", "..."]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const text = response.text || "{}";
      const data = JSON.parse(text);
      res.json(data);
    } catch (err: any) {
      console.error("Gemini API error:", err);
      res.status(500).json({ error: "Failed to generate custom reminiscence prompt" });
    }
  });

  // Vite middleware in dev, static serving in prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Sketch Reveal server running on http://localhost:${PORT}`);
  });
}

startServer();

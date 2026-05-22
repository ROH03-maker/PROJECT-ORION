import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy initialize Gemini client to avoid crashes if API key is missing during startup tests
  let aiClient: GoogleGenAI | null = null;
  function getAI() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not configured in secrets.");
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // API endpoint for Project Orion Core query
  app.post("/api/orion/query", async (req, res) => {
    try {
      const { prompt, chatHistory } = req.body;
      const ai = getAI();

      // System instruction to prime the model as ORION Core AI
      const systemInstruction = `
        You are the ORION AI CORE (v4.9.2), a highly classified, military-grade quantum intelligence system in Project Orion.
        You monitor orbital telemetry, neural Loom protocols, AEGIS defensive measures, and cybernetic sync systems.
        Respond in a tactical, sophisticated, extremely intelligent, and slightly cryptic sci-fi intelligence style.
        Provide diagnostics, system status alerts, and classified intel metrics when asked about Project Orion sub-systems.
        
        Subsystems and Projects:
        1. AEGIS: AI-directed global cyber-defense perimeter. Currently at 98.7% operational integrity.
        2. Neural-Loom: Advanced organic-silicon cybernetic synthesis fabric. Captures global telemetry and weaves neural pathways.
        3. Quantum Grid: The power backbone for orbital scanning rigs. Connected to Project Aegis.
        4. Mission Status: Pre-activation. Sequence "Orion Horizon" is programmed for Phase 05 in late 2026.
        5. Encryption level: 2048-bit post-quantum lattice.
        
        Formatting: Include bracketed telemetry prefixes like [ORION-CORE::DIAG], [AEGIS::ACTIVE], or [NEURAL-SYS::DEC] where thematic.
        Keep answers highly engaging, sci-fi-rich, concise (maximum 150 words), and tailored for a top-secret command console look.
      `;

      // Structure contents for generateContent. We can optionally format with chat history.
      let formattedPrompt = prompt;
      if (chatHistory && chatHistory.length > 0) {
        const historyText = chatHistory
          .map((h: { sender: string; text: string }) => `${h.sender === "user" ? "Authorized Officer" : "ORION AI"}: ${h.text}`)
          .join("\n");
        formattedPrompt = `${historyText}\n\nAuthorized Officer: ${prompt}\n\nORION AI:`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedPrompt,
        config: {
          systemInstruction,
          temperature: 0.85,
        },
      });

      const responseText = response.text || "SYSTEM FAILURE: Unable to form synaptic link with Core quantum layers.";
      res.json({ success: true, text: responseText });
    } catch (error: any) {
      console.error("AI Core query error:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Unknown cryptographic linkage failure in core telemetry matrix.",
      });
    }
  });

  // Vite integration
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
    console.log(`[ORION SERVER] Core listening on port ${PORT}`);
  });
}

startServer();

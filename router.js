// router.js
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function routeRequest(prompt) {
  try {
    // Usando Gemini Pro para raciocínio técnico complexo
    const model = ai.getGenerativeModel({ model: "gemini-3.1-pro-preview" });
    const result = await model.generateContent(prompt);
    
    // Assegura que retornamos o texto corretamente
    return (result as any).text();
  } catch (err) {
    console.error("Erro de IA:", err);
    throw new Error('Falha no processamento inteligente');
  }
}

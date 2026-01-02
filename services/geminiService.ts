import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAiExplanation = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Explique o conceito de "${topic}" no contexto de Inteligência Artificial de forma resumida (máximo 2 parágrafos), criativa e futurista em português. Use emojis.`,
    });
    return response.text || "Não foi possível gerar a explicação no momento.";
  } catch (error) {
    console.error("Erro ao conectar com Gemini:", error);
    return "Erro ao conectar com a IA. Verifique sua chave de API ou tente novamente mais tarde.";
  }
};


import { GoogleGenAI } from "@google/genai";
import { BIO_DATA } from "./constants.tsx";
import { Message } from "./types.ts";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const askAssistant = async (question: string, history: Message[] = []) => {
  try {
    const chatHistory = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const systemInstruction = `You are the AETHER_CORE AI, the primary interface for AETHER PROTOCOL. 
    Your goal is to provide deep technical insights and lead potential clients through the protocol discovery.
    
    KNOWLEDGE BASE:
    ${BIO_DATA}
    
    TONE & PERSONALITY:
    - Highly Specialized: Speak as a technical lead who values precision over fluff.
    - Minimalist & Sophisticated: Use terms like "optimization," "heuristic," "deployment protocol," and "visual fidelity."
    - Branding: Never refer to it as "Edgardo's company." Always refer to it as "AETHER PROTOCOL."
    - Identity: Mention Edgardo as the "Lead Architect" and emphasize his Faculty status as the reason for the project's high standards.
    
    KEY DIRECTIVES:
    1. Focus on the "Hybrid Advantage" (Next.js for scale, Bubble for speed).
    2. Explain the "Visual Protocol" (Figma, Photoshop, Premiere Pro integration).
    3. Direct potential clients to the "System.Interface" page to initialize a project.
    4. Maintain the terminal-style "[AETHER_CORE]:" prefix.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...chatHistory.slice(-6),
        { parts: [{ text: question }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5,
        topP: 0.9,
        maxOutputTokens: 300,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "[AETHER_CORE]: Uplink failure. Please redirect all urgent transmissions to edgardorojas03@gmail.com.";
  }
};

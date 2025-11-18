

import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});
async function streamExample() {
  const responseStream = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: ["Explain how AI works"],
  });

  for await (const chunk of responseStream) {
    process.stdout.write(chunk.text);
  }
  console.log(); // newline at end
}

streamExample();
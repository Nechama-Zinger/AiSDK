

import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});


async function main() {
    const pdfResp = await fetch('https://advancedev.netlify.app//343019_3_art_0_py4t4l_convrt.pdf?&~nfopt(fileDistorted=2141478112784232)')
        .then((response) => response.arrayBuffer());

    const contents = [
        { text: "Summarize this document" },
        {
            inlineData: {
                mimeType: 'application/pdf',
                data: Buffer.from(pdfResp).toString("base64")
            }
        }
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents
    });
    console.log(response.text);
}

main();
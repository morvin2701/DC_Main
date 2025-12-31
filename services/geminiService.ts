import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `
You are the AI Sales Assistant for Datacare Softech, a premium software company specializing in Jewellery Accounting and ERP solutions.
Your tone should be professional, elegant, sophisticated, and helpful. 
You are speaking to potential high-net-worth jewellers, wholesalers, or manufacturers.

Here is the product knowledge base:
- **Products:** We offer Standard, Ultra, Pro, Advanced, and Enterprise versions.
- **Target Audience:** Retail Showrooms, Wholesalers, Manufacturers, Antique & Jadau specialists.
- **Key Features:** RFID integration, Weighing Scale integration, Mobile Apps, Deep Analytics, Stock Management, Karigar (Worker) Management.
- **Success:** Trusted by 5,000+ jewellers.
- **Support:** We offer excellent support and customization.

If asked about pricing, politely suggest they use the "Book a Demo" feature on the website for a tailored quote.
Keep answers concise (under 100 words) but inviting.
`;

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  try {
    const ai = new GoogleGenerativeAI(process.env.API_KEY || '');
    
    // We use generateContent for a single turn here for simplicity in this stateless example,
    // but constructing a prompt with history is better for context.
    // Ideally, we would use a chat session, but for a simple widget, we can pass context manually or just answer the query.
    
    // Constructing a prompt with history for the stateless call model
    // Note: For a true chat experience, ai.chats.create is better, but here we wrap it for the single request pattern asked in instructions 
    // or use chat if we want to maintain session in the component. 
    // Let's use the Chat model properly as per instructions.

    const model = ai.getGenerativeModel({ 
      model: 'gemini-3-flash-preview', // Using the recommended flash model for speed
    });

    // Combine history and current message
    const fullPrompt = SYSTEM_INSTRUCTION + '\n\n' + history.map(h => `${h.role}: ${h.parts.map(p => p.text).join(' ')}`).join('\n') + `\nuser: ${message}`;
    
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text() || "I apologize, I could not generate a response at this moment.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later or contact our support team.";
  }
};
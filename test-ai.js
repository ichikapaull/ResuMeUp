// Simple test to check if AI API is working
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

console.log("API Key available:", !!apiKey);
console.log("API Key first 10 chars:", apiKey ? apiKey.substring(0, 10) + "..." : "Not found");

async function testAI() {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent("Say hello world");
    const response = await result.response;
    const text = response.text();
    
    console.log("✅ AI Test Successful:", text);
  } catch (error) {
    console.error("❌ AI Test Failed:", error.message);
  }
}

testAI();

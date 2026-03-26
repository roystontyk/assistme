import { Nanobot } from "@nanobot-ai/core";

export default {
  async fetch(request, env) {
    // Initialize the Gemini 3.1 Flash-Lite Brain
    const agent = new Nanobot({
      model: "google/gemini-3.1-flash-lite",
      apiKey: env.GOOGLE_AI_KEY
    });

    // Process incoming Telegram messages
    if (request.method === "POST") {
      const payload = await request.json();
      // This sends the reply back to your phone via Telegram
      await agent.handleUpdate(payload, env.TELEGRAM_TOKEN);
      return new Response("OK");
    }

    return new Response("AssistMe Agent is Online.");
  }
};

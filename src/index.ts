export default {
  async fetch(request, env) {
    if (request.method === "POST") {
      const payload = await request.json();
      
      // Force a direct reply to Telegram without the AI brain first
      await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: payload.message.chat.id,
          text: "I heard you! Now I'm trying to think..."
        })
      });

      return new Response("OK");
    }
    return new Response("Agent is active.");
  }
};

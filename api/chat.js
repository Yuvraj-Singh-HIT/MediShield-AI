export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST requests allowed' });
    }

    const { message, weatherContext, conversationHistory } = req.body;

    const prompt = {
        contents: [
            {
                parts: [
                    {
                        text: `
Weather Context: ${JSON.stringify(weatherContext || {}, null, 2)}

Conversation History:
${conversationHistory.map((msg, i) => `${msg.role.toUpperCase()}: ${msg.text}`).join('\n')}

User: ${message}
                        `.trim()
                    }
                ]
            }
        ]
    };

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prompt),
            }
        );

        const data = await response.json();
        const result = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
        res.status(200).json({ response: result });

    } catch (error) {
        console.error('Gemini API error:', error);
        res.status(500).json({ error: 'Error calling Gemini API' });
    }
}

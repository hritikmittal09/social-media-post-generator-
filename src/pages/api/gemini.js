export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  //console.log(req.body);
  const prompt = `
You are a professional social media copywriter. 
Write a **single best detailed social media post** about the following company.
Do not provide multiple options, variations, or headings. 
Just return one polished post that:
- post tone should be ${req.body.tone}
- Starts with a strong hook
- Uses simple and engaging language
- Highlights the company’s unique value
- Ends with a clear call-to-action
- No labels like "Option 1" or "Option 2" — just the final post text.

Company details:
${req.body.text}
`;
  
  

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", // ✅ Gemini endpoint
      
      
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text : prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err.message });
  }
}

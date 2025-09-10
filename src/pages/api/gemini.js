export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  //console.log(req.body);
  const prompt = `
You are a professional social media copywriter.  
Write a single best detailed social media post about the topic: ${req.body.text}.  
- The post tone should be ${req.body.tone}.  
- Start with a strong hook.  
- Use simple, engaging, and conversational language.  
- Highlight the unique value or importance of the topic.  
- End with a clear and compelling call-to-action.  
- Do not provide multiple options, variations, or headings.  
- Just return one final post text without labels.  
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

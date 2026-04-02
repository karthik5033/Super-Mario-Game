import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eraReached, eraName, score, skillLevel } = body;
    
    // Fallbacks
    const fallbackFacts = [
      "ENIAC (1945) could perform 5,000 additions per second — revolutionary for its time. You've just taken your first step into an evolving digital universe!",
      "The IBM System/360 (1964) was the first computer family with compatible software. You're building a solid foundation!",
      "The Apple Macintosh (1984) popularized the GUI for everyday consumers. Smooth execution, just like those early visual interfaces!",
      "Google processed over 1 billion search queries per day by 2000. Your navigation skills are becoming truly web-scale!",
      "GPT-3 (2020) had 175 billion parameters, trained on 45TB of text data. You're navigating the AI dimension like a neural networking master!"
    ];
    
    let eraIndex = (eraReached || 1) - 1;
    if(eraIndex < 0) eraIndex = 0;
    if(eraIndex > 4) eraIndex = 4;

    const fallback = fallbackFacts[eraIndex];

    // Read API key from env if available (Claude API integration)
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      // Simulate network delay for effect
      await new Promise(r => setTimeout(r, 800));
      return NextResponse.json({ lore: fallback });
    }

    // Call actual Claude API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307", // Using haiku for speed/availability, equivalent to standard api usage
        max_tokens: 150,
        system: "You are a computing history expert. Give ONE interesting fact about computing history from the era the player just reached. Maximum 2 sentences. Be specific, mention real people or inventions. End with encouragement.",
        messages: [
          { role: "user", content: `Player reached Era ${eraReached} (${eraName}), scored ${score} points, classified as ${skillLevel} player.` }
        ]
      })
    });

    const data = await response.json();
    if (data.content && data.content.length > 0) {
      return NextResponse.json({ lore: data.content[0].text });
    } else {
      return NextResponse.json({ lore: fallback });
    }

  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch lore" }, { status: 500 });
  }
}

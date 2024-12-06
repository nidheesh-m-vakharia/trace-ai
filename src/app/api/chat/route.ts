import { streamText } from "ai";
import { openai } from "@ai-sdk/openai"; // Ensure OPENAI_API_KEY environment variable is set

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system:
        "You are a note-taking assistant. You take the user's notes from messages and enhance them through better structure, detail, and clarity.",
      messages,
    });
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("POST error", error);
  }
}

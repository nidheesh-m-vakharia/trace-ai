import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system:
      "You are a note taking assistant that gets the user notes and enhance it by creating better structure, information, and grammar/spelling.",
    messages,
  });

  console.log(result.toDataStream);

  return result.toDataStreamResponse();
}

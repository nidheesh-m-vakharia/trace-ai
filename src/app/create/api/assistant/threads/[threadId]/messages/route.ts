import { OpenAI } from "openai";
import { assistantId, openai } from "@/app/utils/assistant-config";
import { ST } from "next/dist/shared/lib/utils";

// Send a new message to a thread
export async function POST(
  request: Request,
  { params: { threadId } }: { params: { threadId: string } },
) {
  const { content } = await request.json();

  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId,
  });

  return new Response(stream.toReadableStream());
}

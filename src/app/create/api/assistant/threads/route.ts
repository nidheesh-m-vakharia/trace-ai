import { OpenAI } from "openai";
import { openai } from "@/app/utils/assistant-config";

export async function POST() {
  const thread = await openai.beta.threads.create();
  return Response.json({ threadId: thread.id });
}

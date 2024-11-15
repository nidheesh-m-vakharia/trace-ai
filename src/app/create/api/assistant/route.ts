import { OpenAI } from "openai";
import { openai } from "@/app/utils/assistant-config";

export async function POST() {
  const assistant = await openai.beta.assistants.create({
    instructions:
      "You are an assistant that helps with note taking, where you get a user's notes and enahance it by creating a better note structure and adding relevant useful information.",
    name: "Note Enhancer",
    model: "gpt-4o-mini",
  });
  return Response.json({ assistantId: assistant.id });
}

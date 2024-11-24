import { OpenAI } from "openai";

type OPENAI = {
  apiKey: string;
};

type ASSISTANT = {
  assistantId: string;
};

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? "",
});

export const assistantId = process.env.OPENAI_ASSISTANT_ID ?? "";

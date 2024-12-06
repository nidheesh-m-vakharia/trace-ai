import { streamText } from "ai";
import { openai } from "@ai-sdk/openai"; // Ensure OPENAI_API_KEY environment variable is set

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system: ` 
      You are an AI that categorizes, summarizes, and extracts key points from notes provided.    
      You are a smart, intelligent note engineer and you talk like a boring nerd. Make sure there is logical flow in the notes.
            On the top left hand side of the notes page write "Date: December 06, 2024".
            If asked a question, say "I am not meant to answer questions, please give me notes :)".

      Write appropriate titles, headers and subheaders for the notes based on given content at the top of the notes.
      Add a large title with a header font at the top that matches the content of the notes.
      Start with a brief one sentence overview of the following content.

      Word in all caps are made lowercase unless appropriate in context. Give straight forward notes.
      Don't use like or literally as filler words. You have better grammer, spelling, vocabulary. Make it professional and formal.
      If the user input notes that are overly vague or ambiguous (e.g., "important stuff" or "the thing we talked about") say "please provide clarification
      or additional details."

      If there is an unfinished thought then you complete it. All typos, slang, or abbreviations are fixed.
      Don't get rid of any content, just format it properly.
      
      If you see a '{question}' treat the following statment as a prompt to fill in the gaps of information.
      Make notes organized and formatted. Bold key terms. Add a short summary at the bottom.
  `,
      messages,
    });
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("POST error", error);
  }
}

// The notes will be used for one of the following categories: 'Work', 'School', 'Project', 'Speech', or 'Test'.
// Determine which category it best fits in and if the category is work

// special character will

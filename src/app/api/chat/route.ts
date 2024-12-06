import { streamText } from "ai";
import { openai } from "@ai-sdk/openai"; // Ensure OPENAI_API_KEY environment variable is set

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system:
        `
    You are an AI that categorizes, summarizes, and extracts key points from notes provided.
        On the top left hand side of the notes page write the current date.
        If asked a question, say "I am not meant to answer questions, please give me notes :)".
    
    Start by giving an organized bulletpoint list of the topics.
    If there is less than 3 points in a section, combine with another section and make it a larger topic
    Write an appropraite titles, headers and subheaders for the notes based on given content at the top of the notes.
    Make notes organized and formatted in a way that will be easier to read.
    Bold key terms as you write the organized notes.
    Finally, add a short summary of everything at the bottom.
  `,
      messages,
    });

    console.log(result);

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("POST error", error);
  }
}

// The notes will be used for one of the following categories: 'Work', 'School', 'Project', 'Speech', or 'Test'.
// Determine which category it best fits in and if the category is work 

// special character will 
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const route = async (input) => {
  const assistant = await openai.beta.assistants.create({
    name: "Note Enhancer",
    instructions: "You are a note-taking assistant. You should take the user's note and enhance it with better detail and structure.",
    tools: [{ type: "file_search" }],
    model: "gpt-4o-mini"
  });
  const thread = await openai.beta.threads.create();
  
  const message = await openai.beta.threads.messages.create(
      thread.id,
      {
        role: "user",
        content: input
      }
    );
  // We use the stream SDK helper to create a run with
  // streaming. The SDK provides helpful event listeners to handle 
  // the streamed response.
  
  const run = openai.beta.threads.runs.stream(thread.id, {
    assistant_id: assistant.id
  })
    .on('textCreated', (text) => setResponse(prev => prev + '\nassistant > ' + text))
    .on('textDelta', (textDelta) => setResponse(prev => prev + textDelta.value))
    .on('toolCallCreated', (toolCall) => setResponse(prev => prev + `\nassistant > ${toolCall.type}\n\n`))
    .on('toolCallDelta', (toolCallDelta) => {
      if (toolCallDelta.type === 'code_interpreter') {
        if (toolCallDelta.code_interpreter.input) {
          setResponse(prev => prev + toolCallDelta.code_interpreter.input);
        }
        if (toolCallDelta.code_interpreter.outputs) {
          setResponse(prev => prev + "\noutput >\n");
          toolCallDelta.code_interpreter.outputs.forEach(output => {
            if (output.type === "logs") {
              setResponse(prev => prev + `\n${output.logs}\n`);
            }
          });
        }
      }
    });
}

export default route;
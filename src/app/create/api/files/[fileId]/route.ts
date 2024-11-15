import { OpenAI } from "openai";
import { openai } from "@/app/utils/assistant-config";

// download file by file ID
export async function GET(
  _request: Request,
  { params: { fileId } }: { params: { fileId: any } },
) {
  const [file, fileContent] = await Promise.all([
    openai.files.retrieve(fileId),
    openai.files.content(fileId),
  ]);
  return new Response(fileContent.body, {
    headers: {
      "Content-Disposition": `attachment; filename="${file.filename}"`,
    },
  });
}

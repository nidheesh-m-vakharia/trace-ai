"use client";
import { useChat } from "ai/react";
import {
  CreatePageForm,
  CreatePageInputArea,
  CreatePageOutput,
} from "@/components/create-page/createPage";
import Markdown from "react-markdown";
import { Label } from "@/components/ui/label";
import { Files } from "lucide-react";

const CreatePage = () => {
  const { messages, input, handleSubmit, isLoading, handleInputChange } =
    useChat();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting");
    handleSubmit(e);
  };

  const output = (messages?.at(-1) && messages?.at(-1)?.content) ?? "";

  return (
    <div className="mb-5 mt-10 flex justify-center">
      <div className="w-4/5">
        <div className="grid grid-cols-2">
          <Label htmlFor="message-2" className="text-[50px] font-bold">
            Notes
          </Label>
          <div className="justify-self-end">
            <button
              className="mt-1 rounded-md p-1 hover:bg-gray-100"
              onClick={() => navigator.clipboard.writeText(output)}
            >
              <Files size={20} />
            </button>
          </div>
        </div>
        <div className="">
          <CreatePageForm className="-mb-10 mt-10" onSubmit={onSubmit}>
            <CreatePageInputArea
              input={input}
              handleInputChange={handleInputChange}
              isLoading={isLoading}
            />
            <CreatePageOutput>
              <article className="prose prose-xl">
                <Markdown className="">{output}</Markdown>
              </article>
            </CreatePageOutput>
          </CreatePageForm>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;

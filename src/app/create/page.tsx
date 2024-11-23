"use client";
import { useChat } from "ai/react";
import {
  CreatePageForm,
  CreatePageInputArea,
  CreatePageOutput,
} from "@/components/create-page/createPage";
import Markdown from "react-markdown";

const CreatePage = () => {
  const { messages, input, handleSubmit, isLoading, handleInputChange } =
    useChat();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting");
    await handleSubmit(e);
  };

  const output = (messages?.at(-1) && messages?.at(-1)?.content) ?? "";

  return (
    <div>
      <CreatePageForm className="mt-10" onSubmit={onSubmit}>
        <CreatePageInputArea
          input={input}
          handleInputChange={handleInputChange}
          isLoading={isLoading}
        />
        <CreatePageOutput text={output}>
          <article className="prose prose-xl">
            <Markdown>{messages?.at(-1) && messages?.at(-1)?.content}</Markdown>
          </article>
        </CreatePageOutput>
      </CreatePageForm>
    </div>
  );
};

export default CreatePage;

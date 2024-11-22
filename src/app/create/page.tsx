"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Wand2 } from "lucide-react";
import { useChat } from "ai/react";
import {
  CreatePageForm,
  CreatePageInputArea,
  CreatePageOutput,
} from "@/components/create-page/createPage";

const CreatePage = () => {
  const { messages, input, handleSubmit, isLoading, handleInputChange } =
    useChat();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting");
    await handleSubmit(e);
  };

  return (
    <div>
      <CreatePageForm className="mt-10" onSubmit={onSubmit}>
        <CreatePageInputArea
          input={input}
          handleInputChange={handleInputChange}
          isLoading={isLoading}
        />
        <CreatePageOutput>
          <p> output</p>
          {messages.map((message) => (
            <div key={message.id}>
              <div>{message.role}</div>
              <div>{message.content}</div>
            </div>
          ))}
        </CreatePageOutput>
      </CreatePageForm>
    </div>
  );
};

export default CreatePage;

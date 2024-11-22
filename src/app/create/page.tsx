"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";
import { useChat } from "ai/react";

const CreatePage = () => {
  const { messages, input, handleSubmit, isLoading, handleInputChange } =
    useChat();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid h-lvh w-full grid-cols-3 place-content-center gap-3">
          <span className="flex flex-col">
            <Label htmlFor="message-2" className="font-bold">
              Your Notes
            </Label>
            <Textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Type your notes here."
              disabled={isLoading}
              id="message-2"
            />
          </span>
          <span className="col-span-2 flex flex-col">
            <Label htmlFor="message-2" className="font-bold">
              Enhanced Notes
            </Label>
            <div className="col-span-2 h-full">
              {messages.map((message) => (
                <div key={message.id}>
                  <div>{message.role}</div>
                  <div>{message.content}</div>
                </div>
              ))}
            </div>
          </span>
          <span>
            <span className="flex h-fit flex-col">
              <Button type="submit" className="w-full" onSubmit={handleSubmit}>
                <Wand2 size={24} />
                Create
              </Button>
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;

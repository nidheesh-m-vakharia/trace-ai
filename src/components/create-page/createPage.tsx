import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Files } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Wand2, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import TextareaAutosize from "react-textarea-autosize";

type CreatePageInputAreaProps = {
  className?: string;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
};

const CreatePageInputArea = ({
  className,
  input,
  handleInputChange,
  isLoading,
}: CreatePageInputAreaProps): JSX.Element => {
  return (
    <>
      <span
        className={cn(
          className,
          "col-start-1 row-start-1 flex w-full flex-row items-center justify-between",
        )}
      >
        <Label htmlFor="message-2" className="text-[2vw] font-bold">
          Notes
        </Label>
      </span>

      <span className="col-start-1 row-start-2 flex w-full flex-col mb-10">
        <TextareaAutosize
          autoFocus={true}
          className="text-[1vw] shadow-none resize-none outline-none snap-center mb-[10vh]"
          placeholder="Type your notes here."
          id="message-2"
          name="message"
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </span>
      <div className="top-3/4  absolute grid grid-cols-1">
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 ">
        <Button type="submit" className="flex items-center">
          <Wand2 size={24} />
          Create
        </Button>
      </div>
         
      </div>
     
    </>
  );
};

type CreatePageFormProps = {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
};

const CreatePageForm = ({
  children,
  onSubmit,
  className,
}: CreatePageFormProps): JSX.Element => {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(className, "grid grid-cols-2 gap-4 bg-transparent")}
    >
      {children}
    </form>
  );
};

type CreatePageOutputProps = {
  children: React.ReactNode;
  className?: string;
  text: string;
};

const CreatePageOutput = ({
  children,
  className,
  text,
}: CreatePageOutputProps): JSX.Element => {
  return (
    <>
      <span
        className={cn(
          className,
          "col-start-3 my-auto flex w-full justify-between",
        )}
      >
        <button
          className="mt-1 rounded-md p-1 hover:bg-gray-100"
          onClick={() => navigator.clipboard.writeText(text)}
        >
          <Files size={20} />
        </button>
      </span>
      <span className="col-start-2 flex w-full flex-col">
        <div className="w-full rounded-md bg-transparent p-2 h-fill mb-[10vh] ">
          {children}
        </div>
      </span>
    </>
  );
};

export { CreatePageForm, CreatePageInputArea, CreatePageOutput };

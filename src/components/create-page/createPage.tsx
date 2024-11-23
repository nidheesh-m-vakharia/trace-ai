import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Files } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Wand2, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChat } from "ai/react";

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
        <HoverCard>
          <HoverCardTrigger className="rounded-md p-1 hover:bg-gray-100">
            <HelpCircle size={20} />
          </HoverCardTrigger>
          <HoverCardContent sideOffset={10}>
            Paste in your notes here and TraceAI will do the rest.
          </HoverCardContent>
        </HoverCard>
      </span>
      <span className="col-start-1 row-start-3 flex h-fit w-full flex-col">
        <Button type="submit">
          <Wand2 size={24} />
          Create
        </Button>
      </span>
      <span className="col-start-1 row-start-2 flex w-full flex-col">
        <Textarea
          className="h-[90vh] resize-none text-[1vw] shadow-none"
          placeholder="Type your notes here."
          id="message-2"
          name="message"
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </span>
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
          "col-start-2 my-auto flex w-full justify-between",
        )}
      >
        <Label htmlFor="message-2" className="text-[2vw] font-bold">
          Enhanced Notes
        </Label>
        <button
          className="mt-1 rounded-md p-1 hover:bg-gray-100"
          onClick={() => navigator.clipboard.writeText(text)}
        >
          <Files size={20} />
        </button>
      </span>
      <span className="col-start-2 flex w-full flex-col">
        <div className="h-[90vh] w-full overflow-y-scroll rounded-md border border-input bg-transparent p-2">
          {children}
        </div>
      </span>
    </>
  );
};

export { CreatePageForm, CreatePageInputArea, CreatePageOutput };

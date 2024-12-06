import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
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
    <div className={cn(className, "overflow-x-hidden")}>
      <>
        <span className="col-start-1 row-start-1 mb-10 flex flex-col">
          <TextareaAutosize
            autoFocus={true}
            className="mb-[10vh] resize-none snap-center bg-transparent text-lg tracking-wider shadow-none outline-none"
            placeholder="Type your notes here."
            id="message-2"
            name="message"
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </span>
        <div className="absolute top-3/4 grid grid-cols-1">
          <div className="fixed bottom-0 left-1/2 mb-4 -translate-x-1/2 transform">
            <Button type="submit" className="flex items-center">
              <Wand2 size={24} />
              Create
            </Button>
          </div>
        </div>
      </>
    </div>
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
};

const CreatePageOutput = ({
  children,
  className,
}: CreatePageOutputProps): JSX.Element => {
  return (
    <>
      <span className="col-start-2 flex w-full flex-col">
        <div className="h-fill mb-[10vh] rounded-md bg-transparent p-2">
          {children}
        </div>
      </span>
    </>
  );
};

export {
  CreatePageForm,
  CreatePageInputArea,
  CreatePageOutput,
  type CreatePageFormProps,
  type CreatePageInputAreaProps,
  type CreatePageOutputProps,
};

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Wand2, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type CreatePageInputAreaProps = {
  className?: string;
};

const CreatePageInputArea = ({
  className,
}: CreatePageInputAreaProps): JSX.Element => {
  return (
    <>
      <span
        className={cn(
          className,
          "col-start-1 row-start-1 flex w-full flex-row items-center justify-between",
        )}
      >
        <Label htmlFor="message-2" className="font-bold">
          Notes
        </Label>
        <HoverCard>
          <HoverCardTrigger className="rounded-md p-1 hover:bg-gray-100">
            <HelpCircle size={20} />
          </HoverCardTrigger>
          <HoverCardContent sideOffset={10}>
            This is a note that will be copied to the support team.
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
          className="h-[600px] resize-none shadow-none"
          placeholder="Type your notes here."
          id="message-2"
          name="message"
        />
        <p className="text-sm text-muted-foreground">
          Your message will be copied to the support team.
        </p>
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
      className={cn(
        className,
        "grid grid-cols-2 gap-4 bg-transparent",
      )}
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
      <span className={cn(className, "col-start-2 my-auto w-full")}>
        <Label htmlFor="message-2" className="font-bold">
          Enhanced Notes
        </Label>
      </span>
      <span className="col-start-2 flex w-full flex-col">
        <div className="h-[600px] p-2 w-full overflow-y-scroll rounded-md border border-input bg-transparent">
          {children}
        </div>
        <p className="text-sm text-muted-foreground">
          Your message will be copied to the support team.
        </p>
      </span>
    </>
  );
};

export { CreatePageForm, CreatePageInputArea, CreatePageOutput };

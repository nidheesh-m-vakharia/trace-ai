'use client';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const CreatePage = () => {
  const {toast} = useToast();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Note created",
      description: (
        <p>
        {e.currentTarget.querySelector("textarea")?.value.replace(/\n/g, "<br>")}
        </p>
      ),
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid h-lvh w-full grid-cols-3 place-content-center gap-3">
          <span className="flex flex-col">
            <Label htmlFor="message-2" className="font-bold">
              Your Text
            </Label>
            <Textarea
              className="h-[1000px] max-h-[1000px]"
              placeholder="Type your notes here."
              id="message-2"
            />
            <p className="text-sm text-muted-foreground">
              Your message will be copied to the support team.
            </p>
          </span>
          <span className="col-span-2 flex flex-col">
            <Label htmlFor="message-2" className="font-bold">
              Your Text
            </Label>
            <div className="col-span-2 h-full bg-gray-300"></div>
            <p className="text-sm text-muted-foreground">
              Your message will be copied to the support team.
            </p>
          </span>
          <span>
            <span className="flex h-fit flex-col">
              <Button type="submit"  className="w-full">
                <Wand2 size={24} />
                Create
              </Button>
            </span>
          </span>
        </div>
      </form>
    </>
  );
};

export default CreatePage;

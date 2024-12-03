"use client";

import Title from "@/components/ui/Homepage/title";
import Description from "@/components/ui/Homepage/description";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen">
        <Title />
        <div className="flex justify-center">
          <Button size="lg">Create</Button>
        </div>
      </div>
      <div>
        <Description />
      </div>
    </div>
  );
}

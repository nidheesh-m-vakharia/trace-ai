import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main>
        <Image
          src="/smile.svg" // add a new file this will be added to public
          alt="smile logo" //
          width={200}
          height={100}
          priority
        />
      </main>
    </div>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      
      <h1 className= "mt-10">Trace AI</h1>
      <p className="mt-6 mb-4 text-xl tracking-wide leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img
        src="https://www.shutterstock.com/shutterstock/photos/2304213093/display_1500/stock-vector-winking-face-emoji-sticker-yellow-face-with-winking-eye-black-outline-cute-sticker-on-pink-2304213093.jpg" // add a new file this will be added to public
        alt="smile logo" //
        width={200}
        height={100}
        className= "w-full mx-auto"
      />
    </div>
  );
}

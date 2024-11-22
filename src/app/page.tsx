import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="mt-10 dark:text-white">Trace AI</h1>
      <p className="mb-4 mt-6 dark:text-white text-xl leading-8 tracking-wide">
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
        className="mx-auto w-full"
      />
      <div className="mt-6 text-center pb-10 pt-0">
        <button className="bg-pink-200 hover:bg-pink-300 font-semibold rounded-md">
          Create!
        </button>
      </div>
    </div>
  );
}

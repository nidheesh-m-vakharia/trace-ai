"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sun, Moon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/theme";

const Navbar = () => {
  const router = useRouter();
  const { mode, toggleDarkMode } = useTheme();
  return (
    <nav className="flex items-center justify-between">
      <div
        className="flex items-center space-x-4"
        onClick={() => {
          router.push("/");
        }}
      >
        <h2 className="font-bold tracking-tighter">Trace</h2>
      </div>
      <div className="flex items-center gap-10">
        <button onClick={toggleDarkMode}>
          {mode === "dark" ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;

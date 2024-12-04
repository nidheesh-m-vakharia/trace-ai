"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useTheme } from "@/hooks/darkmode";

const Navbar = () => {
  const { toggleDarkMode }= useTheme();
  return (
    <nav>
      <div className="flex h-16 items-center justify-between px-5">
        <h1>trace.ai</h1>
        <Button onClick={toggleDarkMode}>toggle</Button>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;

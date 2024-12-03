"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Navbar = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <nav className="flex h-16 items-center justify-between px-4 shadow-md">
      {/* Title */}
      <div className="flex items-center gap-2">
        <Home className="w-6 h-6" /> {/* Lucide Home icon */}
        <h1 className="text-lg font-bold">trace.ai</h1>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={handleClick}>
          Create
        </Button>
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

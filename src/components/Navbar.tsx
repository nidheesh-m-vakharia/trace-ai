"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Navbar = () => {
  const handleCreate = () => {
    console.log("Create button clicked");
  };

  const TitleWithIcon = () => (
    <div className="flex items-center gap-2">
      <Home className="h-6 w-6 text-gray-600" aria-hidden="true" /> {/* Icon */}
      <h1 className="text-lg font-bold text-gray-800">trace.ai</h1>{" "}
      {/* Title */}
    </div>
  );

  return (
    <nav
      className="flex h-16 flex-wrap items-center justify-between bg-white px-4 shadow-md"
      aria-label="Main Navigation"
    >
      {/* Logo and Title */}
      <TitleWithIcon />

      {/* Navigation Actions */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={handleCreate}>
          Create
        </Button>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;

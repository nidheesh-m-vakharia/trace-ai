"use client";

import Title from "@/components/ui/Homepage/title";
import Description from "@/components/ui/Homepage/description";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";
import { SignInButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  return (
    <div>
      <div className="h-screen w-full">
        <Title />
        <div className="flex justify-center">
          {isSignedIn ? (
            <Button
              size="lg"
              onClick={() => router.push("/create")}
              disabled={!isLoaded}
            >
              Create
            </Button>
          ) : (
            <SignInButton>
              <Button size="lg">Get Started!</Button>
            </SignInButton>
          )}
        </div>
      </div>
      <div className="w-full">
        <Description />
      </div>
    </div>
  );
}

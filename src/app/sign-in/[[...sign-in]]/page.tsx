"use client";
import { useTheme } from "@/hooks/use-theme";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  const { mode } = useTheme();
  return (
    <div className="grid h-lvh w-full grow items-center px-4 sm:justify-center">
      <SignIn
        appearance={{
          baseTheme: mode === "dark" ? dark : undefined,
        }}
      />
    </div>
  );
}

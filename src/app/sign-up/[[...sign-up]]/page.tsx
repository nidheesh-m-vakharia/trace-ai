"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "@/hooks/use-theme";

export default function SignUpPage() {
  const { mode } = useTheme();
  return (
    <div className="grid h-lvh w-full grow items-center px-4 sm:justify-center">
      <SignUp
        appearance={{
          baseTheme: mode === "dark" ? dark : undefined,
        }}
      />
    </div>
  );
}

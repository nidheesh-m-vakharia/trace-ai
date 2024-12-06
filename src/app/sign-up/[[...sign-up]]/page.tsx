"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="grid h-lvh w-full grow items-center px-4 sm:justify-center">
      <SignUp />
    </div>
  );
}

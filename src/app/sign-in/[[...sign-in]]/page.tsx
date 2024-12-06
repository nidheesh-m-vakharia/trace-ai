import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="grid h-lvh w-full grow items-center px-4 sm:justify-center">
      <SignIn />
    </div>
  );
}

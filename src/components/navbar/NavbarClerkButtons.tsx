import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const NavbarClerkButtons = () => {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

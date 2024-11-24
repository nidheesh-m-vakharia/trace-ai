"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function SignInPage() {
  return (
    <div className="grid h-lvh w-full grow items-center px-4 sm:justify-center">
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignIn.Step name="start">
                <Card className="w-96 md:w-full">
                  <CardHeader>
                    <CardTitle className="mb-3">
                      <h1>Sign in to Trace AI</h1>
                    </CardTitle>
                    <CardDescription>
                      Welcome back to Trace AI! Please sign in to continue.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-y-4">
                    <div className="grid grid-cols-2 gap-x-4">
                      <Clerk.Connection name="github" asChild>
                        <Button type="button" disabled={isGlobalLoading}>
                          <Clerk.Loading scope="provider:github">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.spinner className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.gitHub className="mr-2 size-4" />
                                  GitHub
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                      <Clerk.Connection name="google" asChild>
                        <Button type="button" disabled={isGlobalLoading}>
                          <Clerk.Loading scope="provider:google">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.spinner className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.google className="mr-2 size-4" />
                                  Google
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <Button variant="link" size="sm" asChild>
                        <Clerk.Link navigate="sign-up">
                          Don&apos;t have an account? Sign up
                        </Clerk.Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>
            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
}

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/create(.*)?", "/api(.*)?"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

const skipInternalsRegex =
  "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)";
const alwaysRunRegex = "/(api|trpc)(.*)";

export const config = {
  matcher: [skipInternalsRegex, alwaysRunRegex],
};

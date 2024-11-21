"use client";

import { Home } from "lucide-react";
import { redirect } from "next/navigation";

const NotFound = () => {
  return (
    <div className="flex h-lvh items-center justify-center">
      <div>
        <h1>404 - Page Not Found</h1>
        <p className="mt-3">The page you are looking for doesnt exist...</p>
        <div className="mt-9 grid w-fit grid-cols-2 place-items-center gap-4">
          <Home onClick={() => redirect("/")} size={36} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;

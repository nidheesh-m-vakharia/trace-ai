"use client";

import { Home, RotateCw } from "lucide-react";
import { redirect } from "next/navigation";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex h-lvh items-center justify-center">
      <div>
        <h1>Something went wrong...</h1>
        <p className="mt-3">{error.message}</p>
        <div className="mt-9 grid w-fit grid-cols-2 place-items-center gap-4">
          <RotateCw
            className="transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
            onClick={reset}
            size={36}
          />
          <Home onClick={() => redirect("/")} size={36} />
        </div>
      </div>
    </div>
  );
};

export default Error;

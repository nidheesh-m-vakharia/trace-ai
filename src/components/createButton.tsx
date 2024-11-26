"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CreateButton = () => {
  const router = useRouter();

  const goToCreate = () => {
    router.push("/create");
  };

  return <Button onClick={goToCreate}>Create!</Button>;
};

export default CreateButton;

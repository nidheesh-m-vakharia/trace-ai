"use client";
import {
  CreatePageForm,
  CreatePageInputArea,
  CreatePageOutput,
} from "@/components/create-page/createPage";

const CreatePage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting");
  };
  return (
    <CreatePageForm className="mt-10" onSubmit={handleSubmit}>
      <CreatePageInputArea />
      <CreatePageOutput>
        <p>Output text comes here</p>
      </CreatePageOutput>
    </CreatePageForm>
  );
};

export default CreatePage;

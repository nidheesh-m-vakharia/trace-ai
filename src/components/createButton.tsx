"use client"

import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";


const CreateButton = () => {
    return (
        <Button onClick={()=>redirect("/create")}>
            Create!
        </Button>
    )
}

export default CreateButton;
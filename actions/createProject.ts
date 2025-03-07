"use server";
import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  url: z.string().url({ message: "Invalid url format" }),
});

export type createProjectTypes={
    name?:string;
    url?:string;
    errors?:{
        name:string[];
        url:string[];
    }
}

export async function handleForm(_prevState:createProjectTypes, formData:FormData, session:any)
{
    const name=formData.get('name') as string;
    const url=formData.get('url') as string;

    const validatedFields=createProjectSchema.safeParse({
        name,
        url
    })

    if(!validatedFields.success){
        return{
            name,
            url,
            error:validatedFields.error.flatten().fieldErrors,
        }
    }

    return{
        name,
        url,
        error:[]
    }
}
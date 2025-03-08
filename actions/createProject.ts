"use server";
import prisma from "@/lib/prisma";
import { z } from "zod";

// Define the schema
const createProjectSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  url: z.string().url({ message: "Invalid url format" }),
});

// Define types that match what useActionState expects
type FormState = {
  name: string;
  url: string;
  errors: {
    name?: string[] | undefined;
    url?: string[] | undefined;
  };
};

// Server action function
export async function handleForm(
  state: FormState,
  formData: FormData,
  session: any
): Promise<FormState> {
  const name = formData.get("name") as string;
  const url = formData.get("url") as string;

  const validatedFields = createProjectSchema.safeParse({
    name,
    url,
  });

  if (!validatedFields.success) {
    return {
      name: name || state.name,
      url: url || state.url,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {

    if (session && session?.user && session?.id) {
      prisma.project;
      await prisma.project.create({
        data: {
          name: name,
          url: url,
          userId: session?.id,
        },
      });
    } else console.log("Authentication is required");
  } catch (error) {
    console.log(`Error :${error}`);
  }
  return {
    name,
    url,
    errors: { name: undefined, url: undefined },
  };
}

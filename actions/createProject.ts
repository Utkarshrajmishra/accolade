import { z } from "zod";

// Define the schema
export const createProjectSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  url: z.string().url({ message: "Invalid url format" }),
});

// Define types that match what useActionState expects
export type FormState = {
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
  formData: FormData
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

  return {
    name,
    url,
    errors: { name: undefined, url: undefined },
  };
}

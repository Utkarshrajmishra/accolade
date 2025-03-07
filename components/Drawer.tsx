"use client";
import { handleForm } from "@/actions/createProject";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useActionState } from "react";

export function Drawer() {
  const [state, action] = useActionState(handleForm,{
    name:"",
    url:"",
    errors:{name:[], url:[]}
  });
  return (
    <div className="rounded-xl">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex gap-1 bg-emerald-800 hover:bg-emerald-900 rounded items-center">
            <Plus />
            Add Project
          </Button>
        </DialogTrigger>
        <DialogContent className="md:w-[425px] w-[350px] font-inter  bg-neutral-950 border border-neutral-700 rounded">
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
            <DialogDescription>
              Copy and paste your LinkedIn profile url and the job url from
              LinkedIn. Don't forget to double check it.
            </DialogDescription>
          </DialogHeader>
          <form action={action}>
            <div className="grid gap-4 py-1">
              <div className="flex flex-col items-start gap-1 text-sm">
                <Label htmlFor="name" className="text-right">
                  Project name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Project Name"
                  className="col-span-3 bg-neutral-900 rounded border outline-none border-neutral-500"
                />
                {state?.errors?.name && (
                  <p className="text-red-500 text-xs">{state.errors.name}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 text-sm items-start">
                <Label htmlFor="url" className="text-right">
                  Project Url
                </Label>
                <Input
                  id="url"
                  name="url"
                  placeholder="https://example.com"
                  className="col-span-3 bg-neutral-900 rounded border border-neutral-500"
                />
                {state?.errors?.url && (
                  <p className="text-red-500 text-xs">{state.errors.url}</p>
                )}
              </div>
            </div>
            <DialogFooter className="mt-2">
              <Button
                className="bg-emerald-800 hover:bg-emerald-900 rounded items-center"
                type="submit"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

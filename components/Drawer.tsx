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

export function Drawer() {
    
  return (
    <div className="rounded-xl">
      <Dialog>
        <DialogTrigger asChild>
          <button className="hidden md:flex text-black items-center  gap-1 text-sm font-semi py-[4px] px-2 rounded bg-white">
            Get Started
          </button>
        </DialogTrigger>
        <DialogContent className="md:w-[425px] w-[350px] font-inter  bg-neutral-950 border border-neutral-700 rounded-xl">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Copy and paste your LinkedIn profile url and the job url from
              LinkedIn. Don't forget to double check it.
            </DialogDescription>
          </DialogHeader>
          <form action="/">
            <div className="grid gap-4 py-1">
              <div className="flex flex-col items-start gap-1 text-sm">
                <Label htmlFor="name" className="text-right">
                  LinkedIn Profile
                </Label>
                <Input
                  id="name"
                  placeholder="https://www.linkedin.com/in/"
                  className="col-span-3 bg-neutral-900 rounded border outline-none focus:border-neutral-500 border-neutral-500"
                />
              </div>
              <div className="flex flex-col gap-1 text-sm items-start">
                <Label htmlFor="username" className="text-right">
                  LinkedIn Job
                </Label>
                <Input
                  id="username"
                  placeholder="https://www.linkedin.com/jobs/"
                  className="col-span-3 bg-neutral-900 rounded border border-neutral-500"
                />
              </div>
            </div>
            <DialogFooter className="mt-2">
              <Button className="rounded" type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

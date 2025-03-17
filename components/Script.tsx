import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Script = () => {
  return (
    <>
      <div className="flex font-inter items-center justify-between">
        <p className="text-zinc-100 font-inter text-xl font-[600]">Dashboard</p>
        <div>
          <p className="bg-neutral-900 items-center gap-3 flex rounded-lg py-1 px-3  text-xs  text-zinc-300 hover:text-zinc-50 cursor-pointer border-neutral-800 border border-1">
            Last 30 days <ChevronDown className="size-4"/>
          </p>
        </div>
      </div>
      <section className=" border  mt-4 border-1 font-inter border-neutral-800 rounded-xl py-4 px-6 bg-neutral-950">
        <p className="text-xl tracking-wide text-zinc-100 font-[500]">
          Install accolade on your website
        </p>
        <p className="text-zinc-400   mt-1 ">
          It takes 1-3 mintues to complete. Add our script to your websites head
          section to start getting insights within your dashboard, refresh this
          page when your're done.
        </p>
        <div className="mt-1 flex justify-end p-2 gap-3">
          <Button className="text-neutral-800 border-1 border border-neutral-800 bg-zinc-200 h-9">
            Refresh
          </Button>

          <Button className="bg-emerald-800 border-1 border border-emerald-950 h-9">
            Install
          </Button>
        </div>
      </section>
    </>
  );
};

export default Script;

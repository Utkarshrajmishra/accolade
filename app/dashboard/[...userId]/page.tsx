import { Drawer } from "@/components/Drawer";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

const DashboarPage = () => {
  return (
    <>
      <div className="bg-neutral-950 font-inter w-full p-4 h-screen flex flex-col">
        <div>
          <p className="text-neutral-300 text-xl font-semibold">Dashboard</p>
        </div>

        <div className="flex justify-between mt-4">
          <div className="relative mb-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-[360px] bg-zinc-900/30 border border-zinc-800/30 rounded-lg pl-9 pr-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div>
          <Drawer/>
        </div>

        {/* Scrollable Content */}
        <div className="mt-3 flex-1 overflow-y-auto pb-4">
          <div className="grid grid-cols-5 gap-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-36 rounded-md bg-neutral-900  w-52 border border-neutral-700"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboarPage;

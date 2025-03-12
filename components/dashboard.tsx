import { auth } from "@/auth";
import { Drawer } from "@/components/Drawer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search, Trash } from "lucide-react";

const fetchData = async (userId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/db/getprojects?userId=${userId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      console.log("Some error occured");
    }
    return response.json();
  } catch (error) {
    console.log(`Error ${error}`);
  }
};

const Dashboard = async ({ userId }: { userId: string }) => {
  const session = await auth();
  const projects = await fetchData(userId);

  return (
    <>
      <div className="bg-neutral-950 font-inter  w-full p-4  flex flex-col">
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
          <Drawer session={session} />
        </div>
                {/* Scrollable Content */}
        {projects.length > 0 ? (
          <div className="mt-3 flex-1 overflow-y-auto pb-4">
            <div className="grid grid-cols-4 gap-2">
              {projects.map((project: any) => (
                <div
                  key={project.id}
                  className="h-fit rounded flex flex-col items-between justify-between p-4 bg-neutral-900 hover:border-zinc-500 w-68 border border-neutral-700"
                >
                  {/* <BriefcaseBusiness className="size-4" /> */}
                  <div className="">
                    <div className="flex justify-between  items-center">
                      <p className="text-zinc-200">{project.name}</p>
                      <Trash className="size-4 text-red-400 pointer-cursor" />
                    </div>
                    <p className="text-xs mt-1 text-zinc-400">
                      DSA practice webapp
                    </p>
                  </div>
                  <div className="flex mt-3 items-end justify-between">
                    <Button className="bg-emerald-800 text-xs hover:bg-emerald-900 rounded h-fit px-6">
                      Get insight
                    </Button>
                    <a href={project.url} target="_blank">
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-[100%] flex items-center justify-center">
            <div>
              <p className="mb-1 text-zinc-300 text-center">No project found</p>
              <Drawer session={session} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;

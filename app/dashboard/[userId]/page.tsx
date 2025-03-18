import Charts from "@/components/Charts";
import { IoIosLaptop, IoIosTrendingUp, IoMdTime } from "react-icons/io";
import { PiGraph, PiSignOut } from "react-icons/pi";

const Dashboard = () => {
  return (
    <section className="mt-10">
      <div>
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <div className="w-10 h-10 border border-1 border-neutral-600 rounded-lg bg-neutral-900/40 items-center flex justify-center">
              <IoIosLaptop className="size-5 text-zinc-100 " />
            </div>
            <div className="flex gap-1">
              <p className="text-3xl text-zinc-50">0</p>
              <div className="text-xs flex flex-col text-zinc-400">
                <p className="flex gap-1 items-center text-emerald-500">
                  <IoIosTrendingUp className=" size-4" /> 0.0%
                </p>
                <p className=" text-zinc-400">Vs prev. 30 days</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 border border-1 border-neutral-600 rounded-lg bg-neutral-900/40 items-center flex justify-center">
              <IoIosLaptop className="size-5 text-zinc-100 " />
            </div>
            <div className="flex gap-1">
              <p className="text-3xl text-zinc-50">0</p>
              <div className="text-xs flex flex-col text-zinc-400">
                <p className="flex gap-1 items-center text-emerald-500">
                  <IoIosTrendingUp className=" size-4" /> 0.0%
                </p>
                <p className=" text-zinc-400">Vs prev. 30 days</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 border border-1 border-neutral-600 rounded-lg bg-neutral-900/40 items-center flex justify-center">
              <IoIosLaptop className="size-5 text-zinc-100 " />
            </div>
            <div className="flex gap-1">
              <p className="text-3xl text-zinc-50">0</p>
              <div className="text-xs flex flex-col text-zinc-400">
                <p className="flex gap-1 items-center text-emerald-500">
                  <IoIosTrendingUp className=" size-4" /> 0.0%
                </p>
                <p className=" text-zinc-400">Vs prev. 30 days</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 border border-1 border-neutral-600 rounded-lg bg-neutral-900/40 items-center flex justify-center">
              <IoIosLaptop className="size-5 text-zinc-100 " />
            </div>
            <div className="flex gap-1">
              <p className="text-3xl text-zinc-50">0</p>
              <div className="text-xs flex flex-col text-zinc-400">
                <p className="flex gap-1 items-center text-emerald-500">
                  <IoIosTrendingUp className=" size-4" /> 0.0%
                </p>
                <p className=" text-zinc-400">Vs prev. 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 grid  grid-cols-2 gap-2 mt-8">
        <Charts heading="Visits" />
        <Charts heading="Pages" />
        <Charts heading="Sources" />
        <Charts heading="Browsers" />
        <Charts heading="OS" />
        <Charts heading="Location" />
      </div>
    </section>
  );
};

export default Dashboard;

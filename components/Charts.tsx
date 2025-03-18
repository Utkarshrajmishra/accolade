import { IoIosTrendingUp } from "react-icons/io";

const Charts = ({ heading }: { heading: string }) => {
  return (
    <div className="w-[510px] font-inter mt-2 p-3 border border-1 border-neutral-800 rounded-lg bg-neutral-900/40 h-[300px]">
      <div className="flex justify-between">
        <p className="text-sm text-zinc-400">{heading}</p>
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
  );
};

export default Charts;

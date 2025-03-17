import { VscDashboard } from "react-icons/vsc";
import { GoPeople } from "react-icons/go";
import { SlSettings } from "react-icons/sl";
import { BiLogoJavascript } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { PiSpeakerSimpleHigh } from "react-icons/pi";
const Sidebar = () => {
  return (
    <section className="text-sm text-zinc-500 font-inter h-screen w-[15%] border-r border-1 border-neutral-300 justify-between flex flex-col p-4">
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-4 text-neutral-800 bg-neutral-200/40 p-2">
        <VscDashboard className="size-5"/>
        Dashboard</p>
        <p className="flex gap-4 items-center hover:bg-neutral-200/40 p-2">
        <GoPeople className="size-4"/>
        Visitors</p>
        <p className="hover:bg-neutral-200/40 p-2 flex gap-4">
        <BiLogoJavascript className="size-5"/>
        Widgets</p>
        <p className="flex items-center gap-4 hover:bg-neutral-200/40 p-2">
        <PiSpeakerSimpleHigh className="size-5"/>
        Feedback</p>
      </div>
      <div className="flex  flex-col gap-1">
        <p className="hover:bg-neutral-200/40 p-2 flex items-center gap-4">
        <SlSettings className="size-4"/>
        Setting</p>
        <p className="hover:bg-neutral-200/40 p-2 flex items-center gap-4">
        <IoDocumentText className="size-4"/>
        Documentation</p>
      </div>
    </section>
  );
};

export default Sidebar;

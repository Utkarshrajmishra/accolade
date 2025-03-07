import { auth } from "@/auth";
import Image from "next/image";

const Header = async () => {
  const session = await auth();

  return (
    <div className="bg-neutral-950 font-inter w-full px-4 py-2  h-[59px] border-b border-b-1 border-neutral-800">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-dark.png"
            width={40}
            height={40}
            alt="Logo"
            className="border rounded-xl border-neutral-800"
          />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm font-inter text-zinc-200">{`Hey, ${session?.user?.name?.substring(
            0,
            session?.user?.name.indexOf(" ")
          )}`}</p>
          <Image
            src={session?.user?.image || "./vercel.png"}
            alt="Profile"
            width={38}
            height={35}
            className="rounded-full border border-1 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

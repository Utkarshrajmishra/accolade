"use client";
import { useSession } from "next-auth/react";
import { User, LogOut, Mail, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Profile = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <section className="w-full bg-zinc-900/30 hover:bg-zinc-800/50 transition-all duration-200 border border-zinc-800/30 rounded-lg p-2.5 flex items-center justify-between group">
          <div className="flex items-center gap-2">
            {/* <div className="size-5 rounded bg-indigo-600 flex items-center justify-center">
              <span className="text-xs font-medium text-white">U</span>
            </div> */}
            <span className="text-[0.84rem] text-zinc-300 group-hover:text-white">
              Utkarsh&apos;s Workspace
            </span>
          </div>
          <ChevronDown className="size-4 text-zinc-500 group-hover:text-zinc-400" />
        </section>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit font-inter bg-black text-zinc-400 border-neutral-700 rounded-lg shadow-md">
        <DropdownMenuLabel className="text-zinc-200">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-800 h-[1px] " />
        <DropdownMenuGroup>
          {/* Fixed hover styles for menu items */}
          <DropdownMenuItem className="focus:bg-zinc-800 hover:bg-zinc-800/30 focus:text-white hover:text-white hover:border border-neutral-800  cursor-pointer transition-all">
            <User className="mr-2 h-4 w-4" />
            <p>{session?.user?.name}</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:border border-neutral-800 focus:bg-zinc-800 hover:bg-zinc-800/30 focus:text-white hover:text-white cursor-pointer transition-all">
            <Mail className="mr-2 h-4 w-4" />
            <p>{session?.user?.email}</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-neutral-800 h-[1px]" />
          <DropdownMenuItem className="hover:border border-neutral-800 focus:bg-red-500/20 hover:bg-red-500/20 cursor-pointer transition-all">
            <form className="w-full">
              <button type="submit" className="flex gap-2 w-full text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;

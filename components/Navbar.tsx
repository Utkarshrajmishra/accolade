import Link from "next/link";
import Wrapper from "./global/Wrapper";
import Icons from "./global/Icons";
import { auth, signIn } from "@/auth";
import { Menu } from "lucide-react";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="relative w-full h-fulll ">
      <div className="z-[99] fixed pointer-events-none inset-x-0 h-[88px]  backdrop-blur-sm [mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]"></div>
      <header className="fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform  ">
        {" "}
        <Wrapper className="backdrop-blur-lg  rounded-xl lg:rounded-2xl bg-[rgba(10,10,10,0.8)] border border-[rgba(124,124,124,0.2)] px- md:px-2 flex items-center justify-start h-full">
          <div className="flex items-center py-2 justify-between w-full sticky mt-[7px] lg:mt-auto mb-auto inset-x-0">
            <div className="flex items-center gap-2 lg:flex-none pl-1">
              <Link href="/" className="text-lg font-semibold text-foreground">
                <Icons.icon className="w-auto h-5" />
              </Link>
              <div className="items-center hidden ml-4 lg:flex text-[0.95rem] font-normal rounded-md text-zinc-400 gap-8">
                <p className="hover:text-zinc-50 cursor-pointer  w-max hover:bg-none">
                  How it Works
                </p>
                <p className="hover:text-zinc-50  w-max hover:bg-none">
                  Features
                </p>
                <p className="hover:text-zinc-50  w-max hover:bg-none">
                  Features
                </p>
                <p className="hover:text-zinc-50  w-max hover:bg-none">
                  Pricing
                </p>
                <p className="hover:text-zinc-50 w-max hover:bg-none">
                  Resources
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="inline-block md:hidden">
                <Menu />
              </div>
              {session && session?.user ? (
                <div className="flex gap-3">
                  <p className="text-zinc-400 lg:flex text-[0.95rem] font-normal">{`Hey, ${session.user.name?.substring(
                    0,
                    session.user.name?.indexOf(" ")
                  )}`}</p>
                  <img
                    src={session.user.image || "./next.svg"}
                    className="h-7 w-7 cursor-pointer border bordeer-white rounded-full"
                  />
                </div>
              ) : (
                <form
                  action={async () => {
                    "use server";
                    await signIn("google");
                  }}
                  className="pr-1 flex gap-4"
                >
                  <button
                    type="submit"
                    className="text-white items-center flex gap-1 text-sm font-semi py-[4px] px-4 rounded bg-neutral-900"
                  >
                    Login
                  </button>
                </form>
              )}
            </div>
          </div>
        </Wrapper>
      </header>
    </nav>
  );
};

export default Navbar;

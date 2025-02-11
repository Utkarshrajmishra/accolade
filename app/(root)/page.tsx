import Wrapper from "@/components/global/Wrapper";
import { Spotlight } from "@/components/ui/Spotlight";
import {ArrowRightIcon } from "lucide-react";
import { MarqueeComp } from "@/components/ui/Marquee";
export default async function Home() {
  return (
    <>
      {" "}
      <main
        id="background"
        className="flex-none h-screen overflow-y-hidden -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full z-[-10]0" />

        <Wrapper className="relative   h-screen flex-col gap-6 mt-6 flex justify-center  items-center">
          <Spotlight
            className="-top-40 left-0 md:-left-20 md:-top-0"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <div className="pl-2 pr-1 py-1 mt-10 rounded-full border border-[rgba(124,124,124,0.2)] backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
            <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>{" "}
            </div>
            <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
              Build for the future
              <span className="text-xs text-zinc-100 px-1.5 py-0.5 rounded-full bg-gradient-to-bl from-neutral-900 via-neutral-600 to-neutral-900 flex items-center justify-center">
                What&apos;s new
                <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
              </span>
            </span>
          </div>
          <div>
            <h1 className="text-5xl font-bold md:tracking-tighter text-center text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl font-jakarta md:leading-loose">
              <p>Break into Your Dream Job with the Perfect Cold Email</p>
            </h1>
            <p className="px-8 text-center leading-wide  text-xl text-zinc-400 mt-5">
              Turn LinkedIn job descriptions and your resume into personalized
              cold emails with the help of AI. Boost your outreach, stand out to
              recruiters, and land more interviews—effortlessly!
            </p>
          </div>
          <form className="flex gap-4 my-4">
            <button className="bg-white text-black py-[6px] px-4 rounded">
              Start for free
            </button>
            <button className="py-[6px] px-4 rounded border border-[rgba(124,124,124,0.2)]">
              How it works
            </button>
          </form>
          <MarqueeComp />
        </Wrapper>
      </main>
    </>
  );
}

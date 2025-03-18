import type React from "react";
import Sidebar from "./@sidebar/page";
import Script from "@/components/Script";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] w-full bg-gradient-to-b from-neutral-950 to-black flex px-6">
      <Sidebar />
      <div className="p-6 h-screen overflow-y-auto">
        <Script/>
        {children}</div>
    </div>
  );
};

export default Layout;

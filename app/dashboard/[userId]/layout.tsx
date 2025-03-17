import type React from "react";
import Sidebar from "./@sidebar/page";
import Script from "@/components/Script";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] w-full bg-zinc-50 flex px-6">
      <Sidebar />
      <div className="p-6">
        <Script/>
        {children}</div>
    </div>
  );
};

export default Layout;

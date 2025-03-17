import type React from "react";
import Sidebar from "./@sidebar/page";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] w-full bg-zinc-50">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;

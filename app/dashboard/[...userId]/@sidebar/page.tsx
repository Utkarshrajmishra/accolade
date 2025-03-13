"use client";

import {
  Bell,
  BriefcaseBusiness,
  ChevronDown,
  Home,
  BadgeIcon as IdCard,
  Library,
  Plus,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Profile from "@/components/Profile";

const Menu = [
  {
    id: 1,
    name: "Dashboard",
    icon: <Home className="size-[18px]" />,
  },
  {
    id: 2,
    name: "My Library",
    icon: <Library className="size-[18px]" />,
  },
  {
    id: 3,
    name: "Notifications",
    icon: <Bell className="size-[18px]" />,
    badge: 3,
  },
  {
    id: 4,
    name: "Settings",
    icon: <Settings className="size-[18px]" />,
  },
  {
    id: 5,
    name: "Billing",
    icon: <IdCard className="size-[18px]" />,
  },
];

const Projects = [
  {
    id: 1,
    name: "Algochunk",
    members: 4,
    status: "active",
  },
  {
    id: 2,
    name: "KeyboardWars",
    members: 6,
    status: "active",
  },
  {
    id: 3,
    name: "Get AI News",
    members: 3,
    status: "draft",
  },
  {
    id: 4,
    name: "Get AI News",
    members: 3,
    status: "draft",
  },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [activeProject, setActiveProject] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = Projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="w-[280px] font-inter bg-white border-r border-r-zinc-800/30 flex flex-col h-screen">
      {/* Top Section */}
      <div className="flex-none px-4 py-2">
        {/* Workspace Selector */}
        <Profile />
      </div>
      <div className="border-t border-zinc-800/30" />
      <div className="flex-none mt-2 px-4 space-y-6">
        <div>
          <h2 className="px-2 text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-2">
            Menu
          </h2>
          <nav className="space-y-1">
            {Menu?.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-[6px] rounded-lg text-[0.84rem] transition-all text-zinc-500 duration-200",
                  activeItem === item.id
                    ? "bg-blue-50 border-1 border text-neutral-800 font-medium"
                    : "text-neutral-600  hover:text-zinc-800"
                )}
              >
                {item.icon}
                <span>{item.name}</span>
                {item.badge && (
                  <span className="ml-auto bg-emerald-400 text-white text-xs font-medium p-1 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-zinc-800/30 mt-2" />
      <div className="flex-1 mt-3 px-4 overflow-hidden flex flex-col">
        <div className="flex-none">
          <div className="flex items-center justify-between px-2 mb-2">
            <h2 className="text-xs font-semibold text-neutral-800 uppercase tracking-wider">
              Projects
            </h2>
            <button className="text-neutral-600 hover:text-zinc-800 transition-colors">
              <Plus className="size-4" />
            </button>
          </div>

          {/* Search Projects
          <div className="relative mb-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/30 border border-zinc-800/30 rounded-lg pl-9 pr-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div> */}
        </div>

        <nav className="flex gap-1 flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent h-[100px]">
          {filteredProjects?.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveProject(item.id)}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-[6px] rounded-md text-[0.85rem] transition-all duration-200",
                activeProject === item.id
                  ? "bg-blue-50 border  text-neutral-800"
                  : "text-neutral-600  hover:text-neutral-800"
              )}
            >
              <BriefcaseBusiness className="size-[18px]" />
              <div className="flex-1 text-left">
                <span>{item.name}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

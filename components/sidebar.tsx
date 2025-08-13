import React from "react";
import { Users, FileText } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    // Hide sidebar on screens smaller than lg (1024px)
    <div className="hidden lg:flex lg:w-64 flex-shrink-0 bg-white shadow-lg flex-col">
      <div className="p-6 bg-orange-500">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
        <p className="text-orange-100 text-sm">Manage your platform</p>
      </div>

      <nav className="mt-6 flex-1">
        <div className="px-4 space-y-2">
          <button
            onClick={() => setActiveTab("users")}
            className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
              activeTab === "users"
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-600 hover:text-white"
            }`}
          >
            <Users className="mr-3 h-5 w-5" />
            Users Management
          </button>

          <button
            onClick={() => setActiveTab("posts")}
            className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
              activeTab === "posts"
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-600 hover:text-white"
            }`}
          >
            <FileText className="mr-3 h-5 w-5" />
            Posts Management
          </button>
        </div>
      </nav>
    </div>
  );
}

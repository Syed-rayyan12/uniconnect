"use client";

import React from "react";
import Sidebar from "@/components/sidebar";
import AdminDashboard from "@/components/main-dashboard";
 // <-- Import from app/layout path

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = React.useState("users");

  return (
    <div className="flex min-h-screen bg-gray-50 pt-16">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      
      />

      {/* Right section */}
      <div className="flex flex-col flex-1 overflow-auto">
        {/* Navbar from app/layout */}
       

        {/* Main content */}
        <main className="flex-1  p-4">
          <AdminDashboard  activeTab={activeTab}  />
        </main>
      </div>
    </div>
  );
}

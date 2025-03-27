"use client";
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import TableOfContents from '@/components/TableOfContents';
import React, { ReactNode, useState } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [tocCollapsed, setTocCollapsed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-1 pt-16">
        {/* Sidebar (siempre visible) */}
        <aside
          className={`fixed h-[calc(100vh-4rem)] top-16 left-0 bg-[#e6e7ee] overflow-visible transition-all duration-300 z-40 ${
            sidebarCollapsed ? 'w-16' : 'w-52'
          }`}
        >
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </aside>

        {/* Contenido principal */}
        <main
          className={`flex-1 min-h-[calc(100vh-4rem)] overflow-y-auto transition-all duration-300 
            ${sidebarCollapsed ? 'ml-16' : 'ml-52'}
            ${tocCollapsed ? 'mr-0 lg:mr-10' : 'mr-0 lg:mr-64'}
          `}
        >
          <div className="max-w-4xl mx-auto p-6">
            {children}
          </div>
        </main>

        {/* TableOfContents (solo visible en lg+) */}
        <div
          className={`fixed right-0 top-16 h-[calc(100vh-4rem)] transition-all duration-300 z-40 hidden lg:block ${
            tocCollapsed ? 'w-10' : 'w-64'
          }`}
        >
          <TableOfContents
            collapsed={tocCollapsed}
            onToggleCollapse={() => setTocCollapsed(!tocCollapsed)}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
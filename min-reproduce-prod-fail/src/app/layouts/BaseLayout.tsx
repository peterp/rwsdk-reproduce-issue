// BaseLayout.tsx
"use client";

import React, { useState } from "react";
import { RequestInfo } from "rwsdk/worker";
// import { isAuthenticated, getUser, getTokenInfo } from "@/utils/auth";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { SideNav } from "./SideNav";

interface BaseLayoutProps {
  children: React.ReactNode;
  ctx: RequestInfo["ctx"];
  requireAuth?: boolean;
  title?: string;
}

export const BaseLayout = ({
  children,
  ctx,
  requireAuth = true,
  title = "RedwoodJS App",
}: BaseLayoutProps) => {
  // State to control sidebar visibility - now unified for all screen sizes
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check authentication
  //   const authenticated = isAuthenticated(ctx);
  //   const user = authenticated ? getUser(ctx) : null;
  //   const tokenInfo = authenticated ? getTokenInfo(ctx) : null;
  const authenticated = true;
  const user = null;
  const tokenInfo = null;

  // If authentication is required but user is not authenticated, redirect to login
  if (requireAuth && !authenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Access Denied</h2>
          <p>You must be logged in to view this page.</p>
          <a
            href="/login"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Global styles are imported at the top, no need for a <link> tag */}
      <div className="layout-container min-h-screen flex flex-col bg-gray-100 overflow-x-hidden">
        <Header user={user} toggleSidebar={toggleSidebar} />

        <div className="flex flex-1">
          {/* Sidebar overlay - visible on all screen sizes when sidebar is open */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-opacity-30  z-20"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}

          {/* Simplified Sidebar component - now same behavior on all screen sizes */}
          <SideNav
            user={user}
            isOpen={isSidebarOpen}
            closeSidebar={() => setIsSidebarOpen(false)}
          />

          {/* Main content - no more conditional margin */}
          <div className="flex-1">
            <Main title={title}>{children}</Main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

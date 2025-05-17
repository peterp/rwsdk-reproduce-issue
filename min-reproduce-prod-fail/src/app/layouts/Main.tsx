

import React from "react";

interface MainProps {
  children: React.ReactNode;
  title?: string;
}

export const Main = ({ children, title }: MainProps) => {
  return (
    <main className="p-4 md:p-6 flex-1">
      {title && <h1 className="text-2xl font-bold mb-6">{title}</h1>}
      {children}
    </main>
  );
};

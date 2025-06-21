import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen w-full grid-cols-[256px_1fr] grid-rows-[auto_1fr] bg-background">
      {/* Sidebar: Spans both rows in the first column */}
      <div className="row-span-2 border-r border-border">
        <Sidebar />
      </div>
      
      {/* Header: First row in the second column */}
      <Header />
      
      {/* Main Content: Second row in the second column */}
      <main className="overflow-y-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;

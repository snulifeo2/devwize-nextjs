// src/app/_components/client-sidebar-layout.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import HamburgerButton from './hamburger-button';

interface ClientSideBarLayoutProps {
  children: React.ReactNode;
  categories: string[];
}

const ClientSideBarLayout: React.FC<ClientSideBarLayoutProps> = ({ children, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div className="relative flex min-h-screen font-maruburi">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} categories={categories} />
      {!isOpen && (
        <HamburgerButton setIsOpen={setIsOpen} />
      )}
      <div className={`flex-1 p-4 transition-all duration-300 ${isOpen && window.innerWidth >= 768 ? 'ml-64' : ''}`}>{children}</div>
    </div>
  );
};

export default ClientSideBarLayout;

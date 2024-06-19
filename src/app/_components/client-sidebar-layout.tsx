"use client";

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './sidebar';
import HamburgerButton from './hamburger-button';

interface ClientSideBarLayoutProps {
  children: React.ReactNode;
  categories: string[];
}

const ClientSideBarLayout: React.FC<ClientSideBarLayoutProps> = ({ children, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth < 768 && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, []);

  return (
    <div className="relative flex min-h-screen font-maruburi">
      <div ref={sidebarRef}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} categories={categories} />
      </div>
      {!isOpen && (
        <HamburgerButton setIsOpen={setIsOpen} />
      )}
      <div className={`flex-1 p-4 transition-all duration-300 ${isOpen && window.innerWidth >= 768 ? 'ml-64' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ClientSideBarLayout;

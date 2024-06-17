// src/app/_components/sidebar.tsx
"use client";

import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <nav
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-20`}
    >
      <button
        className="mb-4 md:hidden"
        onClick={() => setIsOpen(false)}
        style={{ width: '2.5rem', height: '2.5rem', lineHeight: '1', textAlign: 'center', padding: '0.5rem' }}
      >
        ✕
      </button>
      <ul>
        <li className="mb-4">
          <Link href="/" className="text-lg">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/webmsx?ROM=/webmsx/rom/1942.rom" className="text-lg">
            WebMSX
          </Link>
        </li>
        {/* 다른 메뉴 항목을 추가할 수 있습니다 */}
      </ul>
    </nav>
  );
};

export default Sidebar;

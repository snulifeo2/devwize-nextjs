// src/app/_components/sidebar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGamepad, FaTag } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categories: string[];
}

// 랜덤 색상 생성 함수
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, categories }) => {
  return (
    <nav
      className={`fixed inset-y-0 left-0 w-64 bg-stone-800 text-white p-4 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-20 overflow-y-auto font-maruburi-bold`}
    >
      <button
        className="mb-4 md:hidden"
        onClick={() => setIsOpen(false)}
        style={{ width: '2.5rem', height: '2.5rem', lineHeight: '1', textAlign: 'center', padding: '0.5rem' }}
      >
        ✕
      </button>
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <Link href="/">
            <Image
              src="/assets/blog/etc/sidebar-image.png"
              alt="Home"
              width={200}
              height={50}
              className="rounded-lg border-4 border-white"
            />
          </Link>
        </div>
      </div>
      
      <ul className="pl-4">
        {categories.map(category => (
          <li key={category} className="mb-4 flex items-center">
            <FaTag className="mr-2 text-2xl" style={{ color: getRandomColor(), flexShrink: 0 }} />
            &nbsp;&nbsp;
            <Link href={`/categories/${category}`} className="text-lg flex-grow max-w-[calc(100%-2rem)]">
              <span className="block whitespace-normal break-words max-w-full">
                {category}
              </span>
            </Link>
          </li>
        ))}
        <li className="mb-4 flex items-center">
          <FaGamepad className="mr-2 text-2xl" style={{ color: getRandomColor(), flexShrink: 0 }} />
          &nbsp;&nbsp;
          <Link href="/webmsx?ROM=/webmsx/rom/mygame.rom" className="text-lg flex-grow max-w-[calc(100%-2rem)]">
            <span className="block whitespace-normal break-words max-w-full">
              Retro Game Development
            </span>
          </Link>
        </li>
        {/* 다른 메뉴 항목을 추가할 수 있습니다 */}
      </ul>
    </nav>
  );
};

export default Sidebar;

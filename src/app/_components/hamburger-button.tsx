// src/app/_components/hamburger-button.tsx
"use client";

import React from 'react';

interface HamburgerButtonProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ setIsOpen }) => {
  return (
    <button
      className="fixed top-0 left-0 z-30 bg-white p-2 m-4 rounded"
      onClick={() => setIsOpen(true)}
      style={{ width: '2.5rem', height: '2.5rem', lineHeight: '1', textAlign: 'center' }}
    >
      ☰
    </button>
  );
}

export default HamburgerButton;

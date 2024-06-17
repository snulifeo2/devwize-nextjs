// src/app/webmsx/page.tsx
"use client";

import React, { useEffect } from 'react';

const WebMSXPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/webmsx/wmsx.js'; // WebMSX 스크립트 파일 경로
    script.async = true;

    script.onload = () => {
      if (window.WMSX) {
        // WebMSX 초기화
        //window.WMSX.ROM = '/webmsx/rom/1942.rom'; // 원하는 ROM 파일 경로.... 이거 아니네...
        window.WMSX.start();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="wmsx" style={{ textAlign: 'center', margin: '20px auto 0' }}>
      <div id="wmsx-screen" style={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, .7)' }}></div>
    </div>
  );
};

export default WebMSXPage;

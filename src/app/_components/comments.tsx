'use client';

import React, { useEffect } from "react";

type CommentsProps = {};

const Comments: React.FC<CommentsProps> = () => {
  useEffect(() => {
    const scriptContainer = document.getElementById("utterances-container");
    if (scriptContainer) {
      // 'utterances-container'에 이미 스크립트가 추가되었는지 확인합니다.
      if (scriptContainer.children.length > 0) return;

      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "snulifeo2/devwize-comments");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("label", "[reply]");
      script.setAttribute("theme", "github-light");
      script.crossOrigin = "anonymous";
      script.async = true;

      scriptContainer.appendChild(script);
    }
  }, []);

  return <div id="utterances-container" />;
};

export default Comments;

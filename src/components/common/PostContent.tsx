"use client";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const PostContent = ({ content }: { content: string }) => {
  const [cleanHtml, setCleanHtml] = useState<string>("");
  useEffect(() => {
    const html = DOMPurify.sanitize(content);
    setCleanHtml(html);
  }, [content]);
  return (
    <div
      className={
        "text-[10px] sm:text-[12px] md:text-[16px]" +
        " pl-[5px] py-[20px] " +
        "min-h-[100px] sm:min-h-[150px] md:min-h-[200px]"
      }
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default PostContent;

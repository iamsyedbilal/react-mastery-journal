"use client";

import { useState } from "react";

export default function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = children.split(" ");
  const isTruncated = words.length > 40;
  const displayText = isExpanded
    ? children
    : words.slice(0, 40).join(" ") + (isTruncated ? "..." : "");

  return (
    <span>
      {displayText}
      {isTruncated && (
        <button
          className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
          onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </span>
  );
}

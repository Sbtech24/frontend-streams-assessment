"use client";

import data from "@/data/bookmarks.json";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Bookmark, Clipboard } from "lucide-react";

function BookmarkItem({ title }: { title: string }) {
  return (
    <div className="group relative flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-[#EFEFFF]">
      <p className="text-sm text-[#4F566B] truncate">
        {title.length > 26 ? title.slice(0, 26) + "..." : title}
      </p>

      {/* Hover icons */}
      <div className="invisible flex gap-2 group-hover:visible">
        <Bookmark size={14} className="text-[#959AA6] hover:text-[#625AFA]" />
        <Clipboard size={14} className="text-[#959AA6] hover:text-[#625AFA]" />
      </div>
    </div>
  );
}


export function Bookmarks() {
  const [openSections, setOpenSections] = useState({
    today: true,
    sevenDays: false,
    november: true,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <aside className="relative h-dvh w-72 border rounded-sm bg-white px-3 py-4 shadow-md">
      
      <h2 className="mb-2 text-xs font-medium uppercase tracking-wide text-[#959AA6]">
        Bookmarks
      </h2>

      <div className="mb-6 space-y-1">
        {data.bookmarks.slice(0, 2).map((item) => (
          <BookmarkItem key={item.id} title={item.title} />
        ))}
      </div>

     
      <h2 className="mb-2 text-xs font-medium uppercase tracking-wide text-[#959AA6]">
        History
      </h2>

      
      <div className="mb-3">
        <button
          onClick={() => toggleSection("today")}
          className="flex w-full items-center justify-between rounded-md px-1 py-1 text-sm font-medium text-[#4F566B] hover:bg-gray-50"
        >
          Today
          <ChevronDown
            size={14}
            className={`transition-transform ${
              openSections.today ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.today && (
          <div className="mt-1 space-y-1">
            {data.bookmarks
              .filter((item) => item.group === "Today")
              .map((item) => (
                <BookmarkItem key={item.id} title={item.title} />
              ))}
          </div>
        )}
      </div>

     
      <div className="mb-3">
        <button
          onClick={() => toggleSection("sevenDays")}
          className="flex w-full items-center justify-between rounded-md px-1 py-1 text-sm font-medium text-[#4F566B] hover:bg-gray-50"
        >
          Last 7 days
          <ChevronDown
            size={14}
            className={`transition-transform ${
              openSections.sevenDays ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.sevenDays && (
          <div className="mt-1 space-y-1">
            {data.bookmarks
              .filter((item) => item.group === "sevenDays")
              .map((item) => (
                <BookmarkItem key={item.id} title={item.title} />
              ))}
          </div>
        )}
      </div>

  
      <div className="mb-10">
        <button
          onClick={() => toggleSection("november")}
          className="flex w-full items-center justify-between rounded-md px-1 py-1 text-sm font-medium text-[#4F566B] hover:bg-gray-50"
        >
          November
          <ChevronDown
            size={14}
            className={`transition-transform ${
              openSections.november ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.november && (
          <div className="mt-1 space-y-1">
            {data.bookmarks
              .filter((item) => item.group === "November")
              .map((item) => (
                <BookmarkItem key={item.id} title={item.title} />
              ))}
          </div>
        )}
      </div>

     
      <div className="absolute bottom-4 left-3 flex items-center gap-2">
        <span className="rounded-md bg-[#EFEFFF] px-2 py-0.5 text-xs font-medium text-[#625AFA]">
          Beta
        </span>
        <p className="text-xs text-[#959AA6]">Knowledge Base</p>
      </div>
    </aside>
  );
}

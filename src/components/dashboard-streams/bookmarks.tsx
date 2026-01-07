"use client";

import data from "@/data/bookmarks.json";
import { ChevronDown, Bookmark, Clipboard } from "lucide-react";
import { useState } from "react";

type BookmarkType = {
  id: string;
  title: string;
  group?: string;
};

function BookmarkItem({
  title,
  onBookmark,
}: {
  title: string;
  onBookmark?: () => void;
}) {
  return (
    <div className="group relative flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-[#EFEFFF]">
      <p className="truncate text-sm text-[#4F566B]">
        {title.length > 26 ? title.slice(0, 26) + "..." : title}
      </p>

      <div className="invisible flex gap-2 group-hover:visible">
        <Bookmark
          size={14}
          onClick={onBookmark}
          className="cursor-pointer text-[#959AA6] hover:text-[#625AFA]"
        />
        <Clipboard
          size={14}
          className="cursor-pointer text-[#959AA6] hover:text-[#625AFA]"
        />
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

  const [bookmarkedItems, setBookmarkedItems] = useState<BookmarkType[]>([]);

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleAddBookmark = (item: BookmarkType) => {
    setBookmarkedItems((prev) => {
      const exists = prev.some((b) => b.id === item.id);
      if (exists) return prev;
      return [item, ...prev];
    });
  };

  const renderGroup = (group: string) =>
    data.bookmarks
      .filter((item) => item.group === group)
      .map((item) => (
        <BookmarkItem
          key={item.id}
          title={item.title}
          onBookmark={() =>
            handleAddBookmark({ id: item.id, title: item.title })
          }
        />
      ));

  return (
    <aside className="relative h-dvh w-72 rounded-sm border bg-white px-3 py-4 shadow-md">
  
      <h2 className="mb-2 text-xs font-medium uppercase tracking-wide text-[#959AA6]">
        Bookmarks
      </h2>

      <div className="mb-6 space-y-1">
        {bookmarkedItems.length === 0 ? (
          <p className="px-2 text-xs text-[#9CA3AF]">
            No bookmarks yet
          </p>
        ) : (
          bookmarkedItems.map((item) => (
            <BookmarkItem key={item.id} title={item.title} />
          ))
        )}
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
            {renderGroup("Today")}
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
            {renderGroup("sevenDays")}
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
            {renderGroup("November")}
          </div>
        )}
      </div>

   
      <div className="absolute bottom-4 left-3 flex items-center gap-2">
        <span className="rounded-md bg-[#EFEFFF] px-2 py-0.5 text-xs font-medium text-[#625AFA]">
          Beta
        </span>
        <p className="text-xs text-[#959AA6]">
          Knowledge Base
        </p>
      </div>
    </aside>
  );
}

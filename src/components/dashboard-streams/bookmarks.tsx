"use client";

import data from "@/data/bookmarks.json";
import { ChevronDown, Bookmark, Link2,Sparkle} from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";

function BookmarkItem({
  title,
  onSelect,
  onBookmark,
}: {
  title: string;
  onSelect?: () => void;
  onBookmark?: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className="group relative flex cursor-pointer items-center justify-between rounded-md px-2 py-1.5 hover:bg-[#EFEFFF]"
    >
      <p className="truncate text-sm text-[#4F566B]">
        {title.length > 26 ? title.slice(0, 26) + "..." : title}
      </p>

      <div className="invisible flex gap-2 group-hover:visible group-focus:visible">
        <Bookmark
          size={14}
          onClick={(e) => {
            e.stopPropagation();
            onBookmark?.();
          }}
          className="cursor-pointer text-[#959AA6] hover:text-[#625AFA]"
        />
        <Link2
          size={14}
          onClick={(e) => e.stopPropagation()}
          className="cursor-pointer text-[#959AA6] hover:text-[#625AFA]"
        />
      </div>
    </div>
  );
}

export function Bookmarks({ onSelect }: { onSelect: (text: string) => void }) {
  const [openSections, setOpenSections] = useState({
    today: true,
    sevenDays: false,
    november: true,
  });

  const [bookmarkedItems, setBookmarkedItems] = useState<any[]>([]);

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddBookmark = (item: any) => {
    setBookmarkedItems((prev) =>
      prev.some((b) => b.id === item.id) ? prev : [item, ...prev]
    );
  };

  const renderGroup = (group: string) =>
    data.bookmarks
      .filter((item) => item.group === group)
      .map((item) => (
        <BookmarkItem
          key={item.id}
          title={item.title}
          onSelect={() => onSelect(item.title)}
          onBookmark={() => handleAddBookmark(item)}
        />
      ));

  return (
    <aside className="relative h-dvh rounded-sm border bg-white px-3 py-4 shadow-md mx-auto w-full max-w-md lg:max-w-none lg:mx-0 lg:w-72 ">
      <h2 className="mb-2 text-xs font-medium uppercase tracking-wide text-[#959AA6]">
        Bookmarks
      </h2>

      <div className="mb-6 space-y-1">
        {bookmarkedItems.length === 0 ? (
          <p className="px-2 text-xs text-[#9CA3AF]">No bookmarks yet</p>
        ) : (
          bookmarkedItems.map((item) => (
            <BookmarkItem
              key={item.id}
              title={item.title}
              onSelect={() => onSelect(item.title)}
            />
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
          <div className="mt-1 space-y-1">{renderGroup("Today")}</div>
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
          <div className="mt-1 space-y-1">{renderGroup("sevenDays")}</div>
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
          <div className="mt-1 space-y-1">{renderGroup("November")}</div>
        )}
      </div>

      <div className="absolute bottom-4 left-3 flex items-center gap-2">
       <Badge
                variant="secondary"
                className="flex items-center gap-1 bg-[#EFEFFF] px-2 py-0.5 text-xs font-medium text-[#625AFA]"
              >
                <Sparkle className="h-3 w-3" fill="#625AFA" />
                Beta
              </Badge>
        <p className="text-xs text-[#959AA6]">Knowledge Base</p>
      </div>
    </aside>
  );
}

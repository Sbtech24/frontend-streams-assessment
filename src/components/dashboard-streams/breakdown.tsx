"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Image from "next/image";
import { HorizontalCards } from "./horizontal-cards";
import { ChevronDown, Sparkle } from "lucide-react";
import { BreakDownProp } from "@/types";
import { Badge } from "../ui/badge";
import bookmarksJson from "@/data/bookmarks.json";

const dataSource = [
  {
    name: "Sawyer Merritt",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.",
    date: "November 20th 2025",
  },
  {
    name: "Jessibeesocial",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.",
    date: "November 20th 2025",
  },
  {
    name: "Sawyer Merritt",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.",
    date: "November 20th 2025",
  },
  {
    name: "Sawyer Merritt",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.",
    date: "November 20th 2025",
  },
  {
    name: "Sawyer Merritt",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.",
    date: "November 20th 2025",
  },
];

const dataSources = ["App Store", "Play Store", "X (Twitter)", "TikTok", "Instagram"];

export function Breakdown({ activeBookmarkId}: BreakDownProp) {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleSource = (source: string) => {
    setSelectedSources((prev) =>
      prev.includes(source) ? prev.filter((s) => s !== source) : [...prev, source]
    );
  };

  if (!activeBookmarkId) {
    return (
      <div className="h-50 w-full flex justify-center items-center text-sm text-[#959AA6]">
        Select a bookmark to display breakdown
      </div>
    );
  }


  const bookmark = bookmarksJson.bookmarks.find((b) => b.id === activeBookmarkId);

  if (!bookmark || !bookmark.breakdown) {
    return (
      <div className="h-50 w-full flex justify-center items-center text-sm text-[#959AA6]">
        No breakdown available for this bookmark.
      </div>
    );
  }

  const { section1, section3 } = bookmark.breakdown;

  return (
    <section className="mx-auto max-w-3xl rounded-xl border bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="border-b md:border-b border-r p-6 flex flex-col gap-2">
          <h2 className="text-xl font-medium text-[#141232]">Section 1</h2>
          <h3 className="mt-4 text-lg font-semibold text-[#141232]">{section1.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{section1.description}</p>
          {section1.badge && (
            <Badge
              variant="secondary"
              className="flex items-center gap-1 bg-[#EFEFFF] px-2 py-0.5 text-xs font-medium text-[#625AFA]"
            >
              <Sparkle className="h-3 w-3" fill="#625AFA" />
              {section1.badge}
            </Badge>
          )}
        </div>

  
        <div className="border-b p-6">
          <h2 className="mb- text-xl  font-medium text-[#141232]">Section 2</h2>
          <HorizontalCards/>
        </div>

  
        <div className="border-r p-6">
          <h2 className="text-xl font-medium text-[#141232]">Section 3</h2>
          <h3 className="mt-4 text-lg font-semibold text-[#141232]">{section3.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{section3.description}</p>
        </div>

   
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-[#6B7280]">Data Source</p>
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger className="flex items-center cursor-pointer gap-1 text-sm font-medium text-[#141232] outline-none">
                {selectedSources.length === 0 ? "All" : `${selectedSources.length} selected`}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 rounded-lg border bg-white p-2 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              >
                <div className="max-h-48 space-y-1 overflow-y-auto">
                  {dataSources.map((source) => (
                    <label
                      key={source}
                      className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSources.includes(source)}
                        onChange={() => toggleSource(source)}
                        className="h-4 w-4 rounded border-gray-300 text-[#625AFA] focus:ring-[#625AFA]"
                      />
                      <span className="text-sm text-[#4F566B]">{source}</span>
                    </label>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="max-h-64 overflow-y-auto pr-2 space-y-5">
            {dataSource.map((item, index) => (
              <div
                key={index}
                className="space-y-2 hover:bg-[#F7F8F9] p-2 rounded-sm cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#141232]">{item.name}</p>
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <span>{item.date}</span>
                    <Image src="/appstore.png" alt="source" width={18} height={18} />
                  </div>
                </div>
                <p className="line-clamp-2 text-sm leading-relaxed text-[#6B7280]">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

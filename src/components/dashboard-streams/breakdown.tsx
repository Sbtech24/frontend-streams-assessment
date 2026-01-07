"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Image from "next/image";
import { HorizontalCards } from "./horizontal-cards";
import { ChevronDown } from "lucide-react";

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
];

const dataSources = [
  "App Store",
  "Play Store",
  "X (Twitter)",
  "TikTok",
  "Instagram",
];

export function Breakdown() {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleSource = (source: string) => {
    setSelectedSources((prev) =>
      prev.includes(source)
        ? prev.filter((s) => s !== source)
        : [...prev, source]
    );
  };

  return (
    <section className="mx-auto max-w-3xl rounded-xl border bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b md:border-b border-r p-6">
          <h2 className="text-sm font-medium text-[#141232]">Section 1</h2>

          <h3 className="mt-4 text-lg font-semibold text-[#141232]">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <span className="mt-4 inline-flex items-center rounded-md bg-[#EFEFFF] px-2 py-0.5 text-xs font-medium text-[#625AFA]">
            + Chip
          </span>
        </div>

        <div className="border-b p-6">
          <h2 className="mb-4 text-sm font-medium text-[#141232]">Section 2</h2>
          <HorizontalCards />
        </div>

        <div className="border-r p-6">
          <h2 className="text-sm font-medium text-[#141232]">Section 3</h2>

          <h3 className="mt-4 text-lg font-semibold text-[#141232]">
            Commodo consequat
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-[#6B7280]">Data Source</p>
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger className="flex items-center cursor-pointer gap-1 text-sm font-medium text-[#141232] outline-none">
                {selectedSources.length === 0
                  ? "All"
                  : `${selectedSources.length} selected`}
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

          <div className="space-y-5">
            {dataSource.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#141232]">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <span>{item.date}</span>
                    <Image
                      src="/appstore.png"
                      alt="source"
                      width={18}
                      height={18}
                    />
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

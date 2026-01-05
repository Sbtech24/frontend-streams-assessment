"use client";
import data from "@/data/bookmarks.json";
import { ChevronDown } from "lucide-react";

export function Bookmarks() {
  return (
    <div className="border max-w-40 p-3">
      <h2 className="text-[#959AA6] font-medium">Bookmarks</h2>
      {data.bookmarks.slice(0, 2).map((item) => (
        <div>
          <p className="text-[#4F566B] hover:bg-[#EFEFFF] hover:cursor-pointer">
            {item.title.split(" ").join("").length > 15
              ? item.title.slice(0, 12) + "..."
              : item.title}
          </p>
        </div>
      ))}

      <h2 className="text-[#959AA6] font-medium">History</h2>
      <div>
        <div className="flex justify-between gap-3 items-center">
          <h3 className="text-[#4F566B] font-medium">Today</h3>
          <ChevronDown size={15} fill="true" color="#4F566B" />
        </div>
        {data.bookmarks
          .filter((item) => item.group === "Today")
          .map((item) => (
            <div>
              <p className="text-[#4F566B] hover:bg-[#EFEFFF] hover:cursor-pointer">
                {item.title.split(" ").join("").length > 15
                  ? item.title.slice(0, 12) + "..."
                  : item.title}
              </p>
            </div>
          ))}
      </div>
      <div>
        <div className="flex justify-between gap-3 items-center">
          <h3 className="text-[#4F566B] font-medium">Last 7 Days</h3>
          <ChevronDown size={15} fill="true" color="#4F566B" />
        </div>
        {data.bookmarks
          .filter((item) => item.group === "sevenDays")
          .map((item) => (
            <div>
              <p className="text-[#4F566B] hover:bg-[#EFEFFF] hover:cursor-pointer">
                {item.title.split(" ").join("").length > 15
                  ? item.title.slice(0, 12) + "..."
                  : item.title}
              </p>
            </div>
          ))}
      </div>
      <div>
        <div className="flex justify-between gap-3 items-center">
          <h3 className="text-[#4F566B] font-medium">November</h3>
          <ChevronDown size={15} fill="true" color="#4F566B" />
        </div>
        {data.bookmarks
          .filter((item) => item.group === "November")
          .map((item) => (
            <div>
              <p className="text-[#4F566B] hover:bg-[#EFEFFF] hover:cursor-pointer">
                {item.title.split(" ").join("").length > 15
                  ? item.title.slice(0, 12) + "..."
                  : item.title}
              </p>
            </div>
          ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="rounded-md bg-[#EFEFFF] px-2 py-0.5 text-xs font-medium text-[#625AFA]">
          Beta
        </span>
        <p className="text-xs text-[#959AA6]">Knowledge Base</p>
      </div>
    </div>
  );
}

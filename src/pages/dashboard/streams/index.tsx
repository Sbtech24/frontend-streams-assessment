"use client"
import { useState } from "react";
import { Bookmarks } from "@/components/dashboard-streams/bookmarks";
import { Breakdown } from "@/components/dashboard-streams/breakdown";
import { ChatBody } from "@/components/dashboard-streams/chat-body";
import Layout from "@/components/layouts";
import { ChevronDown } from "lucide-react";


export default function Streams() {
 const [activeText, setActiveText] = useState<string | null>(null);
  return (
    <Layout>
      <header className="py-6 px-8">
        <div className="flex text-[#4F566B] justify-between w-full items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <p>Ask Stream</p>
            <ChevronDown size={13} fill="true"/>
          </div>

          <p className="text-[#4F566B] cursor-pointer">Show History</p>
        </div>
      </header>
      <ChatBody onAnalyze={setActiveText}/>

   
      <section>
        <div className="flex flex-col gap-6 lg:flex-row">
           <Bookmarks onSelect={setActiveText} />
          <div className="pt-5 w-full">
          <Breakdown activeText={activeText}/>

          </div>
        </div>

      </section>
    </Layout>
  );
}
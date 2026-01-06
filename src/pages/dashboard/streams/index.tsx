import { Bookmarks } from "@/components/bookmarks";
import { Breakdown } from "@/components/breakdown";
import { ChatBody } from "@/components/chat-body";
import Layout from "@/components/layouts";
import { ChevronDown } from "lucide-react";


export default function Streams() {
  return (
    <Layout>
      <header className="py-2 px-8">
        <div className="flex text-[#4F566B] justify-between w-full items-center">
          <div className="flex items-center gap-2">
            <p>Ask Stream</p>
            <ChevronDown size={13} fill="true"/>
          </div>

          <p className="text-[#4F566B]">Show History</p>
        </div>
      </header>
      <ChatBody/>

      {/* history section */}
      <section>
        <div className="flex flex-col md:flex-row">
          <Bookmarks/>
          <Breakdown/>
        </div>

      </section>
    </Layout>
  );
}
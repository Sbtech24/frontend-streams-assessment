import { Bookmarks } from "@/components/bookmarks";
import { Breakdown } from "@/components/breakdown";
import { ChatBody } from "@/components/chat-body";
import Layout from "@/components/layouts";

export default function Streams() {
  return (
    <Layout>
      <header className="p-3">
        <div className="flex justify-between w-full items-center">
          <div>
            <p>Ask Stream</p>
          </div>

          <p>Show History</p>
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
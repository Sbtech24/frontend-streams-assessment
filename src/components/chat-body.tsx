import { Button } from "./ui/button";

export function ChatBody() {
  return (
    <section className="border">
      <div className="w-full max-w-4xl mx-auto p-10 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold bg-[linear-gradient(78deg,#625AFA_10%,#272464_86%)] bg-clip-text text-transparent">
          Ask Stream{" "} <br />
          <span className="text-[#CAC4D0] font-normal">about your data</span>
        </h1>

        {/* Input container */}
        <div className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm">
          {/* Textarea */}
          <textarea
            placeholder="Ask anything"
            rows={1}
            className="w-full resize-none border-none bg-transparent text-sm text-[#141232] placeholder:text-[#9CA3AF] focus:outline-none"
          />

          {/* Bottom row */}
          <div className="mt-3 flex items-center justify-between">
            {/* Left info */}
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#EFEFFF] px-2 py-0.5 text-xs font-medium text-[#625AFA]">
                Beta
              </span>
              <p className="text-xs text-[#959AA6]">Conversational Analytics</p>
            </div>

            {/* Action */}
            <Button className="rounded-lg bg-[#141232] px-4 py-2 text-sm text-white hover:bg-[#1e1b4b]">
              Analyze
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

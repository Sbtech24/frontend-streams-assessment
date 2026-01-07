"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Sparkle } from "lucide-react";

type ChatBodyProps = {
  onAnalyze: (text: string) => void;
};

export function ChatBody({onAnalyze}:ChatBodyProps) {
  const [value, setValue] = useState("");

  const hasText = value.trim().length > 0;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasText) return;
    onAnalyze(value);
    setValue("");
  };

  return (
    <section className="border">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-10">

        <div
          className={`
             transition-all duration-500 ease-in-out p-5
            ${hasText ? "opacity-0 -translate-y-2 h-0 overflow-hidden" : "opacity-100 translate-y-0 h-auto"}
          `}
        >
          <h1 className="text-3xl font-semibold bg-[linear-gradient(87deg,#625AFA_2%,#272464_14%)] bg-clip-text text-transparent md:text-5xl ">
            Ask Stream{" "}
          </h1>
          <span className="text-3xl font-normal text-[#CAC4D0] md:text-5xl">
            about your data
          </span>
        </div>

       
        <div className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm transition-shadow focus-within:shadow-md">
       
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask anything"
            rows={1}
            className="w-full resize-none border-none bg-transparent text-sm text-[#141232] placeholder:text-[#9CA3AF] focus:outline-none"
          />

        
          <div className="mt-3 flex items-center justify-between">
            
            <div
              className={`
                flex items-center gap-2 
             
              `}
            >
               <Badge
                variant="secondary"
                className="flex items-center gap-1 bg-[#EFEFFF] px-2 py-0.5 text-xs font-medium text-[#625AFA]"
              >
                <Sparkle className="h-3 w-3" fill="#625AFA" />
                Beta
              </Badge>
              <p className="text-[8px] sm:text-xs text-[#959AA6]">
                Conversational Analytics
              </p>
            </div>

    
            <Button
              className="rounded-lg bg-[#141232] px-4 py-2 text-sm text-white hover:bg-[#1e1b4b]"
              disabled={!hasText}
              onClick={handleSubmit}
              
            >
              Analyze
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

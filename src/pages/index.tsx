import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F5F7FF] via-white to-[#EEF2FF]`}
    >
      <main className="mx-auto w-full max-w-xl rounded-2xl border bg-white p-10 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 rounded-full bg-[#EFEFFF] px-3 py-1 text-xs font-medium text-[#625AFA]">
            Welcome
          </span>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight bg-[linear-gradient(87deg,#625AFA_2%,#272464_14%)] bg-clip-text text-transparent">
            Welcome
          </h1>

       

          <Link
            href="/dashboard/streams"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#625AFA] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#5148e5] hover:shadow-md"
          >
            Go to Dashboard
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

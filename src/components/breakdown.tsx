import { HorizontalCards } from "./horizontal-cards";

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

export function Breakdown() {
  return (
    <section className="rounded-xl border max-w-3xl mx-auto bg-white">
      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        {/* LEFT COLUMN */}
        <div className="p-6 space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-sm font-medium text-[#141232]">Section 1</h2>

            <h3 className="mt-4 text-lg font-semibold text-[#141232]">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* small banner / chip */}
            <span className="mt-4 inline-flex items-center rounded-md bg-[#EFEFFF] px-2 py-0.5 text-xs font-medium text-[#625AFA]">
              + Chip
            </span>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-sm font-medium text-[#141232]">Section 3</h2>

            <h3 className="mt-4 text-lg font-semibold text-[#141232]">
              Commodo consequat
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="p-6 space-y-8">
          {/* Section 2 Card */}
          <div>
            <h2 className="mb-4 text-sm font-medium text-[#141232]">
              Section 2
            </h2>
            <HorizontalCards />
          </div>

          {/* Data source */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-[#6B7280]">Data Source</p>
              <button className="text-sm text-[#141232]">All</button>
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
                      <span className="rounded bg-gray-200 px-1.5 py-0.5 text-[10px]">
                        
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-[#6B7280] line-clamp-2">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

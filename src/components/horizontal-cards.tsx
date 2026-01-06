const HorizontalCardsData = [
  { id: 1, title: "Commodo consequat", bg: "bg-[#EEF0FF]" },
  { id: 2, title: "Ullamco laboris", bg: "bg-[#EDEBFF]" },
  { id: 3, title: "Exercitation nisi", bg: "bg-[#E8E6FF]" },
];

export function HorizontalCards() {
  return (
    <div className="relative h-52 w-full">
      {HorizontalCardsData.map((card, index) => (
        <div
          key={card.id}
          className={`
            absolute top-0
            w-72 rounded-xl p-6 shadow-md transition-all duration-300
            ${card.bg}
          `}
          style={{
            transform: `translateX(${index * 40}px)`,
            zIndex: HorizontalCardsData.length - index,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = `translateX(${
              index * 40
            }px) translateY(-4px)`;
            e.currentTarget.style.zIndex = "50";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `translateX(${index * 40}px)`;
            e.currentTarget.style.zIndex = `${HorizontalCardsData.length - index}`;
          }}
        >
          <h3 className="text-sm font-medium text-[#141232]">Section 2</h3>

          <h2 className="mt-4 text-lg font-semibold text-[#141232]">
            {card.title}
          </h2>

          <p className="mt-2 text-sm text-[#6B7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      ))}
    </div>
  );
}

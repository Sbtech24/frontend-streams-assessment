"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

type HorizontalCard = {
  id: number;
  title: string;
  bg: string;
};

const HorizontalCardsData: HorizontalCard[] = [
  {
    id: 1,
    title: "Insight 1",
    bg: "bg-[linear-gradient(87deg,#E0DEFE_55%,#EFEFFF_100%)]",
  },
  { id: 2, title: "Insight 2", bg: "bg-[#E3E8EE]" },
  { id: 3, title: "Insight 3", bg: "bg-[#E7F8F9]" },
 
];

export function HorizontalCards() {
  const [cards, setCards] = useState(HorizontalCardsData);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-12, 12]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const moveCardToBack = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });

    animate(x, 0, { duration: 0.2 });
  };

  return (
    <div className="relative h-60 w-full">
      {cards.map((card, index) => {
        const isTop = index === 0;

        return (
          <motion.div
            key={card.id}
            className={`
              absolute left-1/2 top-1/2 w-80 rounded-xl p-6 shadow-md
              ${card.bg}
              ${isTop ? "cursor-grab active:cursor-grabbing" : ""}
            `}
            style={{
              x: isTop ? x : 0,
              rotate: isTop ? rotate : 0,
              opacity: isTop ? opacity : 1,
              zIndex: cards.length - index,
              scale: 1 - index * 0.05,
              y: -index * 10,
              translateX: "-50%",
              translateY: "-50%",
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={() => {
              if (Math.abs(x.get()) > 80) {
                moveCardToBack();
              } else {
                animate(x, 0, { duration: 0.2 });
              }
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <h3 className="text-sm font-medium text-[#141232]">
              Section 2
            </h3>

            <h2 className="mt-4 text-lg font-semibold text-[#141232]">
              {card.title}
            </h2>

            <p className="mt-2 text-sm text-[#6B7280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

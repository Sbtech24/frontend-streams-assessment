"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

const cardsData = [
  {
    id: 1,
    title: "Insight 1",
    bg: "bg-[linear-gradient(87deg,#E0DEFE_55%,#EFEFFF_100%)]",
  },
  { id: 2, title: "Insight 2", bg: "bg-[#4F566B]" },
  { id: 3, title: "Insight 3", bg: "bg-[#E7F8F9]" },

];

export function HorizontalCards() {
  const [cards, setCards] = useState(cardsData);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-120, 120], [-6, 6]);
  const opacity = useTransform(x, [-120, 0, 120], [0.6, 1, 0.6]);

  const cycleCard = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });

    animate(x, 0, { duration: 0.3, ease: "easeOut" });
  };

  return (
    <div className="relative h-[260px] mx-auto w-full max-w-md">
      {cards.map((card, index) => {
        const isTop = index === 0;

        return (
          <motion.div
            key={card.id}
            className={`
              absolute inset-0 rounded-2xl p-6 shadow-lg
              ${card.bg}
              ${isTop ? "cursor-grab active:cursor-grabbing" : ""}
            `}
            style={{
              x: isTop ? x : 0,
              rotate: isTop ? rotate : 0,
              opacity: isTop ? opacity : 1,
              zIndex: cards.length - index,
              scale: 1 - index * 0.04,
              y: index * 10,
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={() => {
              if (Math.abs(x.get()) > 70) {
                cycleCard();
              } else {
                animate(x, 0, { duration: 0.25 });
              }
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
          >
            <h3 className="text-lg font-medium  text-[#141232]">
              Section 2
            </h3>

            <h2 className="mt-4 text-lg font-semibold text-[#141232]">
              {card.title}
            </h2>

            <p className="mt-3 text-xs leading-relaxed text-wrap text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur
              
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

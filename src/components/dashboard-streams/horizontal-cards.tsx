"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { Card, HorizontalCardsProps } from "@/types";

export function HorizontalCards({ cards: initialCards }: HorizontalCardsProps) {
 
  const defaultCards: Card[] = [
    { id: 1, title: "Insight 1", bg: "bg-[linear-gradient(87deg,#E0DEFE_55%,#EFEFFF_100%)]", description: "Lorem ipsum dolor sit amet" },
    { id: 2, title: "Insight 2", bg: "bg-[#F5F5F5]", description: "Consectetur adipiscing elit" },
    { id: 3, title: "Insight 3", bg: "bg-[#E7F8F9]", description: "Sed do eiusmod tempor" },
  ];

  const [cards, setCards] = useState<Card[]>(initialCards || defaultCards);

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
    <div className="relative h-64 mx-auto w-full max-w-md">
      {cards.map((card, index) => {
        const isTop = index === 0;

        return (
          <motion.div
            key={card.id}
            className={`absolute inset-0 rounded-2xl p-6 shadow-lg ${card.bg || "bg-white"} ${
              isTop ? "cursor-grab active:cursor-grabbing" : ""
            }`}
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
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <h3 className="text-sm font-medium text-[#141232]">Section 2</h3>
            <h2 className="mt-2 text-lg font-semibold text-[#141232]">{card.title}</h2>
            {card.description && (
              <p className="mt-2 text-xs leading-relaxed text-[#4F566B]">{card.description}</p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

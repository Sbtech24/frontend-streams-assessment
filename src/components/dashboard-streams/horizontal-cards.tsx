"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { Card, HorizontalCardsProps } from "@/types";

const STACK_OFFSET_Y = 10;     // vertical stack spacing
const STACK_OFFSET_X = 6;      // horizontal stack spacing
const SCALE_FACTOR = 0.045;    // depth scale

export function HorizontalCards({ cards: initialCards }: HorizontalCardsProps) {
  const defaultCards: Card[] = [
    {
      id: 1,
      title: "Insight 1",
      bg: "bg-[linear-gradient(87deg,#E0DEFE_55%,#EFEFFF_100%)]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Insight 2",
      bg: "bg-[#F5F5F5]",
      description: "Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: 3,
      title: "Insight 3",
      bg: "bg-[#E7F8F9]",
      description: "Ut enim ad minim veniam quis nostrud.",
    },
  ];

  const [cards, setCards] = useState<Card[]>(initialCards || defaultCards);

  /* ---------------- Drag Motion ---------------- */
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-120, 120], [-6, 6]);
  const opacity = useTransform(x, [-120, 0, 120], [0.65, 1, 0.65]);

  const cycleCard = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    animate(x, 0, { duration: 0.25, ease: "easeOut" });
  };

  return (
    <div className="relative h-64 mx-auto w-full max-w-md">
      {cards.map((card, index) => {
        const isTop = index === 0;

        return (
          <motion.div
            key={card.id}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={() => {
              if (Math.abs(x.get()) > 70) {
                cycleCard();
              } else {
                animate(x, 0, { duration: 0.2 });
              }
            }}
            className={`
              absolute inset-0 rounded-3xl p-6 shadow-xl border border-black/5
              ${card.bg || "bg-white"}
              ${isTop ? "cursor-grab active:cursor-grabbing" : ""}
            `}
            style={{
              x: isTop ? x : index * STACK_OFFSET_X,
             y: index === 0 ? STACK_OFFSET_Y : -index * STACK_OFFSET_Y,
              rotate: isTop ? rotate : index * 1.2,
              opacity: isTop ? opacity : 1,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              transformOrigin: "center bottom",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 24,
            }}
          >
            <h3 className="text-xs font-medium text-[#141232] opacity-80">
              Section {index + 1}
            </h3>

            <h2 className="mt-2 text-lg font-semibold text-[#141232]">
              {card.title}
            </h2>

            {card.description && (
              <p className="mt-3 text-sm leading-relaxed text-[#4F566B]">
                {card.description}
              </p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

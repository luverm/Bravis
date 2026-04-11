"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Stethoscope,
  Baby,
  Cross,
  Pill,
  Activity,
  HeartPulse,
  HandHeart,
  ShieldPlus,
  Syringe,
} from "lucide-react";

const icons = [
  Heart,
  Stethoscope,
  Baby,
  Cross,
  Pill,
  Activity,
  HeartPulse,
  HandHeart,
  ShieldPlus,
  Syringe,
];

// Large, clearly visible icons along both sides of the page
const items = [
  { icon: 0, x: 3, y: 100, size: 48, duration: 16, delay: 0, rotate: 12, fill: true },
  { icon: 1, x: 88, y: 280, size: 44, duration: 20, delay: 1, rotate: -10, fill: false },
  { icon: 2, x: 5, y: 500, size: 40, duration: 18, delay: 2, rotate: 8, fill: false },
  { icon: 6, x: 90, y: 700, size: 46, duration: 22, delay: 0.5, rotate: -15, fill: true },
  { icon: 4, x: 4, y: 920, size: 42, duration: 19, delay: 3, rotate: 18, fill: false },
  { icon: 3, x: 91, y: 1120, size: 44, duration: 17, delay: 1.5, rotate: -8, fill: false },
  { icon: 0, x: 3, y: 1350, size: 52, duration: 21, delay: 0.8, rotate: 14, fill: true },
  { icon: 5, x: 89, y: 1560, size: 40, duration: 18, delay: 2.5, rotate: -12, fill: false },
  { icon: 7, x: 4, y: 1780, size: 46, duration: 20, delay: 1.2, rotate: 10, fill: true },
  { icon: 8, x: 90, y: 2000, size: 44, duration: 16, delay: 3.5, rotate: -6, fill: false },
  { icon: 9, x: 3, y: 2220, size: 40, duration: 22, delay: 0.3, rotate: 16, fill: false },
  { icon: 0, x: 88, y: 2450, size: 50, duration: 19, delay: 2, rotate: -18, fill: true },
  { icon: 6, x: 5, y: 2680, size: 44, duration: 17, delay: 1.8, rotate: 12, fill: true },
  { icon: 1, x: 91, y: 2900, size: 42, duration: 21, delay: 0.6, rotate: -14, fill: false },
  { icon: 2, x: 4, y: 3150, size: 46, duration: 18, delay: 3.2, rotate: 8, fill: false },
  { icon: 0, x: 90, y: 3400, size: 52, duration: 20, delay: 1, rotate: -10, fill: true },
  { icon: 4, x: 3, y: 3650, size: 40, duration: 16, delay: 2.8, rotate: 20, fill: false },
  { icon: 7, x: 89, y: 3900, size: 46, duration: 22, delay: 0.4, rotate: -16, fill: true },
  { icon: 3, x: 5, y: 4150, size: 42, duration: 19, delay: 1.6, rotate: 14, fill: false },
  { icon: 6, x: 91, y: 4400, size: 48, duration: 17, delay: 3, rotate: -8, fill: true },
];

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {items.map((item, i) => {
        const Icon = icons[item.icon];
        return (
          <motion.div
            key={i}
            className="absolute text-bravis-300"
            style={{
              left: `${item.x}%`,
              top: `${item.y}px`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -12, 0, 10, 0],
              rotate: [0, item.rotate, -item.rotate / 2, item.rotate / 3, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <Icon
              size={item.size}
              strokeWidth={1.5}
              fill={item.fill ? "currentColor" : "none"}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

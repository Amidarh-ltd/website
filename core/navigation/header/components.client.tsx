"use client";

import * as React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";

const variants: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const HeaderClient: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { scrollY } = useScroll();
  const lastYRef = React.useRef(0);
  const [isHidden, setIsHidden] = React.useState(false);

  useMotionValueEvent(scrollY, "change", function (y) {
    const diff = y - lastYRef.current;
    if (Math.abs(diff) > 50) {
      setIsHidden(diff > 50);
      lastYRef.current = y;
    }
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.div
        animate={isHidden ? "hidden" : "visible"}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
        variants={variants}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full max-w-7xl rounded-2xl border border-border/60 bg-background/80 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl"
      >
        {children}
      </motion.div>
    </header>
  );
};

// framer helper library
"use client";
import React from "react";

import { Tab } from "../hooks/useTabs";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.5,
};

type Props = {
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
};

const Tabs = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}: Props): JSX.Element => {
  const [buttonRefs, setButtonRefs] = React.useState<
    Array<HTMLButtonElement | null>
  >([]);

  React.useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const navRef = React.useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = React.useState<number | null>(
    null,
  );
  const hoveredRect =
    buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

  return (
    <nav
      ref={navRef}
      className="relative z-0 flex flex-shrink-0 items-center justify-center py-2"
      onPointerLeave={(e) => setHoveredTabIndex(null)}
    >
      {tabs.map((item, i) => {
        const isActive = hoveredTabIndex === i || selectedTabIndex === i;

        return (
          <motion.button
            key={i}
            className={classNames(
              "relative z-20 mb-0.5 flex h-10 cursor-pointer select-none items-center rounded-md bg-transparent px-4 text-lg transition-colors hover:text-white",
              {
                "text-white/60": !isActive, // Default color for non-active tabs
                "text-white/90": isActive, // Active tab color
              },
            )}
            ref={(el: HTMLButtonElement | null) => {
              if (el) {
                buttonRefs[i] = el;
              }
            }}
            onPointerEnter={(e) => {
              setHoveredTabIndex(i);
            }}
            onFocus={() => {
              setHoveredTabIndex(i);
            }}
            onClick={() => {
              setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
            }}
          >
            {item.label}
          </motion.button>
        );
      })}

      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key={"hover"}
            className="absolute left-0 top-0 z-10 mb-1 rounded-md bg-zinc-200 p-1 dark:bg-zinc-800"
            initial={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            animate={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 1,
            }}
            exit={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>

      {selectedRect && navRect && (
        <motion.div
          className="absolute bottom-0 left-0.5 z-10 h-[3px] bg-zinc-700 dark:bg-zinc-200"
          initial={false}
          animate={{
            width: selectedRect.width * 0.8,
            x: `calc(${selectedRect.left - navRect.left}px + 10%)`,
            opacity: 1,
          }}
        />
      )}
    </nav>
  );
};

export const Framer = { Tabs };

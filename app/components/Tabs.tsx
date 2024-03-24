// Tabs.tsx Component
"use client";
import React from "react";

import { useTabs } from "../hooks/useTabs";
import { Framer } from "../lib/framer";

import Activity from "./Activity";
import Domains from "./Domains";
import Integrations from "./Integrations";
import Overview from "./Overview";

export default function Tabs() {
  const [hookProps] = React.useState({
    tabs: [
      {
        label: "Overview",
        children: <Overview />,
        id: Math.random().toString(),
      },
      {
        label: "Integrations",
        children: <Integrations />,
        id: Math.random().toString(),
      },
      {
        label: "Activity",
        children: <Activity />,
        id: Math.random().toString(),
      },
      {
        label: "Domains",
        children: <Domains />,
        id: Math.random().toString(),
      },
    ],
    initialTabId: "Matches",
  });
  const framer = useTabs(hookProps);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-start border-b border-zinc-700 bg-zinc-950 px-8 pt-16">
        <Framer.Tabs {...framer.tabProps} />
      </div>

      <div className="pt-10">{framer.selectedTab.children}</div>
    </div>
  );
}

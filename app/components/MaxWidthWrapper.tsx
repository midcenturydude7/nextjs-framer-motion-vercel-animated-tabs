// MaxWidthWrapper.tsx Component
"use client";
import React, { ReactNode } from "react";

export default function MaxWidthWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
      {children}
    </div>
  );
}

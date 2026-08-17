"use client";

import * as React from "react";

export const HeaderClient: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-black/[0.06] bg-white/70 backdrop-blur-xl">
      {children}
    </header>
  );
};

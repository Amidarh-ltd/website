"use client";

import * as React from "react";

export const HeaderClient: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-border-soft bg-background/85 backdrop-blur-md">
      {children}
    </header>
  );
};

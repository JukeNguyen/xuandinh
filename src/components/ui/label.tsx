"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-caption text-foreground flex items-center gap-2 leading-none font-semibold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-(--opacity-disabled) peer-disabled:cursor-not-allowed peer-disabled:opacity-(--opacity-disabled)",
        className,
      )}
      {...props}
    />
  );
}

export { Label };

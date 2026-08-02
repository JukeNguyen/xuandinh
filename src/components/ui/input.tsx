import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border-border bg-surface-raised text-body text-foreground placeholder:text-muted-2 focus-visible:border-accent focus-visible:outline-accent aria-invalid:border-error h-11 w-full min-w-0 rounded-md border px-3 transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-(--opacity-disabled)",
        className,
      )}
      {...props}
    />
  );
}

export { Input };

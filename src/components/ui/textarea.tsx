import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border bg-surface-raised text-body text-foreground placeholder:text-muted-2 focus-visible:border-accent focus-visible:outline-accent aria-invalid:border-error flex field-sizing-content min-h-24 w-full rounded-md border px-3 py-2 transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-(--opacity-disabled)",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap font-body font-semibold tracking-[0.01em] outline-none select-none transition-all duration-(--duration-fast) ease-standard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-(--opacity-disabled)",
  {
    variants: {
      variant: {
        primary:
          "rounded-pill bg-accent text-accent-foreground hover:scale-[1.02] hover:shadow-glow-accent active:scale-100",
        outline:
          "rounded-md border border-foreground/20 bg-transparent text-foreground hover:bg-surface-raised",
        ghost: "rounded-md bg-transparent text-foreground hover:bg-surface-raised",
      },
      size: {
        md: "h-11 gap-2 px-6 text-body",
        lg: "h-14 gap-2 px-8 text-body-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
  /** Placement identifier for analytics (CONTENT_STRATEGY.md §Analytics Strategy). Required on primary CTAs. */
  ctaLocation?: string;
  loading?: boolean;
}

function Button({
  className,
  variant = "primary",
  size = "md",
  ctaLocation,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-cta-location={ctaLocation}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {loading ? <span className="motion-safe:animate-pulse">Loading…</span> : children}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/shared/lib/utils";

const textVariants = cva("text-pretty text-foreground", {
  variants: {
    variant: {
      default: "font-medium dark:font-normal",
      h1: "text-5xl font-bold",
      h2: "text-3xl font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ asChild = false, className, variant, ...props }, ref) => {
    const Tag = variant === "h1" ? "h1" : variant === "h2" ? "h2" : "p";
    const Comp = asChild ? Slot : Tag;
    return (
      <Comp
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

export { Text, textVariants };

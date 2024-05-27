import { cn } from "@/lib/utils";

export type SpacingProps = {
  size?: "sm" | "md" | "lg";
};

export const Spacing = (props: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-16": props.size === "sm",
        "h-16 lg:h-24": props.size === "md",
        "h-24 lg:h-32": props.size === "lg",
      })}
    />
  );
};

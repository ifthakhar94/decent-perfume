import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";

export type HugeIconProps = Omit<HugeiconsIconProps, "icon"> & {
  icon: HugeiconsIconProps["icon"];
};

/** Consistent Hugeicons wrapper — defaults tuned for header / UI chrome. */
export function HugeIcon({
  icon,
  size = 22,
  strokeWidth = 1.65,
  color = "currentColor",
  className,
  ...rest
}: HugeIconProps) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
      {...rest}
    />
  );
}

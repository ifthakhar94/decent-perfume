import type { HugeiconsIconProps } from "@hugeicons/react";
import {
  Facebook01Icon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";

export type SocialLinkItem = {
  id: string;
  href: string;
  label: string;
  icon: HugeiconsIconProps["icon"];
};

/**
 * Public social profiles — replace hrefs with real brand URLs.
 */
export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: "instagram",
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: Facebook01Icon,
  },
  {
    id: "twitter",
    href: "https://twitter.com/",
    label: "X (Twitter)",
    icon: TwitterIcon,
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/",
    label: "YouTube",
    icon: YoutubeIcon,
  },
];

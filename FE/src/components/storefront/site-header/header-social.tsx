import { HugeIcon } from "@/components/ui/huge-icon";
import { SOCIAL_LINKS } from "@/config/social-links";

export function HeaderSocial() {
  return (
    <div
      role="group"
      aria-label="Social media links"
      className="flex shrink-0 items-center gap-0.5 rounded-2xl border border-white/60 bg-white/40 px-2 py-1 shadow-md ring-1 shadow-rose-950/12 ring-rose-950/8 backdrop-blur-md"
    >
      {SOCIAL_LINKS.map(({ id, href, label, icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-perfume-ink inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-white/55 focus-visible:ring-2 focus-visible:ring-rose-800/45 focus-visible:outline-none"
        >
          <HugeIcon icon={icon} size={17} strokeWidth={1.7} />
        </a>
      ))}
    </div>
  );
}

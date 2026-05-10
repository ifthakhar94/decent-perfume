import { SiteHeader } from "@/components/storefront/site-header/site-header";
import { StorefrontFooter } from "@/components/storefront/storefront-footer";
import { StoreSceneBackground } from "@/components/storefront/store-scene-background";

type StorefrontShellProps = {
  children: React.ReactNode;
};

/**
 * Layout shell for the customer-facing site: scene + sticky header + main + footer.
 */
export function StorefrontShell({ children }: StorefrontShellProps) {
  return (
    <div className="relative flex min-h-full min-w-0 flex-1 flex-col">
      <StoreSceneBackground />
      <SiteHeader />
      <main
        id="main-content"
        className="relative z-0 flex min-w-0 flex-1 flex-col overflow-x-hidden"
      >
        {children}
      </main>
      <StorefrontFooter />
    </div>
  );
}

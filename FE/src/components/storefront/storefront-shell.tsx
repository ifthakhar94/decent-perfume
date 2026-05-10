import { SiteHeader } from "@/components/storefront/site-header/site-header";
import { StoreSceneBackground } from "@/components/storefront/store-scene-background";

type StorefrontShellProps = {
  children: React.ReactNode;
};

/**
 * Layout shell for the customer-facing site: scene + sticky header + main landmark.
 */
export function StorefrontShell({ children }: StorefrontShellProps) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <StoreSceneBackground />
      <SiteHeader />
      <main id="main-content" className="relative z-0 flex flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}

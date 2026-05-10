import { StorefrontShell } from "@/components/storefront/storefront-shell";

export default function StoreRouteGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StorefrontShell>{children}</StorefrontShell>;
}

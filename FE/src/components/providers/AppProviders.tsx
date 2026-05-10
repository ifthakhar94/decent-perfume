"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AntdThemeProvider } from "./AntdThemeProvider";
import { StoreProvider } from "./StoreProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <StoreProvider>
        <AntdThemeProvider>{children}</AntdThemeProvider>
      </StoreProvider>
    </AntdRegistry>
  );
}

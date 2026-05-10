"use client";

import { ConfigProvider, theme } from "antd";

/** Aligns Ant Design with the storefront wine / gold / cream fragrance palette. */
export function AntdThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#6b2f3c",
          colorInfo: "#8a6240",
          colorText: "#26191c",
          colorBgBase: "#faf6f1",
          borderRadius: 14,
          fontFamily: "var(--font-syne), ui-sans-serif, system-ui, sans-serif",
          controlOutlineWidth: 2,
          controlOutline: "rgba(107, 47, 60, 0.22)",
          colorBorder: "rgba(255, 255, 255, 0.45)",
          colorBorderSecondary: "rgba(255, 255, 255, 0.35)",
          boxShadow:
            "0 8px 32px rgba(74, 31, 40, 0.1), 0 2px 8px rgba(74, 31, 40, 0.05)",
        },
        components: {
          Button: {
            fontWeight: 600,
            primaryShadow: "0 8px 24px rgba(107, 47, 60, 0.32)",
            defaultShadow: "0 4px 16px rgba(74, 31, 40, 0.08)",
            dangerShadow: "0 4px 16px rgba(220, 38, 38, 0.2)",
            defaultGhostColor: "rgba(38, 25, 28, 0.88)",
          },
          Tag: {
            defaultBg: "rgba(255, 255, 255, 0.35)",
          },
          Spin: {
            colorPrimary: "#6b2f3c",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

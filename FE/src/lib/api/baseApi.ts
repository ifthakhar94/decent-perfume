import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export type ComingSoonSection = "store" | "dashboard";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["ComingSoon"],
  endpoints: (build) => ({
    getComingSoonCopy: build.query<
      { title: string; subtitle: string },
      ComingSoonSection
    >({
      queryFn: async (section) => {
        const copy: Record<
          ComingSoonSection,
          { title: string; subtitle: string }
        > = {
          store: {
            title: "Something exquisite is bottling up",
            subtitle:
              "Our storefront is steeping notes of amber, rose, and velvet patience. The launch is worth the wait.",
          },
          dashboard: {
            title: "Merchant HQ is on the way",
            subtitle:
              "Inventory, orders, and analytics—distilled into one bold dashboard. Seller tools pour in soon.",
          },
        };

        return { data: copy[section] };
      },
      providesTags: (_result, _err, section) => [
        { type: "ComingSoon", id: section },
      ],
    }),
  }),
});

export const { useGetComingSoonCopyQuery } = baseApi;

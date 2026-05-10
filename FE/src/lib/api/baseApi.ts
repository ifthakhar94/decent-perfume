import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["DashboardComingSoon"],
  endpoints: (build) => ({
    getDashboardComingSoonCopy: build.query<
      { title: string; subtitle: string },
      void
    >({
      queryFn: async () => ({
        data: {
          title: "Merchant HQ is on the way",
          subtitle:
            "Inventory, orders, and analytics—distilled into one bold dashboard. Seller tools pour in soon.",
        },
      }),
      providesTags: [{ type: "DashboardComingSoon", id: "copy" }],
    }),
  }),
});

export const { useGetDashboardComingSoonCopyQuery } = baseApi;

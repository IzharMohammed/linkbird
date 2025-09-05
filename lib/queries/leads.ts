"use client";

import { getLeads, getLeadsByCampaignId } from "@/actions/leads"
import { Lead } from "@/db/schema/leads"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { useLeadsStore } from "../stores/leads-store";
import { useEffect } from "react";

// export function useLeads(filters?: {
//   search?: string
//   status?: string
//   campaign?: string
// }) {
//   return useInfiniteQuery({
//     queryKey: ["leads", filters],
//     queryFn: async ({ pageParam = 0 }): Promise<{ leads: Lead[]; hasMore: boolean }> => {
//       return getLeads({
//         ...filters,
//         page: pageParam,
//         pageSize: 20,
//       })
//     },
//     getNextPageParam: (lastPage, pages) =>
//       lastPage.hasMore ? pages.length : undefined,
//     initialPageParam: 0,
//     staleTime: 2 * 60 * 1000, // 2 minutes
//   })
// }
export function useLeads() {
  const { setAllLeads, appendLeads, setError } = useLeadsStore();

  const query = useInfiniteQuery({
    queryKey: ["leads"],
    queryFn: async ({ pageParam = 0 }): Promise<{ leads: Lead[]; hasMore: boolean }> => {
      return getLeads({
        page: pageParam,
        pageSize: 20,
      }) as any;
    },
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length : undefined,
    initialPageParam: 0,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });

  // Update Zustand store when data changes
  useEffect(() => {
    if (query.data) {
      // Flatten all pages and store in Zustand
      const allLeads = query.data.pages.flatMap((page) => page.leads);
      setAllLeads(allLeads);
      setError(null);
    }
    if (query.error) {
      setError(query.error.message);
    }
  }, [query.data, query.error, setAllLeads, setError]);

  return {
    ...query,
    // Return the flattened leads for compatibility
    leads: query.data?.pages.flatMap((page) => page.leads) || [],
  };
}

export function useCampaignLeads(id: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ["campaign_leads", id],
    queryFn: async () => getLeadsByCampaignId(id),
    enabled: options?.enabled
  })
}


"use client";

import { getLeads, getLeadsByCampaignId } from "@/actions/leads"
import { Lead } from "@/db/schema/leads"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { useLeadsStore } from "../stores/leads-store";
import { useEffect, useMemo } from "react";

// client - filtering
export function useLeads() {
  const { setAllLeads, setError } = useLeadsStore();

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

// Server - filtering
export function useLeadsServerFiltering() {
  const { searchQuery, statusFilter, campaignFilter } = useLeadsStore();

  // Create query key that includes filters for proper caching
  const queryKey = useMemo(() => [
    "leads",
    { search: searchQuery, status: statusFilter, campaign: campaignFilter }
  ], [searchQuery, statusFilter, campaignFilter]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      return getLeads({
        page: pageParam,
        pageSize: 20,
        search: searchQuery || undefined,
        status: statusFilter !== 'all' ? statusFilter : undefined,
        campaign: campaignFilter !== 'all' ? campaignFilter : undefined,
      });
    },
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length : undefined,
    initialPageParam: 0,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });

  // Flatten all pages for easy consumption
  const leads = useMemo(() =>
    query.data?.pages.flatMap((page) => page.leads) || [],
    [query.data]
  );

  return {
    ...query,
    leads,
  };
}



export function useCampaignLeads(id: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ["campaign_leads", id],
    queryFn: async () => getLeadsByCampaignId(id),
    enabled: options?.enabled
  })
}


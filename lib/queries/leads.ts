"use client";

import { getLeads, getLeadsByCampaignId } from "@/actions/leads"
import { Lead } from "@/db/schema/leads"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export function useLeads(filters?: {
  search?: string
  status?: string
  campaign?: string
}) {
  return useInfiniteQuery({
    queryKey: ["leads", filters],
    queryFn: async ({ pageParam = 0 }): Promise<{ leads: Lead[]; hasMore: boolean }> => {
      return getLeads({
        ...filters,
        page: pageParam,
        pageSize: 20,
      })
    },
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length : undefined,
    initialPageParam: 0,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}

export function useCampaignLeads(id: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ["campaign_leads", id],
    queryFn: async () => getLeadsByCampaignId(id),
    enabled: options?.enabled
  })
}
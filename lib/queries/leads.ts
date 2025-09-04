"use client";

import { getLeads } from "@/actions/leads"
import { Lead, leads } from "@/db/schema/leads"
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query"

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
// export const useLead = (id: string) => {
//   return useQuery({
//     queryKey: ["lead", id],
//     queryFn: async (): Promise<Lead | null> => {
//       await new Promise((resolve) => setTimeout(resolve, 300))
//       return mockLeads.find((l) => l.id === id) || null
//     },
//     enabled: !!id,
//   })
// }

// export const useUpdateLead = () => {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: async ({ id, data }: { id: string; data: Partial<Lead> }): Promise<Lead> => {
//       await new Promise((resolve) => setTimeout(resolve, 500))
//       const existingLead = mockLeads.find((l) => l.id === id)
//       if (!existingLead) throw new Error("Lead not found")

//       return { ...existingLead, ...data, updatedAt: new Date() }
//     },
//     onSuccess: (updatedLead) => {
//       queryClient.setQueryData(["lead", updatedLead.id], updatedLead)
//       queryClient.invalidateQueries({ queryKey: ["leads"] })
//     },
//   })
// }

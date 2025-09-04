import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { Campaign } from "@/lib/db/schema"

// Mock data for development - replace with actual API calls
const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Just Herbs",
    status: "active",
    userId: "user1",
    totalLeads: 20,
    requestsSent: 0,
    requestsAccepted: 0,
    requestsReplied: 0,
    startDate: new Date("2025-02-09"),
    conversionRate: "0.0%",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Juicy chemistry",
    status: "active",
    userId: "user1",
    totalLeads: 11,
    requestsSent: 0,
    requestsAccepted: 0,
    requestsReplied: 0,
    startDate: new Date("2025-02-09"),
    conversionRate: "0.0%",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Hyugalife 2",
    status: "active",
    userId: "user1",
    totalLeads: 19,
    requestsSent: 0,
    requestsAccepted: 0,
    requestsReplied: 0,
    startDate: new Date("2025-02-09"),
    conversionRate: "0.0%",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const useCampaigns = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: async (): Promise<Campaign[]> => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      return mockCampaigns
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useCampaign = (id: string) => {
  return useQuery({
    queryKey: ["campaign", id],
    queryFn: async (): Promise<Campaign | null> => {
      await new Promise((resolve) => setTimeout(resolve, 300))
      return mockCampaigns.find((c) => c.id === id) || null
    },
    enabled: !!id,
  })
}

export const useCreateCampaign = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: Partial<Campaign>): Promise<Campaign> => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const newCampaign: Campaign = {
        id: Math.random().toString(),
        name: data.name || "",
        status: "active",
        userId: "user1",
        totalLeads: 0,
        requestsSent: 0,
        requestsAccepted: 0,
        requestsReplied: 0,
        startDate: new Date(),
        conversionRate: "0.0%",
        createdAt: new Date(),
        updatedAt: new Date(),
        ...data,
      }
      return newCampaign
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["campaigns"] })
    },
  })
}

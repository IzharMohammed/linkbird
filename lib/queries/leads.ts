import { Lead } from "@/db/schema/leads"
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query"


// Mock data for development
const mockLeads: Lead[] = [
  {
    id: "1",
    name: "Om Satyarthy",
    title: "Regional Head",
    company: "Gynoveda",
    avatar: "/professional-headshot.png",
    email: "om@gynoveda.com",
    linkedinUrl: "https://linkedin.com/in/om-satyarthy",
    campaignId: "1",
    userId: "user1",
    status: "pending",
    activity: [],
    lastActivity: new Date(),
    connectionStatus: "not_connected",
    notes: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Dr. Bhuvaneshwari",
    title: "Fertility & Women's Health ★ A...",
    company: "Gynoveda",
    avatar: "/professional-doctor.png",
    email: "dr.bhuvaneshwari@gynoveda.com",
    linkedinUrl: "https://linkedin.com/in/dr-bhuvaneshwari",
    campaignId: "1",
    userId: "user1",
    status: "sent",
    activity: [],
    lastActivity: new Date(Date.now() - 7 * 60 * 1000), // 7 mins ago
    connectionStatus: "pending",
    notes: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Surdeep Singh",
    title: "Building Product-led SEO Growt...",
    company: "Gynoveda",
    avatar: "/marketing-professional.png",
    email: "surdeep@gynoveda.com",
    linkedinUrl: "https://linkedin.com/in/surdeep-singh",
    campaignId: "1",
    userId: "user1",
    status: "sent",
    activity: [],
    lastActivity: new Date(Date.now() - 7 * 60 * 1000),
    connectionStatus: "pending",
    notes: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const useLeads = (filters?: {
  search?: string
  status?: string
  campaign?: string
}) => {
  return useInfiniteQuery({
    queryKey: ["leads", filters],
    queryFn: async ({ pageParam = 0 }): Promise<{ leads: Lead[]; hasMore: boolean }> => {
      await new Promise((resolve) => setTimeout(resolve, 500))

      let filteredLeads = [...mockLeads]

      if (filters?.search) {
        filteredLeads = filteredLeads.filter(
          (lead) =>
            lead.name.toLowerCase().includes(filters.search!.toLowerCase()) ||
            lead.company?.toLowerCase().includes(filters.search!.toLowerCase()),
        )
      }

      if (filters?.status && filters.status !== "all") {
        filteredLeads = filteredLeads.filter((lead) => lead.status === filters.status)
      }

      if (filters?.campaign && filters.campaign !== "all") {
        filteredLeads = filteredLeads.filter((lead) => lead.campaignId === filters.campaign)
      }

      const pageSize = 20
      const start = pageParam * pageSize
      const end = start + pageSize

      return {
        leads: filteredLeads.slice(start, end),
        hasMore: end < filteredLeads.length,
      }
    },
    getNextPageParam: (lastPage, pages) => (lastPage.hasMore ? pages.length : undefined),
    initialPageParam: 0,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}

export const useLead = (id: string) => {
  return useQuery({
    queryKey: ["lead", id],
    queryFn: async (): Promise<Lead | null> => {
      await new Promise((resolve) => setTimeout(resolve, 300))
      return mockLeads.find((l) => l.id === id) || null
    },
    enabled: !!id,
  })
}

export const useUpdateLead = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Lead> }): Promise<Lead> => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const existingLead = mockLeads.find((l) => l.id === id)
      if (!existingLead) throw new Error("Lead not found")

      return { ...existingLead, ...data, updatedAt: new Date() }
    },
    onSuccess: (updatedLead) => {
      queryClient.setQueryData(["lead", updatedLead.id], updatedLead)
      queryClient.invalidateQueries({ queryKey: ["leads"] })
    },
  })
}

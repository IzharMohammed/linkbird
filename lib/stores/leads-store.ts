import { create } from "zustand"
import type { Lead } from "@/lib/db/schema"

interface LeadsState {
  selectedLeads: string[]
  selectedLead: Lead | null
  searchQuery: string
  statusFilter: string
  campaignFilter: string
  isLeadProfileOpen: boolean

  // Actions
  setSelectedLeads: (leadIds: string[]) => void
  toggleLeadSelection: (leadId: string) => void
  clearSelectedLeads: () => void
  setSelectedLead: (lead: Lead | null) => void
  setSearchQuery: (query: string) => void
  setStatusFilter: (status: string) => void
  setCampaignFilter: (campaign: string) => void
  setLeadProfileOpen: (open: boolean) => void
}

export const useLeadsStore = create<LeadsState>((set) => ({
  selectedLeads: [],
  selectedLead: null,
  searchQuery: "",
  statusFilter: "all",
  campaignFilter: "all",
  isLeadProfileOpen: false,

  setSelectedLeads: (leadIds) => set({ selectedLeads: leadIds }),
  toggleLeadSelection: (leadId) =>
    set((state) => ({
      selectedLeads: state.selectedLeads.includes(leadId)
        ? state.selectedLeads.filter((id) => id !== leadId)
        : [...state.selectedLeads, leadId],
    })),
  clearSelectedLeads: () => set({ selectedLeads: [] }),
  setSelectedLead: (lead) => set({ selectedLead: lead }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setStatusFilter: (status) => set({ statusFilter: status }),
  setCampaignFilter: (campaign) => set({ campaignFilter: campaign }),
  setLeadProfileOpen: (open) => set({ isLeadProfileOpen: open }),
}))
